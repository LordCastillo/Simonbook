import { FadeIn } from "../animations/FadeIn";

export function IntroSection() {
  return (
    <section id="story" className="relative py-32 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-deep-gold/30 to-transparent"></div>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <FadeIn className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
              <picture className="block w-full h-full">
                <source srcSet="/images/story/2.webp" type="image/webp" />
                <img
                  src="/images/story/2.jpeg"
                  alt="Simon Leviev - The Author"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width="1200"
                  height="900"
                />
              </picture>
              <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 via-luxury-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8 right-8">
                <p className="font-signature text-4xl text-deep-gold drop-shadow-lg">
                  Truth is stranger than fiction.
                </p>
              </div>
            </div>
            <div className="absolute -inset-4 border border-deep-gold/20 rounded-sm -z-10 transform translate-x-4 translate-y-4"></div>
          </FadeIn>

          <FadeIn delay={0.2} className="space-y-8">
            <div className="space-y-2">
              <p className="font-body text-xs uppercase tracking-[0.3em] text-deep-gold">
                The Journey
              </p>
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-luxury-beige leading-tight">
                From an Orthodox boy
                <br />
                <span className="text-gradient-gold italic">
                  to the world's most wanted
                </span>
              </h2>
            </div>
            <div className="space-y-6 font-elegant text-lg text-luxury-beige/70 leading-relaxed">
              <p>
                You already know how this story ends, as other people have told
                it. But you have never heard the full story from me, firsthand.
                How did an Orthodox boy from Bnei Brak become the person at the
                center of a worldwide crime spree?
              </p>
              <p>
                Fake identities, massive business deals, luxury cars, private
                jets, yachts, and quite a few women — it became the backdrop of
                my life. I am opening a window into my life story.
              </p>
            </div>
            <div className="relative pl-8 border-l-2 border-deep-gold/50">
              <p className="font-elegant text-2xl md:text-3xl text-luxury-beige/90 italic leading-relaxed">
                "I am inviting you to go on a journey with me. You will feel
                excitement; you will feel my pain; you will feel tremendous
                stress, and you will feel relief."
              </p>
              <p className="mt-4 font-signature text-3xl text-deep-gold">
                Simon Leviev
              </p>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
