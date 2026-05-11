import { useState } from "react";
import { FadeIn } from "../animations/FadeIn";

export function TrailerSection() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section
      id="trailer"
      className="relative py-32 overflow-hidden bg-luxury-black"
    >
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-deep-gold/30 to-transparent"></div>

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
          <div className="relative aspect-video rounded-sm overflow-hidden border border-deep-gold/20 shadow-gold-intense group">
            {!isPlaying ? (
              <div className="w-full h-full">
                {/* Poster Image */}
                <img
                  src="/images/info-book.jpg"
                  alt="Trailer Cover"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-luxury-black/40 transition-opacity duration-300 group-hover:bg-luxury-black/20"></div>

                {/* Play Button */}
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
              </div>
            ) : (
              /* Video Player */
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/fD27o39Zk94?autoplay=1"
                title="Official Trailer"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
