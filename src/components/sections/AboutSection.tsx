import { FadeIn } from '../animations/FadeIn';

export function AboutSection() {
  return (
    <section id="about" className="py-[80px] lg:py-[140px] px-8 md:px-[60px] relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[80px] items-center">
          
          {/* Left Image Placeholder */}
          <FadeIn>
            <div className="relative rounded-[4px] overflow-hidden aspect-[4/5] border border-glass-border shadow-[0_20px_60px_rgba(0,0,0,0.5)] group">
              <img 
                src="/images/author/1.jpeg" 
                alt="Simon Leviev"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-display italic text-gold-light text-[1.2rem] tracking-[1px] drop-shadow-lg">
                  Truth is stranger than fiction.
                </p>
              </div>
            </div>
          </FadeIn>

          {/* Right Text Content */}
          <FadeIn delay={0.2}>
            <p className="font-ui text-[0.7rem] tracking-[5px] uppercase text-gold mb-3">About The Book</p>
            <h2 className="font-display text-[2.4rem] lg:text-[4rem] font-black text-beige-light leading-[1.1] mb-8">
              A Life of <span className="text-gold italic">Extremes</span>
            </h2>
            <div className="space-y-6 font-body text-[1rem] leading-[1.8] text-beige/80">
              <p>
                Behind the luxury cars, private jets, and worldwide controversy lies a life story far more shocking, emotional, and unbelievable than anyone imagined.
              </p>
              <p>
                Born into a strict religious world in Bnei Brak, Simon Leviev grew up surrounded by rejection and secrets. From childhood survival on the streets to international business deals, luxury lifestyles, prisons, and worldwide fame - this is the raw, uncensored truth.
              </p>
              <p className="font-ui text-[0.8rem] tracking-[2px] uppercase text-gold font-bold pt-4">Inside this book, you will discover:</p>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-3 list-none p-0 m-0">
                {[
                  "The childhood that shaped Simon",
                  "The untold Tinder Swindler story",
                  "Life inside extreme luxury",
                  "Escapes and survival across borders",
                  "The mindset behind rebuilding",
                  "Lessons about money and power"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-[0.9rem] text-beige/70">
                    <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="italic text-gold-light/90 pt-4 font-medium">
                "You will never see Simon Leviev the same way again."
              </p>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
