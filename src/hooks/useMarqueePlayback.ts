import { useEffect } from "react";
import type { RefObject } from "react";

export function useMarqueePlayback(
  sectionRef: RefObject<HTMLElement | null>,
  trackRef: RefObject<HTMLElement | null>,
) {
  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;

    if (!section || !track) return;

    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let isVisible = false;
    let isPageVisible = !document.hidden;

    const updatePlayback = () => {
      const shouldPlay =
        isVisible && isPageVisible && !reducedMotionQuery.matches;

      track.classList.toggle("marquee-paused", !shouldPlay);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        updatePlayback();
      },
      {
        rootMargin: "260px 0px",
        threshold: 0.01,
      },
    );

    const handleVisibilityChange = () => {
      isPageVisible = !document.hidden;
      updatePlayback();
    };

    observer.observe(section);
    track.classList.add("marquee-paused");
    document.addEventListener("visibilitychange", handleVisibilityChange);
    reducedMotionQuery.addEventListener("change", updatePlayback);

    return () => {
      observer.disconnect();
      track.classList.remove("marquee-paused");
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      reducedMotionQuery.removeEventListener("change", updatePlayback);
    };
  }, [sectionRef, trackRef]);
}
