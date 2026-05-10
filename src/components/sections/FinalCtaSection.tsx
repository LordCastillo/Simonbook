import { FadeIn } from '../animations/FadeIn';
import { Button } from '../ui/Button';
import { Zap, BookOpenText } from 'lucide-react';

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="py-[120px] lg:py-[160px] px-8 md:px-[60px] relative text-center min-h-[70vh] flex items-center justify-center bg-[radial-gradient(ellipse_at_center_bottom,rgba(212,160,23,0.06)_0%,transparent_60%)]">
      <FadeIn className="container mx-auto relative z-[2]">
        <h2 className="font-display text-[2.8rem] lg:text-[clamp(2.8rem,5vw,4.5rem)] font-black text-beige-light leading-[1.1] mb-10 tracking-[-1px]">
          Some will judge. Some will sympathize. But you will <span className="text-gold italic">never see him</span> the same way again.
        </h2>
        <div className="flex flex-wrap gap-5 justify-center">
          <Button href="#order" variant="primary">
            <Zap className="w-4 h-4 fill-current" /> Order Now
          </Button>
          <Button href="#" variant="secondary">
            <BookOpenText className="w-4 h-4" /> Read First Chapter
          </Button>
        </div>
      </FadeIn>
    </section>
  );
}
