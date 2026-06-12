import { useEffect, useRef, useState } from "react";

export function AmbientGlow() {
  const primaryGlowRef = useRef<HTMLDivElement>(null);
  const secondaryGlowRef = useRef<HTMLDivElement>(null);
  const [isStatic, setIsStatic] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let canAnimate = false;
    let frameId = 0;

    const resetGlowPosition = () => {
      if (primaryGlowRef.current) primaryGlowRef.current.style.transform = "";
      if (secondaryGlowRef.current) secondaryGlowRef.current.style.transform = "";
    };

    const updateMode = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      canAnimate = !mobile && !reducedMotionQuery.matches;
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

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("resize", updateMode);
    reducedMotionQuery.addEventListener("change", updateMode);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("resize", updateMode);
      reducedMotionQuery.removeEventListener("change", updateMode);
    };
  }, []);

  /* Mobile: smaller, less-blurred static orbs to avoid GPU overdraw */
  const blurClass = isMobile
    ? "blur-[60px]"
    : isStatic
    ? "blur-[100px]"
    : "blur-[180px]";

  const primarySize  = isMobile ? "w-[400px] h-[400px]" : "w-[800px] h-[800px]";
  const secondarySize = isMobile ? "w-[280px] h-[280px]" : "w-[600px] h-[600px]";

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div
        ref={primaryGlowRef}
        className={`absolute rounded-full transition-transform duration-[1500ms] ease-out opacity-[0.10] ${primarySize} bg-orange-glow -top-[200px] -left-[150px] will-change-transform ${blurClass}`}
      />
      <div
        ref={secondaryGlowRef}
        className={`absolute rounded-full transition-transform duration-[1500ms] ease-out opacity-[0.07] ${secondarySize} bg-gold -bottom-[150px] -right-[150px] will-change-transform ${blurClass}`}
      />
      {!isStatic && !isMobile && (
        <div
          className="absolute rounded-full blur-[180px] transition-transform duration-[1500ms] ease-out opacity-[0.05] w-[500px] h-[500px] bg-orange-warm top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2"
        />
      )}
    </div>
  );
}
