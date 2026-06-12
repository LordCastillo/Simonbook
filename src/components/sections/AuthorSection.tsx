export function AuthorSection() {
  return (
    <section id="author" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-deep-gold/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-2 reveal">
            <div className="relative">
              <div className="aspect-3/4 overflow-hidden rounded-sm relative">
                <picture className="block w-full h-full">
                  <source srcSet="/images/book.webp" type="image/webp" />
                  <img
                    src="/images/book.JPG"
                    alt="Simon Leviev"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                    width="1200"
                    height="1801"
                  />
                </picture>
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-luxury-black/20 to-transparent"></div>
              </div>
              <div className="absolute -inset-3 border border-deep-gold/20 rounded-sm pointer-events-none"></div>
              <div className="absolute -inset-6 border border-deep-gold/10 rounded-sm pointer-events-none"></div>
              <div className="absolute -bottom-8 -right-4 md:-right-8">
                <p className="font-signature text-5xl md:text-6xl text-deep-gold transform -rotate-6">
                  Simon Leviev
                </p>
              </div>
            </div>
          </div>
          <div className="lg:col-span-3 reveal space-y-8">
            <div className="space-y-2">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-deep-gold">
                The Author
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-luxury-beige leading-tight">
                Why I Wrote
                <br />
                <span className="text-gradient-gold italic">This Book</span>
              </h2>
            </div>
            <div className="space-y-6 font-elegant text-lg text-luxury-beige/70 leading-relaxed">
              <p>
                This is no ordinary story; it is an action-adventure, a
                thriller, and a drama. My constant struggles illustrate the
                difficulties and challenges in breaking through boundaries on
                the way to massive success.
              </p>
              <p>
                You will read how I became a wanted man in eight different
                countries, yet escaped again and again. You will discover how I
                faced down extortion attempts and often found myself in mortal
                danger. You will even learn how I was sentenced to prison across
                the globe.
              </p>
              <p>
                This book not only describes my personal journey; it offers you
                a guide to success. Every event I experienced is visually
                documented here in interactive detail, a story that really
                happened but transcends your wildest imagination.
              </p>
            </div>
            <div className="relative pl-8 py-6 border-l-2 border-deep-gold/30">
              <p className="font-elegant text-2xl text-luxury-beige italic">
                "A daring tale written by life itself."
              </p>
            </div>
            <div className="pt-6">
              <p className="font-body text-[10px] uppercase tracking-[0.3em] text-luxury-beige/40 mb-4">
                As Featured In
              </p>
              <div className="flex flex-wrap gap-8 items-center opacity-40">
                <span className="font-display text-xl text-luxury-beige">
                  Netflix
                </span>
                <span className="font-display text-xl text-luxury-beige">
                  Forbes
                </span>
                <span className="font-display text-xl text-luxury-beige">
                  BBC
                </span>
                <span className="font-display text-xl text-luxury-beige">
                  CNN
                </span>
                <span className="font-display text-xl text-luxury-beige">
                  TIME
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
