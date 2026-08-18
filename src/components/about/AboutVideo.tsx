import React from "react";
import VideoSection from "@/components/VideoSection";

export default function AboutVideo() {
  return (
    <section className="py-20 sm:py-28 bg-[#F9F8F6] border-t border-[#E8E5DF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <span className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-[#FF6500] mb-3 block">
            En vidéo
          </span>
          <h2
            className="text-2xl sm:text-3xl font-bold text-[#1A1A1A]"
            style={{ fontFamily: "var(--font-display, Fraunces, serif)" }}
          >
            Découvrez Clic&amp;Progress en action
          </h2>
        </div>
      </div>
      <VideoSection />
    </section>
  );
}
