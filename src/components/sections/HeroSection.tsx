import { useEffect, useRef, useState } from "react";
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import { Button } from "../ui/Button";
import { BookOpen, Play, Globe, Film, Heart } from "lucide-react";

export function HeroSection() {
  const [windowSize, setWindowSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 1,
    height: typeof window !== "undefined" ? window.innerHeight : 1,
  });
  const [canTiltBook, setCanTiltBook] = useState(false);
  const canTiltBookRef = useRef(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const reducedMotionQuery = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    const updateViewport = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
      const shouldTilt = window.innerWidth >= 1024 && !reducedMotionQuery.matches;
      canTiltBookRef.current = shouldTilt;
      setCanTiltBook(shouldTilt);

      if (!shouldTilt) {
        mouseX.set(window.innerWidth / 2);
        mouseY.set(window.innerHeight / 2);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (!canTiltBookRef.current) return;
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    updateViewport();

    window.addEventListener("resize", updateViewport);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    reducedMotionQuery.addEventListener("change", updateViewport);

    return () => {
      window.removeEventListener("resize", updateViewport);
      window.removeEventListener("pointermove", handlePointerMove);
      reducedMotionQuery.removeEventListener("change", updateViewport);
    };
  }, [mouseX, mouseY]);

  const smoothMouseX = useSpring(mouseX, { stiffness: 60, damping: 22 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 60, damping: 22 });

  const rotateY = useTransform(
    smoothMouseX,
    [0, Math.max(windowSize.width, 1)],
    [2, -18],
  );
  const rotateX = useTransform(
    smoothMouseY,
    [0, Math.max(windowSize.height, 1)],
    [10, -5],
  );

  return (
    <section
      id="hero"
      className="min-h-[100svh] relative overflow-hidden px-5 sm:px-8 md:px-12 lg:px-[60px] pt-[96px] sm:pt-[100px] pb-12 sm:pb-16 lg:flex lg:items-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-20 items-center w-full max-w-7xl mx-auto z-[3]">

        {/* Text first on mobile so book always fully visible when scrolling */}
        {/* Book */}
        <FadeIn
          delay={0.1}
          className="order-1 lg:order-2 relative flex items-center justify-center [perspective:1200px] z-[3]"
        >
          <m.div
            style={canTiltBook ? { rotateY, rotateX, willChange: "transform" } : undefined}
            className="relative w-[220px] h-[308px] xs:w-[240px] xs:h-[336px] sm:w-[280px] sm:h-[392px] md:w-[320px] md:h-[448px] lg:w-[380px] lg:h-[520px] [transform-style:preserve-3d] animate-float-book"
          >
            <div className="absolute -inset-[20px] sm:-inset-[30px] rounded-full border border-gold/15 pointer-events-none animate-glow-pulse" />
            <div className="w-full h-full relative [transform-style:preserve-3d] rounded-[4px_10px_10px_4px] sm:rounded-[4px_12px_12px_4px] shadow-[0_20px_60px_rgba(0,0,0,0.7),0_0_60px_rgba(212,160,23,0.2)] sm:shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_80px_rgba(212,160,23,0.25)] border border-gold/20 overflow-hidden">
              <picture className="block w-full h-full">
                <source srcSet="/images/book.webp" type="image/webp" />
                <img
                  src="/images/book.JPG"
                  alt="The Story Behind The Man - Simon Leviev Official Autobiography"
                  className="w-full h-full object-cover"
                  fetchPriority="high"
                  loading="eager"
                  decoding="async"
                  width="380"
                  height="520"
                  sizes="(max-width: 479px) 220px, (max-width: 639px) 240px, (max-width: 767px) 280px, (max-width: 1023px) 320px, 380px"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
              <div className="absolute left-0 top-0 w-[14px] sm:w-[18px] h-full bg-gradient-to-r from-black/40 via-transparent to-black/20 z-[2]" />
            </div>
          </m.div>
        </FadeIn>

        {/* Text content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <FadeIn delay={0.15}>
            <p className="font-ui text-[0.62rem] sm:text-[0.7rem] font-semibold tracking-[4px] sm:tracking-[5px] uppercase text-gold mb-3 sm:mb-5 opacity-90">
              The Official Autobiography
            </p>

            <h1 className="font-display text-[2.1rem] xs:text-[2.5rem] sm:text-[3rem] md:text-[3.6rem] lg:text-[clamp(3rem,5.5vw,5.5rem)] font-black leading-[1.05] text-beige-light mb-2 sm:mb-3 tracking-[-1px]">
              THE STORY
              <br />
              BEHIND
              <br />
              <span className="block text-gold italic font-bold">THE MAN</span>
            </h1>

            <p className="font-body text-[1rem] sm:text-[1.1rem] md:text-[1.35rem] italic text-beige-dark mb-4 sm:mb-7 font-normal tracking-[1px]">
              By Simon Leviev
            </p>

            <p className="font-body text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] text-beige/70 mb-6 sm:mb-9 max-w-[480px] sm:max-w-[520px] mx-auto lg:mx-0 leading-[1.75] sm:leading-[1.8]">
              You've heard the headlines. You've seen the documentaries. Now
              hear the story from the man himself. Behind the luxury cars and
              jets lies a truth far more shocking than anyone imagined.
            </p>

            <div className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-6 sm:mb-9">
              <Button href="#order" variant="primary" className="w-full xs:w-auto justify-center">
                <BookOpen className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px]" /> Buy The Book
              </Button>
              <Button href="#trailer" variant="secondary" className="w-full xs:w-auto justify-center">
                <Play className="w-[16px] h-[16px] sm:w-[18px] sm:h-[18px] transition-transform duration-300 group-hover:scale-120" /> Watch Trailer
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 sm:gap-6 justify-center lg:justify-start">
              {[
                { icon: Globe, text: "Worldwide Bestseller" },
                { icon: Film, text: "Based on True Events" },
                { icon: Heart, text: "Millions Inspired" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-1.5 sm:gap-2 font-ui text-[0.62rem] sm:text-[0.7rem] font-medium tracking-[1.5px] uppercase text-beige/60"
                >
                  <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full border border-gold-dark flex items-center justify-center text-gold bg-gold/10 shrink-0">
                    <badge.icon className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </span>
                  {badge.text}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

      </div>
    </section>
  );
}
