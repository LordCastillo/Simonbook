import { FadeIn } from '../animations/FadeIn';
import { GlassWater, Plane, Fingerprint, Globe2, AlertTriangle, Crown } from 'lucide-react';

export function DoubleLifeSection() {
  const cards = [
    {
      icon: AlertTriangle,
      title: "The Childhood",
      desc: "Growing up in Bnei Brak, surrounded by rejection and secrets that shaped a destiny of survival.",
      delay: 0.1
    },
    {
      icon: Fingerprint,
      title: "The Untold Story",
      desc: "Moving beyond the headlines of 'The Tinder Swindler' to reveal the raw, uncensored truth.",
      delay: 0.25
    },
    {
      icon: Crown,
      title: "Extreme Luxury",
      desc: "Private jets and designer suits — a journey through a world of power and international influence.",
      delay: 0.4
    },
    {
      icon: Globe2,
      title: "Global Survival",
      desc: "Escapes, arrests, and the tactical mindset required to survive across multiple countries.",
      delay: 0.1
    },
    {
      icon: GlassWater,
      title: "Public Judgment",
      desc: "Facing betrayal, loneliness, and the weight of worldwide fame under the public eye.",
      delay: 0.25
    },
    {
      icon: Plane,
      title: "The Rebuilding",
      desc: "Confidence and strategies for rebuilding everything from nothing, with cinematic intensity.",
      delay: 0.4
    }
  ];

  return (
    <section id="double-life" className="py-[80px] lg:pt-[100px] lg:pb-[140px] px-8 md:px-[60px] relative">
      <FadeIn className="text-center mb-[50px] lg:mb-[70px]">
        <p className="font-ui text-[0.7rem] tracking-[5px] uppercase text-gold mb-3">More Than A Memoir</p>
        <h2 className="font-display text-[2.4rem] lg:text-[clamp(2.4rem,4vw,3.6rem)] font-extrabold text-beige-light leading-[1.1]">
          A <span className="text-gold italic">Psychological Thriller</span> & Survival Story
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 container mx-auto">
        {cards.map((card, i) => (
          <FadeIn key={i} delay={card.delay}>
            <div className="bg-glass-bg border border-glass-border rounded-[4px] p-[40px_30px] transition-all duration-500 ease-smooth cursor-pointer relative overflow-hidden backdrop-blur-md flex flex-col gap-4 group hover:bg-glass-hover hover:border-gold/50 hover:-translate-y-2 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5),0_0_50px_rgba(212,160,23,0.15)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(212,160,23,0.08)_0%,transparent_70%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none" />
              
              <card.icon className="w-[2.4rem] h-[2.4rem] text-gold transition-all duration-500 group-hover:text-gold-light group-hover:drop-shadow-[0_0_30px_rgba(212,160,23,0.6)] group-hover:scale-110" />
              
              <h3 className="font-display text-[1.4rem] font-bold text-beige-light tracking-[1px]">
                {card.title}
              </h3>
              
              <div className="w-[40px] h-[2px] bg-gold rounded-[1px] transition-all duration-500 group-hover:w-[80px] group-hover:shadow-[0_0_10px_var(--tw-colors-gold-DEFAULT)]" />
              
              <p className="text-[0.95rem] text-beige/55 leading-[1.6]">
                {card.desc}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
