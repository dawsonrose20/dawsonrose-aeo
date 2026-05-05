"use client";

import { useEffect, useRef } from "react";

export function CursorParallax({
  children,
  intensity = 12,
  className = "",
}: {
  children: React.ReactNode;
  intensity?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    let frame = 0;
    let targetX = 0;
    let targetY = 0;
    let currentX = 0;
    let currentY = 0;

    const handleMove = (e: MouseEvent) => {
      const dx = e.clientX / window.innerWidth - 0.5;
      const dy = e.clientY / window.innerHeight - 0.5;
      targetX = dx * intensity * 2;
      targetY = dy * intensity * 2;
      if (!frame) {
        frame = requestAnimationFrame(animate);
      }
    };

    const animate = () => {
      // ease toward target
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;
      el.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
      if (
        Math.abs(targetX - currentX) > 0.05 ||
        Math.abs(targetY - currentY) > 0.05
      ) {
        frame = requestAnimationFrame(animate);
      } else {
        frame = 0;
      }
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [intensity]);

  return (
    <div
      ref={ref}
      className={className}
      style={{ willChange: "transform" }}
    >
      {children}
    </div>
  );
}
