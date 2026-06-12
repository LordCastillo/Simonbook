import { useEffect, useRef, useState } from "react";

export function AmbientGlow() {
  const primaryGlowRef = useRef<HTMLDivElement>(null);
  const secondaryGlowRef = useRef<HTMLDivElement>(null);
  const [isStatic, setIsStatic] = useState(true);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );
    let canAnimate = false;
    let frameId = 0;

    const resetGlowPosition = () => {
      if (primaryGlowRef.current) primaryGlowRef.current.style.transform = "";
      if (secondaryGlowRef.current) secondaryGlowRef.current.style.transform = "";
    };

    const updateMode = () => {
      canAnimate = window.innerWidth >= 768 && !reducedMotionQuery.matches;
      setIsStatic(!canAnimate);

      if (!canAnimate) {
        cancelAnimationFrame(frameId);
        resetGlowPosition();
      }
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!canAnimate) return;

      cancelAnimationFrame(frameId);
      frameId = requestAnimationFrame(() => {
        const x = event.clientX / window.innerWidth - 0.5;
        const y = event.clientY / window.innerHeight - 0.5;

        if (primaryGlowRef.current) {
          primaryGlowRef.current.style.transform = `translate(${x * 40}px, ${y * 40}px)`;
        }

        if (secondaryGlowRef.current) {
          secondaryGlowRef.current.style.transform = `translate(${-x * 30}px, ${-y * 30}px)`;
        }
      });
    };

    updateMode();

    window.addEventListener("pointermove", handlePointerMove, {
      passive: true,
    });
    window.addEventListener("resize", updateMode);
    reducedMotionQuery.addEventListener("change", updateMode);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", updateMode);
      reducedMotionQuery.removeEventListener("change", updateMode);
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        ref={primaryGlowRef}
        className={`absolute rounded-full transition-transform duration-[1500ms] ease-out opacity-[0.12] w-[800px] h-[800px] bg-orange-glow -top-[300px] -left-[200px] will-change-transform ${isStatic ? "blur-[100px]" : "blur-[180px]"}`}
      />
      <div
        ref={secondaryGlowRef}
        className={`absolute rounded-full transition-transform duration-[1500ms] ease-out opacity-[0.08] w-[600px] h-[600px] bg-gold -bottom-[200px] -right-[200px] will-change-transform ${isStatic ? "blur-[100px]" : "blur-[180px]"}`}
      />
      {!isStatic && (
        <div
          className="absolute rounded-full blur-[180px] transition-transform duration-[1500ms] ease-out opacity-[0.06] w-[500px] h-[500px] bg-orange-warm top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2"
        />
      )}
    </div>
  );
}
