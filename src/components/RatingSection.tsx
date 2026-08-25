"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import EditableText from "./EditableText";

export interface ReviewItem {
  id: string | number;
  quote: string;
  name: string;
  role: string;
  initials: string;
  color: string;
  rating?: number;
  avatarUrl?: string;
}

/* ─── Star icon ─────────────────────────────────────────────── */
function StarIcon({ filled = true }: { filled?: boolean }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill={filled ? "#22C55E" : "none"}
      stroke="#22C55E"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

/* ─── Avatar ─────────────────────────────────────────────────── */
function Avatar({
  initials,
  color,
  size = 44,
}: {
  initials: string;
  color: string;
  size?: number;
}) {
  return (
    <div
      style={{
        width: size,
        height: size,
        borderRadius: "50%",
        backgroundColor: color || "#FF6500",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexShrink: 0,
        fontSize: size * 0.35,
        fontWeight: 700,
        color: "#fff",
        letterSpacing: "0.02em",
      }}
    >
      {initials}
    </div>
  );
}

/* ─── Testimonial card ──────────────────────────────────────── */
function TestimonialCard({ t }: { t: ReviewItem }) {
  return (
    <article
      style={{
        minWidth: 320,
        maxWidth: 340,
        background: "#FFFFFF",
        border: "1px solid #E0DDD6",
        borderRadius: 16,
        padding: "28px 28px 24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: 24,
        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
        transition: "border-color 0.3s, transform 0.3s, box-shadow 0.3s",
        cursor: "default",
        flexShrink: 0,
      }}
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#FF6500";
        (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 24px rgba(255,101,0,0.12)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLElement).style.borderColor = "#E0DDD6";
        (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
        (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(0,0,0,0.06)";
      }}
    >
      {/* Quote text */}
      <EditableText
        as="p"
        multiline
        style={{
          color: "#555550",
          fontSize: "0.875rem",
          lineHeight: 1.7,
          margin: 0,
          display: "block",
        }}
        initialText={t.quote}
      />

      {/* Divider */}
      <hr style={{ border: "none", borderTop: "1px dashed #E0DDD6", margin: 0 }} />

      {/* Author */}
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        {t.avatarUrl ? (
          <img
            src={t.avatarUrl}
            alt={t.name}
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              objectFit: "cover",
              border: "1px solid #E0DDD6",
              flexShrink: 0,
            }}
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = "none";
              const parent = (e.currentTarget as HTMLElement).parentElement;
              if (parent) {
                const fb = parent.querySelector(".avatar-fallback") as HTMLElement;
                if (fb) fb.style.display = "flex";
              }
            }}
          />
        ) : null}
        <div className="avatar-fallback" style={{ display: t.avatarUrl ? "none" : "flex" }}>
          <Avatar initials={t.initials || "G"} color={t.color || "#FF6500"} />
        </div>
        <div>
          <EditableText as="p" style={{ color: "#1A1A1A", fontWeight: 600, fontSize: "0.9rem", margin: 0, display: "block" }} initialText={t.name} />
          <EditableText as="p" style={{ color: "#888884", fontSize: "0.78rem", margin: 0, display: "block" }} initialText={t.role} />
        </div>
      </div>
    </article>
  );
}

/* ─── Main section ──────────────────────────────────────────── */
export default function RatingSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const CARD_WIDTH = 340 + 20; // maxWidth + gap

  const [reviewsList, setReviewsList] = useState<ReviewItem[]>([]);
  const [ratingValue, setRatingValue] = useState<number>(5.0);
  const [totalUsersCount, setTotalUsersCount] = useState<string>("250+");
  const [isLoadedFromApi, setIsLoadedFromApi] = useState<boolean>(false);

  // Charger exclusivement les avis réels depuis /api/reviews (qui lit public/reviews.json)
  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.reviews && Array.isArray(data.reviews)) {
          setReviewsList(data.reviews);
          if (data.rating) setRatingValue(Number(data.rating));
          if (data.totalUsers) setTotalUsersCount(String(data.totalUsers));
          setIsLoadedFromApi(Boolean(data.isRealApi));
        }
      })
      .catch((err) => console.error("Erreur de chargement des avis API:", err));
  }, []);

  // Manual button scroll
  const scroll = (dir: "left" | "right") => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({ left: dir === "right" ? CARD_WIDTH : -CARD_WIDTH, behavior: "smooth" });
  };

  // Auto-advance every 2 s
  const autoScroll = useCallback(() => {
    if (isPaused.current || !trackRef.current) return;
    trackRef.current.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
  }, [CARD_WIDTH]);

  useEffect(() => {
    const timer = setInterval(autoScroll, 2000);
    return () => clearInterval(timer);
  }, [autoScroll]);

  // Infinite loop: when we reach the second copy, jump silently to the first
  useEffect(() => {
    const el = trackRef.current;
    if (!el || reviewsList.length === 0) return;
    const handleScroll = () => {
      // half = scrollWidth of one full set of cards
      const half = el.scrollWidth / 2;
      if (el.scrollLeft >= half) {
        // instant jump (no smooth) to mirror position in first copy
        el.scrollLeft = el.scrollLeft - half;
      } else if (el.scrollLeft <= 0) {
        el.scrollLeft = half;
      }
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    // Start in the middle of the double list so left-scroll also works
    el.scrollLeft = el.scrollWidth / 2;
    return () => el.removeEventListener("scroll", handleScroll);
  }, [reviewsList]);

  // Si en cours de chargement des avis
  if (reviewsList.length === 0) {
    return (
      <section
        style={{
          background: "#FFFFFF",
          padding: "80px 0 72px",
          textAlign: "center",
          color: "#666660",
        }}
      >
        <EditableText initialText="Chargement des avis Google Maps..." />
      </section>
    );
  }

  // Double de la liste pour la boucle infinie fluide
  const displayList = [...reviewsList, ...reviewsList];

  return (
    <section
      id="avis"
      style={{
        background: "#FFFFFF",
        padding: "80px 0 72px",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle glow */}
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "10%",
          width: 400,
          height: 400,
          background: "radial-gradient(circle, rgba(255,101,0,0.05) 0%, transparent 70%)",
          borderRadius: "50%",
          pointerEvents: "none",
        }}
      />

      {/* ── Header ── */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 20,
          paddingLeft: "clamp(24px, 4vw, 80px)",
          paddingRight: "clamp(24px, 4vw, 80px)",
          marginBottom: 48,
        }}
      >
        {/* Top row: avatars + stars + count */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          {/* Stacked avatars */}
          <div style={{ display: "flex" }}>
            {reviewsList.slice(0, 4).map((t, i) => (
              <div
                key={`${t.id}-${i}`}
                style={{
                  marginLeft: i === 0 ? 0 : -10,
                  border: "2px solid #FFFFFF",
                  borderRadius: "50%",
                  zIndex: 4 - i,
                  position: "relative",
                  overflow: "hidden",
                  width: 36,
                  height: 36,
                }}
              >
                {t.avatarUrl ? (
                  <img
                    src={t.avatarUrl}
                    alt={t.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      (e.currentTarget as HTMLElement).style.display = "none";
                      const parent = (e.currentTarget as HTMLElement).parentElement;
                      if (parent) {
                        const fb = parent.querySelector(".avatar-sm-fb") as HTMLElement;
                        if (fb) fb.style.display = "flex";
                      }
                    }}
                  />
                ) : null}
                <div className="avatar-sm-fb" style={{ display: t.avatarUrl ? "none" : "flex", width: "100%", height: "100%" }}>
                  <Avatar initials={t.initials || "G"} color={t.color || "#FF6500"} size={36} />
                </div>
              </div>
            ))}
          </div>

          {/* Stars */}
          <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", gap: 2 }}>
              {[1, 2, 3, 4, 5].map((s) => (
                <StarIcon key={s} filled={s <= Math.round(ratingValue)} />
              ))}
            </div>
            <EditableText as="span" style={{ fontWeight: 700, color: "#1A1A1A", fontSize: "0.95rem" }} initialText={Number(ratingValue).toFixed(1)} />
          </div>

          {/* User count + API Badge */}
          <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
            <p style={{ color: "#666660", fontSize: "0.875rem", margin: 0 }}>
              <strong style={{ color: "#1A1A1A" }}>{totalUsersCount}</strong> <EditableText initialText={`Avis et utilisateurs • ${reviewsList.length} avis vérifiés Google`} />
            </p>
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 5,
                background: isLoadedFromApi ? "#ECFDF5" : "#F3F4F6",
                color: isLoadedFromApi ? "#059669" : "#4B5563",
                padding: "3px 10px",
                borderRadius: 99,
                fontSize: "0.75rem",
                fontWeight: 600,
                border: `1px solid ${isLoadedFromApi ? "#A7F3D0" : "#E5E7EB"}`,
              }}
            >
              <span
                style={{
                  width: 6,
                  height: 6,
                  borderRadius: "50%",
                  background: isLoadedFromApi ? "#10B981" : "#9CA3AF",
                }}
              />
              <EditableText initialText={isLoadedFromApi ? "API Google Maps Live" : "Avis Google Maps"} />
            </span>
          </div>
        </div>

        {/* Two-column: headline + sub */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 32,
            flexWrap: "wrap",
          }}
        >
          <div style={{ maxWidth: 520 }}>
            <EditableText
              as="h2"
              style={{
                fontFamily: "var(--font-display, Fraunces, serif)",
                color: "#1A1A1A",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: 700,
                lineHeight: 1.15,
                margin: 0,
                display: "block",
              }}
              initialText="Rejoignez la communauté !"
            />
            <EditableText
              as="p"
              multiline
              style={{ color: "#666660", fontSize: "0.9rem", marginTop: 12, display: "block" }}
              initialText="Explorez une nouvelle façon de travailler avec des agents aux côtés de milliers d'utilisateurs."
            />
          </div>

          {/* Right subtitle */}
          <EditableText
            as="p"
            multiline
            style={{
              color: "#666660",
              fontSize: "0.85rem",
              maxWidth: 260,
              lineHeight: 1.6,
              marginTop: 8,
              display: "block",
            }}
            initialText="Retours réels d'utilisateurs Clic&Progress du monde entier sur Google Maps."
          />
        </div>
      </div>

      {/* ── Scroll track ── */}
      <div style={{ position: "relative" }}>
        {/* Left fade */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 80,
            background: "linear-gradient(to right, #FFFFFF, transparent)",
            zIndex: 5,
            pointerEvents: "none",
          }}
        />
        {/* Right fade */}
        <div
          style={{
            position: "absolute",
            right: 0,
            top: 0,
            bottom: 0,
            width: 80,
            background: "linear-gradient(to left, #FFFFFF, transparent)",
            zIndex: 5,
            pointerEvents: "none",
          }}
        />

        {/* Scrollable cards */}
        <div
          ref={trackRef}
          onMouseEnter={() => { isPaused.current = true; }}
          onMouseLeave={() => { isPaused.current = false; }}
          style={{
            display: "flex",
            gap: 20,
            overflowX: "auto",
            scrollbarWidth: "none",
            paddingLeft: "clamp(24px, 4vw, 80px)",
            paddingRight: "clamp(24px, 4vw, 80px)",
            paddingBottom: 8,
          }}
          className="rating-track"
        >
          {displayList.map((t, i) => (
            <TestimonialCard key={`${t.id}-${i}`} t={t} />
          ))}
        </div>
      </div>

      {/* ── Navigation arrows ── */}
      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "flex-end",
          paddingRight: "clamp(24px, 4vw, 80px)",
          marginTop: 28,
        }}
      >
        {(["left", "right"] as const).map((dir) => (
          <button
            key={dir}
            onClick={() => scroll(dir)}
            aria-label={dir === "left" ? "Précédent" : "Suivant"}
            style={{
              width: 44,
              height: 44,
              borderRadius: "50%",
              border: "1px solid #E0DDD6",
              background: "#FFFFFF",
              color: "#1A1A1A",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "border-color 0.2s, background 0.2s, color 0.2s",
              boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#FF6500";
              (e.currentTarget as HTMLElement).style.background = "#FF6500";
              (e.currentTarget as HTMLElement).style.color = "#FFFFFF";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.borderColor = "#E0DDD6";
              (e.currentTarget as HTMLElement).style.background = "#FFFFFF";
              (e.currentTarget as HTMLElement).style.color = "#1A1A1A";
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              {dir === "left" ? (
                <polyline points="15 18 9 12 15 6" />
              ) : (
                <polyline points="9 18 15 12 9 6" />
              )}
            </svg>
          </button>
        ))}
      </div>

      {/* Inline style for hiding webkit scrollbar */}
      <style>{`
        .rating-track::-webkit-scrollbar { display: none; }
      `}</style>
    </section>
  );
}
