import React from "react";
import Link from "next/link";
import Image from "next/image";

interface LogoAppProps {
  href?: string;
  className?: string;
}

export default function LogoApp({ href = "/", className = "" }: LogoAppProps) {
  return (
    <Link href={href} className={`group flex items-center gap-3 ${className}`}>
      <Image
        src="/images/logo.png"
        alt="clic&progress logo"
        width={48}
        height={48}
        className="h-10 w-auto object-contain transition-all duration-300 group-hover:scale-105"
        priority
      />
      <span className="text-[#FF6500] font-bold text-lg tracking-tight transition-colors duration-300">
        Clic&Progress
      </span>
    </Link>
  );
}
