"use client";

import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import { Pencil, Check, X, RotateCcw } from "lucide-react";
import { usePathname } from "next/navigation";

let contentCachePromise: Promise<Record<string, string>> | null = null;
let lastFetchTime = 0;

function fetchContent(force = false) {
  const now = Date.now();
  if (!contentCachePromise || force || now - lastFetchTime > 5000) {
    lastFetchTime = now;
    contentCachePromise = fetch("/api/content", { cache: "no-store" })
      .then((res) => res.json())
      .catch(() => ({}));
  }
  return contentCachePromise;
}

interface EditableTextProps {
  initialText: string;
  contentKey?: string;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: React.CSSProperties;
  onSave?: (newText: string) => void;
  multiline?: boolean;
}

export default function EditableText({
  initialText,
  contentKey,
  as: Component = "span",
  className = "",
  style,
  onSave,
  multiline = false,
}: EditableTextProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);
  const [isHovered, setIsHovered] = useState(false);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);
  
  const pathname = usePathname();
  const isEditable = pathname?.startsWith("/admin/edit") ?? false;

  const activeKey = contentKey || initialText;

  // Load from API on mount
  useEffect(() => {
    fetchContent().then((data) => {
      if (data && data[activeKey] !== undefined) {
        setText(data[activeKey]);
      }
    });
  }, [activeKey]);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      // Move cursor to the end
      if ("setSelectionRange" in inputRef.current) {
        const length = inputRef.current.value.length;
        inputRef.current.setSelectionRange(length, length);
      }
    }
  }, [isEditing]);

  const handleSave = async () => {
    setIsEditing(false);
    if (onSave) {
      onSave(text);
    }

    try {
      // Save to backend
      await fetch("/api/content", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: activeKey, value: text }),
      });
      // Update local cache
      const cache = await fetchContent();
      if (cache) {
        cache[activeKey] = text;
      }
    } catch (e) {
      console.error("Failed to save content", e);
    }
  };

  const handleReset = async () => {
    // Revert to initial text
    setText(initialText);
    setIsEditing(false);
    
    try {
      await fetch("/api/content", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ key: activeKey }),
      });
      // Update local cache
      const cache = await fetchContent();
      if (cache) {
        delete cache[activeKey];
      }
    } catch (e) {
      console.error("Failed to reset content", e);
    }
  };

  const handleCancel = () => {
    // Reset to API value if exists, else initialText
    fetchContent().then((data) => {
      setText(data && data[activeKey] !== undefined ? data[activeKey] : initialText);
    });
    setIsEditing(false);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !multiline) {
      handleSave();
    }
    if (e.key === "Escape") {
      handleCancel();
    }
  };

  if (isEditing && isEditable) {
    return (
      <div className={`relative inline-block w-full ${className}`} style={style}>
        {multiline ? (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full border-2 border-blue-500 rounded p-2 bg-white text-black outline-none min-h-[100px] resize-y"
          />
        ) : (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full border-2 border-blue-500 rounded p-1 bg-white text-black outline-none"
          />
        )}
        <div className="absolute right-0 top-full mt-1 flex gap-1 z-50 bg-white shadow-md rounded p-1 border">
          <button onClick={handleSave} className="p-1 hover:bg-green-100 text-green-600 rounded transition-colors" title="Enregistrer">
            <Check size={16} />
          </button>
          <button onClick={handleReset} className="p-1 hover:bg-orange-100 text-orange-600 rounded transition-colors" title="Restaurer la version de base">
            <RotateCcw size={16} />
          </button>
          <button onClick={handleCancel} className="p-1 hover:bg-red-100 text-red-600 rounded transition-colors" title="Annuler">
            <X size={16} />
          </button>
        </div>
      </div>
    );
  }

  return (
    <Component
      className={`relative inline-block transition-all duration-200 group ${className} ${
        isHovered && isEditable ? "ring-2 ring-blue-400 ring-offset-4 rounded cursor-text" : ""
      }`}
      style={style}
      onMouseEnter={() => isEditable && setIsHovered(true)}
      onMouseLeave={() => isEditable && setIsHovered(false)}
      onClick={(e) => {
        if (!isEditable) return;
        e.preventDefault();
        e.stopPropagation();
        setIsEditing(true);
      }}
    >
      {text}
      {isHovered && isEditable && (
        <span className="absolute -top-3 -right-3 bg-blue-500 text-white p-1.5 rounded-full shadow-md z-10 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
          <Pencil size={14} />
        </span>
      )}
    </Component>
  );
}
