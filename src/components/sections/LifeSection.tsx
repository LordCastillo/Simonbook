import { FadeIn } from "../animations/FadeIn";

export function LifeSection() {
  const images = [
    "/images/author/1.jpeg",
    "/images/author/2.jpeg",
    "/images/author/3.jpeg",
    "/images/author/4.jpeg",
    "/images/author/5.jpg",
    "/images/author/6.JPG",
    "/images/author/7.JPG",
    "/images/author/8.JPEG",
    "/images/author/9.JPG",
    "/images/author/11.JPEG",
  ];

  // Duplicate the array to create a seamless infinite loop
  const duplicatedImages = [...images, ...images];

  return (
    <section
      id="life"
      className="py-[80px] lg:py-[100px] relative overflow-hidden"
    >
      <FadeIn className="text-center mb-[50px] lg:mb-[70px] px-8 md:px-[60px]">
        <p className="font-ui text-[0.7rem] tracking-[5px] uppercase text-gold mb-3">
          Cinematic Moments
        </p>
        <h2 className="font-display text-[2.4rem] lg:text-[clamp(2.4rem,4vw,3.6rem)] font-extrabold text-beige-light">
          A Life in <span className="text-gold italic">Frames</span>
        </h2>
      </FadeIn>

      {/* Marquee Container */}
      <div className="relative w-full overflow-hidden flex">
        {/* Gradient Masks for smooth fade out at edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-luxury-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-luxury-black to-transparent z-10 pointer-events-none"></div>

        {/* Animated track */}
        <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {duplicatedImages.map((src, i) => (
            <div key={i} className="flex-shrink-0 w-[300px] md:w-[400px] px-3">
              <div className="relative group rounded-[4px] overflow-hidden aspect-[4/3] border border-glass-border shadow-[0_20px_60px_rgba(0,0,0,0.5)] cursor-pointer">
                <img
                  src={src}
                  alt={`Simon Leviev Cinematic Moment ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/50 transition-all duration-500 pointer-events-none" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
