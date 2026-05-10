import { FadeIn } from '../animations/FadeIn';

export function TimelineSection() {
  const timelineItems = [
    {
      title: "The Beginning",
      desc: "An Orthodox childhood in Bnei Brak. A world away from what was to come.",
      alignment: "left"
    },
    {
      title: "The Rise",
      desc: "Luxury cars, private jets, and a lifestyle that defied imagination.",
      alignment: "right"
    },
    {
      title: "The Hunt",
      desc: "Wanted in eight countries. A global escape that reads like fiction.",
      alignment: "left"
    },
    {
      title: "The Fall",
      desc: "Prison across the globe. The moment everything changed.",
      alignment: "right"
    },
    {
      title: "The Return",
      desc: "From prisoner to author. The ultimate transformation begins.",
      alignment: "left"
    }
  ];

  return (
    <section id="timeline" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="relative">
          <FadeIn className="text-center mb-16">
            <p className="font-body text-xs uppercase tracking-[0.3em] text-deep-gold mb-4">
              Timeline
            </p>
            <h3 className="font-display text-3xl md:text-4xl text-luxury-beige">
              A Life of Extremes
            </h3>
          </FadeIn>
          
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-deep-gold/30 to-transparent hidden md:block"></div>
            
            <div className="space-y-16 md:space-y-24">
              {timelineItems.map((item, index) => (
                <FadeIn 
                  key={index} 
                  delay={index * 0.15} 
                  className="relative flex flex-col md:flex-row items-center gap-8"
                >
                  {/* Left aligned items */}
                  {item.alignment === 'left' ? (
                    <>
                      <div className="hidden md:flex w-1/2 justify-end pr-12">
                        <div className="glass p-6 rounded-sm max-w-sm text-right gold-glow-hover">
                          <h4 className="font-display text-xl text-deep-gold mb-2">
                            {item.title}
                          </h4>
                          <p className="font-elegant text-luxury-beige/70">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <div className="timeline-dot hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-luxury-black border-2 border-deep-gold z-10 items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-deep-gold"></div>
                      </div>
                      <div className="md:w-1/2 md:pl-12 md:hidden w-full">
                        <div className="glass p-6 rounded-sm gold-glow-hover">
                          <h4 className="font-display text-xl text-deep-gold mb-2">
                            {item.title}
                          </h4>
                          <p className="font-elegant text-luxury-beige/70">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                      <div className="hidden md:flex w-1/2 justify-start pl-12"></div>
                    </>
                  ) : (
                    /* Right aligned items */
                    <>
                      <div className="hidden md:flex w-1/2 justify-end pr-12"></div>
                      <div className="timeline-dot hidden md:flex absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-luxury-black border-2 border-deep-gold z-10 items-center justify-center">
                        <div className="w-1.5 h-1.5 rounded-full bg-deep-gold"></div>
                      </div>
                      <div className="md:w-1/2 md:pl-12 md:text-left w-full">
                        <div className="glass p-6 rounded-sm max-w-sm gold-glow-hover">
                          <h4 className="font-display text-xl text-deep-gold mb-2">
                            {item.title}
                          </h4>
                          <p className="font-elegant text-luxury-beige/70">
                            {item.desc}
                          </p>
                        </div>
                      </div>
                    </>
                  )}
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
