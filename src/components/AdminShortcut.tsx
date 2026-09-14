"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminShortcut() {
  const router = useRouter();

  useEffect(() => {
    const keys = new Set<string>();

    const handleKeyDown = (e: KeyboardEvent) => {
      keys.add(e.key.toLowerCase());
      
      // Check for Ctrl + A + D
      if (e.ctrlKey && keys.has('a') && keys.has('d')) {
        e.preventDefault();
        router.push('/admin');
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      keys.delete(e.key.toLowerCase());
    };

    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [router]);

  return null;
}
