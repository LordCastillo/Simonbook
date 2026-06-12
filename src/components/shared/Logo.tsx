import React from "react";
import { motion } from "framer-motion";

const Logo = ({
  handleScroll,
}: {
  handleScroll: (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, href: string) => void;
}) => {
  const onLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => handleScroll(e, "#hero");

  return (
    <motion.a
      href="#hero"
      onClick={onLogoClick}
      aria-label="Simon Leviev"
      className="relative flex items-center gap-0 group cursor-pointer select-none"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* SL monogram — large, no container, effects only */}
      <div className="relative shrink-0 flex items-center justify-center translate-y-2 translate-x-1">

        {/* Breathing gold aura — lighter */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.07, 0.18, 0.07] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[-4px] rounded-full bg-deep-gold blur-[10px] pointer-events-none"
        />

        {/* Expanding ring burst — lighter */}
        <motion.div
          animate={{ scale: [0.8, 1.9], opacity: [0.12, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: 1.4 }}
          className="absolute inset-0 rounded-full bg-deep-gold/10 blur-[7px] pointer-events-none"
        />

        <img
          src="/logo.png"
          alt="SL"
          className="relative h-[3.2rem] sm:h-[3.6rem] md:h-[4rem] w-auto object-contain z-10 transition-transform duration-700 group-hover:scale-110"
          decoding="async"
          width="72"
          height="72"
        />
      </div>

      {/* IMON LEVIEV — small, tight, completes the SIMON LEVIEV name */}
      <div className="flex flex-col justify-center -ml-2 sm:-ml-2.5 md:-ml-3 translate-y-2">
        <span className="font-elegant italic leading-none tracking-[0.08em] text-gradient-gold opacity-90 group-hover:opacity-100 transition-opacity duration-500 whitespace-nowrap text-[1.35rem] sm:text-[1.5rem] md:text-[1.65rem]">
          IMON LEVIEV
        </span>
        <span className="block h-[1px] w-0 group-hover:w-full bg-gradient-to-r from-gold/60 via-deep-gold to-transparent transition-all duration-500 ease-out mt-[2px]" />
      </div>
    </motion.a>
  );
};

export default Logo;
