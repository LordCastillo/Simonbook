import { Button } from "../ui/Button";
import { Zap, BookOpenText } from "lucide-react";

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="relative py-40 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-deep-gold/30 to-transparent"></div>
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-deep-gold/5 rounded-full filter blur-[150px]"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-warm-orange/5 rounded-full filter blur-[100px]"></div>
      </div>
      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-12 text-center">
        <div className="reveal space-y-10">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-deep-gold">
            Limited First Edition
          </p>
          <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-luxury-beige leading-[0.95]">
            Some stories are
            <br />
            <span className="text-gradient-gold italic">too dangerous</span>
            <br />
            to stay untold.
          </h2>
          <p className="font-elegant text-xl md:text-2xl text-luxury-beige/60 max-w-2xl mx-auto">
            Join millions who have already discovered the truth. Your journey
            begins with a single page.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button href="#order" variant="primary">
              <Zap className="w-4 h-4 fill-current" /> Order Now
            </Button>
            <Button href="#" variant="secondary">
              <BookOpenText className="w-4 h-4" /> Read First Chapter
            </Button>
          </div>
          <div className="flex flex-wrap justify-center gap-8 pt-8 opacity-60">
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-deep-gold"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
              </svg>
              <span className="font-body text-xs uppercase tracking-wider">
                Secure Payment
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-deep-gold"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
              </svg>
              <span className="font-body text-xs uppercase tracking-wider">
                Free Shipping
              </span>
            </div>
            <div className="flex items-center gap-2">
              <svg
                className="w-5 h-5 text-deep-gold"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
              <span className="font-body text-xs uppercase tracking-wider">
                Money Back Guarantee
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
