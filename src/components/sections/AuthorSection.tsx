import { FadeIn } from '../animations/FadeIn';

export function AuthorSection() {
  const media = ["NETFLIX", "BBC", "CNN", "FORBES", "TIME"];

  return (
    <section id="author" className="py-[80px] lg:py-[120px] px-8 md:px-[60px] relative bg-[radial-gradient(ellipse_at_center,rgba(212,160,23,0.04)_0%,transparent_70%)]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-[50px] lg:gap-[80px] items-center text-center lg:text-left container mx-auto">
        
        <FadeIn>
          <div className="relative w-[280px] h-[280px] lg:w-[320px] lg:h-[320px] mx-auto rounded-full overflow-hidden border-2 border-gold-dark shadow-[0_0_80px_rgba(212,160,23,0.2)] bg-[radial-gradient(circle_at_center,#1a1408_0%,#050505_100%)] flex items-center justify-center group">
            <img 
              src="/images/author/1.jpeg" 
              alt="Simon Leviev"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="font-ui text-[0.7rem] tracking-[5px] uppercase text-gold mb-3">The Author</p>
          <h2 className="font-display text-[2.4rem] lg:text-[clamp(2.4rem,4vw,3.6rem)] font-extrabold text-beige-light mb-6">Simon Leviev</h2>
          <div className="space-y-5 font-body text-[1.1rem] leading-[1.7] text-beige/70">
            <p>
              Born into a strict religious world in Bnei Brak, Simon Leviev’s journey took him from childhood isolation to the very center of a worldwide media storm.
            </p>
            <p>
              His life has been defined by extreme ambition and extreme controversy. Now, for the first time, he shares the mindset and survival strategies that allowed him to navigate multiple countries, prisons, and fame.
            </p>
          </div>
          
          <div className="font-display italic text-[1.3rem] text-gold-light mt-8 mb-10 border-l-[3px] border-gold pl-6">
            "Some will judge. Some will sympathize. But I am here to tell the raw truth."
          </div>

          <div className="flex flex-wrap gap-5 items-center justify-center lg:justify-start">
            {media.map((name) => (
              <span key={name} className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center font-display font-bold text-[0.6rem] tracking-[1px] text-gold bg-gold/5 transition-all duration-400 hover:border-gold hover:shadow-[0_0_30px_rgba(212,160,23,0.3)] hover:bg-gold/10">
                {name}
              </span>
            ))}
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
