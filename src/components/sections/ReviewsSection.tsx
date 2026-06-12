import { FadeIn } from '../animations/FadeIn';

export function ReviewsSection() {
  const reviews = [
    {
      text: "The most gripping autobiography I've ever read. Simon's storytelling pulls you into a world you can't look away from. Unforgettable.",
      author: "David R., New York"
    },
    {
      text: "A cinematic masterpiece in book form. The tension, the luxury, the danger — it reads like a Hollywood thriller, but it's all true.",
      author: "Sarah M., London"
    },
    {
      text: "Couldn't put it down. The raw honesty mixed with the sheer audacity of the story left me speechless. A must-read.",
      author: "Michael K., Sydney"
    },
    {
      text: "Raw, powerful, and deeply human. Behind the headlines is a story of transformation that everyone needs to experience.",
      author: "Elena V., Berlin"
    },
    {
      text: "A journey of absolute power and profound isolation. This book is a masterclass in psychological resilience.",
      author: "Julia S., Paris"
    },
    {
      text: "The truth is often darker than the headlines. Simon Leviev doesn't hold back in this brutal, honest memoir.",
      author: "Robert D., Dubai"
    },
    {
      text: "I started reading with judgment and finished with a completely different perspective. Captivating.",
      author: "Anna L., Stockholm"
    },
    {
      text: "Cinematic, intense, and deeply personal. It's the story of a lifetime, lived at 200mph.",
      author: "James H., Los Angeles"
    }
  ];

  // Double the reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-[80px] lg:py-[120px] relative overflow-hidden">
      <FadeIn className="text-center mb-[50px] lg:mb-[70px] px-8 md:px-[60px]">
        <p className="font-ui text-[0.7rem] tracking-[5px] uppercase text-gold mb-3">Reader Reviews</p>
        <h2 className="font-display text-[2.4rem] lg:text-[clamp(2.4rem,4vw,3.6rem)] font-black text-beige-light">What The <span className="text-gold italic">World</span> Is Saying</h2>
      </FadeIn>

      <div className="relative flex overflow-hidden group">
        <div className="flex w-max gap-6 whitespace-nowrap py-10 animate-marquee [animation-duration:50s] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
          {duplicatedReviews.map((review, i) => (
            <div 
              key={i} 
              className="w-[320px] sm:w-[450px] bg-glass-bg border border-glass-border rounded-[4px] p-8 sm:p-[45px_35px] backdrop-blur-md transition-all duration-500 hover:border-gold/40 hover:bg-glass-hover hover:shadow-[0_30px_70px_rgba(0,0,0,0.6)] group/card"
            >
              <div className="text-gold text-[0.9rem] tracking-[3px] mb-4 opacity-80">★★★★★</div>
              <p className="font-body italic text-[1.05rem] sm:text-[1.2rem] text-beige/80 mb-6 leading-[1.7] whitespace-normal">
                "{review.text}"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-[1px] bg-gold/40" />
                <p className="font-ui text-[0.7rem] tracking-[3px] uppercase text-gold-light font-bold">
                  {review.author}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Ambient Overlays for depth */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#050505] to-transparent z-[2] pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#050505] to-transparent z-[2] pointer-events-none" />
      </div>
    </section>
  );
}
