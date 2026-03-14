"use client";

import { useEffect, useRef, RefObject } from "react";

export function useScrollAnimation<T extends HTMLElement = HTMLDivElement>(
  threshold = 0.15
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("section-visible");
          el.classList.remove("section-hidden");
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    el.classList.add("section-hidden");
    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold]);

  return ref;
}
