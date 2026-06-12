import { useEffect } from "react";
import Lenis from "lenis";

export function useSmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.13,
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      stopInertiaOnNavigate: true,
      anchors: {
        offset: -96,
        duration: 0.85,
        easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      },
    });

    return () => {
      lenis.destroy();
    };
  }, []);
}
