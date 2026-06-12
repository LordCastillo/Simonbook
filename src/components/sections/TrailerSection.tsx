import { useState } from "react";
import { FadeIn } from "../animations/FadeIn";

export function TrailerSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="trailer"
      className="relative py-32 overflow-hidden bg-luxury-black"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-deep-gold/30 to-transparent"></div>

      <div className="container mx-auto px-6 lg:px-12">
        <FadeIn className="text-center mb-16">
          <p className="font-body text-xs uppercase tracking-[0.3em] text-deep-gold mb-4">
            The Story Behind The Man
          </p>
          <h3 className="font-display text-4xl md:text-5xl lg:text-6xl text-luxury-beige">
            Official Trailer
          </h3>
        </FadeIn>

        <FadeIn delay={0.2} className="relative container mx-auto">
          <div className="relative  rounded-sm overflow-hidden border border-deep-gold/20 shadow-gold-intense group bg-luxury-black">
            <div className="w-full h-full flex items-center justify-center relative">
              {/* Harmonious Blurred Background */}
              <div className="absolute inset-0 z-0">
                <picture className="block w-full h-full">
                  <source srcSet="/images/info-book.webp" type="image/webp" />
                  <img
                    src="/images/info-book.jpg"
                    alt=""
                    className="w-full h-full object-cover blur-3xl opacity-40 scale-110 transition-transform duration-700 group-hover:scale-125"
                    loading="lazy"
                    decoding="async"
                    width="1600"
                    height="1146"
                  />
                </picture>
                <div className="absolute inset-0 bg-luxury-black/40"></div>
              </div>

              {/* Main Poster Image - Set to object-contain for full visibility */}
              <picture className="relative z-10 block w-full h-full">
                <source srcSet="/images/info-book.webp" type="image/webp" />
                <img
                  src="/images/info-book.jpg"
                  alt="Trailer Cover"
                  className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  decoding="async"
                  width="1600"
                  height="1146"
                />
              </picture>

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-luxury-black/20 transition-opacity duration-300 group-hover:bg-transparent"></div>

              {/* Play Button */}
              {!isPlaying && (
                <button
                  onClick={() => setIsPlaying(true)}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 md:w-32 md:h-32 rounded-full glass-strong flex items-center justify-center text-deep-gold hover:text-luxury-beige hover:border-deep-gold gold-glow-hover transition-all duration-300 z-10 cursor-pointer"
                  aria-label="Play Trailer"
                >
                  <svg
                    className="w-8 h-8 md:w-12 md:h-12 ml-2"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              )}

              {/* Video Overlay / Modal */}
              {isPlaying && (
                <div className="absolute inset-0 z-50 bg-black flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(false)}
                    className="absolute top-4 right-4 text-white hover:text-deep-gold transition-colors z-60"
                  >
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                  <div className="w-full h-full">
                    <iframe
                      src="https://drive.google.com/file/d/1A0RLjKcakIagrqyjaQdsVkm5z2uj4IiS/preview"
                      className="w-full h-full border-none"
                      allow="autoplay"
                      allowFullScreen
                    ></iframe>
                  </div>
                </div>
              )}
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
