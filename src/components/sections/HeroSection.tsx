import { useEffect, useState } from "react";
import { m, useMotionValue, useSpring, useTransform } from "framer-motion";
import { FadeIn } from "../animations/FadeIn";
import { Button } from "../ui/Button";
import { BookOpen, Play, Globe, Film, Heart, Plane } from "lucide-react";

export function HeroSection() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const smoothMouseX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const smoothMouseY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const rotateY = useTransform(smoothMouseX, [0, windowSize.width], [2, -18]);
  const rotateX = useTransform(smoothMouseY, [0, windowSize.height], [10, -5]);

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center px-8 md:px-[60px] pt-[120px] pb-[80px] relative overflow-hidden"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center w-full container mx-auto z-[3]">
        {/* Left Content */}
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <FadeIn>
            <p className="font-ui text-[0.7rem] font-semibold tracking-[5px] uppercase text-gold mb-5 opacity-90">
              The Official Autobiography
            </p>
            <h1 className="font-display text-[2.4rem] sm:text-[3rem] lg:text-[clamp(3rem,5.5vw,5.5rem)] font-black leading-[1.05] text-beige-light mb-3 tracking-[-1px]">
              THE STORY
              <br />
              BEHIND
              <br />
              <span className="block text-gold italic font-bold">THE MAN</span>
            </h1>
            <p className="font-body text-[1.1rem] sm:text-[1.35rem] italic text-beige-dark mb-7 font-normal tracking-[1px]">
              By Simon Leviev
            </p>
            <p className="font-body text-[1.05rem] sm:text-[1.15rem] text-beige/70 mb-9 max-w-[520px] mx-auto lg:mx-0 leading-[1.8]">
              You’ve heard the headlines. You’ve seen the documentaries. Now hear the story from the man himself. Behind the luxury cars and jets lies a truth far more shocking than anyone imagined.
            </p>

            <div className="flex flex-wrap gap-4.5 justify-center lg:justify-start mb-9">
              <Button href="#order" variant="primary">
                <BookOpen className="w-[18px] h-[18px]" /> Buy The Book
              </Button>
              <Button href="#trailer" variant="secondary">
                <Play className="w-[18px] h-[18px] transition-transform duration-300 group-hover:scale-120" />{" "}
                Watch Trailer
              </Button>
            </div>

            <div className="flex flex-wrap gap-6 justify-center lg:justify-start">
              {[
                { icon: Globe, text: "Worldwide Bestseller" },
                { icon: Film, text: "Based on True Events" },
                { icon: Heart, text: "Millions Inspired" },
              ].map((badge, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 font-ui text-[0.7rem] font-medium tracking-[1.5px] uppercase text-beige/60"
                >
                  <span className="w-8 h-8 rounded-full border border-gold-dark flex items-center justify-center text-gold bg-gold/10 shrink-0">
                    <badge.icon className="w-3.5 h-3.5" />
                  </span>
                  {badge.text}
                </div>
              ))}
            </div>
          </FadeIn>
        </div>

        {/* Right Content - 3D Book */}
        <FadeIn
          delay={0.2}
          className="order-1 lg:order-2 relative flex items-center justify-center [perspective:1200px] z-[3]"
        >
          <m.div
            style={{ rotateY, rotateX }}
            className="relative w-[220px] h-[310px] sm:w-[280px] sm:h-[390px] lg:w-[380px] lg:h-[520px] [transform-style:preserve-3d] animate-[floatBook_6s_ease-in-out_infinite]"
          >
            <div className="absolute -inset-[30px] rounded-full border border-gold/15 pointer-events-none animate-[glowPulse_3s_ease-in-out_infinite]" />
            <div className="w-full h-full relative [transform-style:preserve-3d] rounded-[4px_12px_12px_4px] shadow-[0_30px_80px_rgba(0,0,0,0.7),0_0_80px_rgba(212,160,23,0.25),0_0_200px_rgba(255,122,0,0.1)] border border-gold/20 overflow-hidden">
              <img 
                src="/images/book.jpeg" 
                alt="The Story Behind The Man - Simon Leviev Official Autobiography"
                className="w-full h-full object-cover"
                fetchPriority="high"
                width="380"
                height="520"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/10 pointer-events-none" />
              <div className="absolute left-0 top-0 w-[18px] h-full bg-gradient-to-r from-black/40 via-transparent to-black/20 z-[2]" />
            </div>
          </m.div>
          <div className="absolute bottom-[10%] -right-[5%] text-[6rem] lg:text-[8rem] text-white/5 pointer-events-none z-0 -rotate-12">
            <Plane className="w-full h-full" />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
