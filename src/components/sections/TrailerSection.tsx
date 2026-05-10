import { FadeIn } from '../animations/FadeIn';

export function TrailerSection() {
  const images = [
    "/images/author/1.jpeg",
    "/images/author/2.jpeg",
    "/images/author/3.jpeg",
    "/images/author/4.jpeg"
  ];

  return (
    <section id="trailer" className="py-[80px] lg:py-[100px] px-8 md:px-[60px] relative">
      <FadeIn className="text-center mb-[50px] lg:mb-[70px]">
        <p className="font-ui text-[0.7rem] tracking-[5px] uppercase text-gold mb-3">Cinematic Moments</p>
        <h2 className="font-display text-[2.4rem] lg:text-[clamp(2.4rem,4vw,3.6rem)] font-extrabold text-beige-light">A Life in <span className="text-gold italic">Frames</span></h2>
      </FadeIn>

      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {images.map((src, i) => (
            <FadeIn key={i} delay={i * 0.1}>
              <div className="relative group rounded-[4px] overflow-hidden aspect-[4/5] border border-glass-border shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
                <img 
                  src={src} 
                  alt={`Simon Leviev Cinematic Moment ${i + 1}`}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/30 transition-all duration-500 pointer-events-none" />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
