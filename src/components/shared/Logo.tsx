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



      className="relative flex items-center group cursor-pointer"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {/* The "S" Logo Icon */}
      <div className="relative w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 z-20">
        {/* Continuous Pulsing Aura */}
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0 rounded-full bg-deep-gold blur-md"
        />
        
        {/* Periodic Gold Ping */}
        <motion.div 
          animate={{ 
            scale: [1, 2],
            opacity: [0.5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeOut",
            delay: 1
          }}
          className="absolute inset-0 rounded-full border border-gold/40"
        />

        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-deep-gold/40 to-transparent blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
        <div className="relative w-full h-full overflow-hidden rounded-full border border-gold/30 bg-black/60 backdrop-blur-md flex items-center justify-center p-1.5 transition-all duration-500 group-hover:border-gold/60 group-hover:shadow-[0_0_30px_rgba(212,175,55,0.6)]">
          <img
            src="/logo.png"
            alt="Simon Leviev"
            className="w-full h-full object-contain filter drop-shadow-md transition-transform duration-700 group-hover:scale-110 group-hover:rotate-[5deg]"
            decoding="async"
            width="64"
            height="64"
          />
        </div>
      </div>


      {/* Brand Text - "IMON LEVIEV" (Logo acts as the S) */}
      <div className="hidden sm:block relative overflow-hidden ml-[-12px] sm:ml-[-16px] pl-[18px] sm:pl-[24px] pr-3 sm:pr-4 py-1.5 sm:py-2 bg-black/20 backdrop-blur-sm rounded-r-full border-y border-r border-gold/10 transition-all duration-500 group-hover:border-gold/30 group-hover:bg-black/40">
        <span className="font-elegant text-base sm:text-lg md:text-xl text-gradient-gold tracking-[0.2em] sm:tracking-[0.3em] opacity-90 group-hover:opacity-100 transition-all duration-500 whitespace-nowrap">
          IMON LEVIEV
        </span>
        
        {/* Prestige Shimmer Effect */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite] pointer-events-none"></div>
      </div>

      {/* Decorative dot */}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-deep-gold opacity-0 group-hover:opacity-100 blur-[1px] transition-all duration-500"></div>
    </motion.a>
  );
};

export default Logo;
