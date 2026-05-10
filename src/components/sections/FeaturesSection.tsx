import { FadeIn } from '../animations/FadeIn';
import { Book, TabletSmartphone, ShoppingCart } from 'lucide-react';
import { Button } from '../ui/Button';

export function FeaturesSection() {
  const options = [
    {
      icon: TabletSmartphone,
      title: "Digital eBook",
      price: "$9.99",
      desc: "Instant access to the raw truth on all your devices. Perfect for immediate reading.",
      tag: "Instant Download",
      delay: 0.1
    },
    {
      icon: Book,
      title: "Premium Hardcover",
      price: "$14.99",
      desc: "A collector's edition with high-quality print and cinematic imagery. A true library piece.",
      tag: "Exclusive Print",
      delay: 0.25,
      featured: true
    }
  ];

  return (
    <section id="order" className="py-[100px] lg:py-[160px] px-8 md:px-[60px] relative bg-[radial-gradient(circle_at_center,rgba(212,160,23,0.03)_0%,transparent_70%)]">
      <FadeIn className="text-center mb-[60px] lg:mb-[90px]">
        <p className="font-ui text-[0.7rem] tracking-[5px] uppercase text-gold mb-3">Secure Your Copy</p>
        <h2 className="font-display text-[2.8rem] lg:text-[4rem] font-black text-beige-light leading-[1.1]">
          Exclusive <span className="text-gold italic">Editions</span>
        </h2>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-[900px] mx-auto container">
        {options.map((option, i) => (
          <FadeIn key={i} delay={option.delay}>
            <div className={`relative bg-glass-bg border ${option.featured ? 'border-gold/40 shadow-[0_0_80px_rgba(212,160,23,0.1)]' : 'border-glass-border'} rounded-[4px] p-10 lg:p-14 transition-all duration-500 group hover:-translate-y-2 hover:border-gold/60 backdrop-blur-xl flex flex-col items-center text-center h-full`}>
              
              {option.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gold text-black font-ui text-[0.6rem] font-bold tracking-[2px] uppercase px-4 py-1.5 rounded-full z-10 shadow-[0_0_20px_rgba(212,160,23,0.4)]">
                  Most Popular
                </div>
              )}

              <div className="w-20 h-20 rounded-full bg-gold/5 border border-gold/20 flex items-center justify-center mb-8 transition-all duration-500 group-hover:bg-gold/10 group-hover:border-gold/40 group-hover:shadow-[0_0_40px_rgba(212,160,23,0.2)]">
                <option.icon className="w-9 h-9 text-gold transition-transform duration-500 group-hover:scale-110" />
              </div>
              
              <h3 className="font-display text-[1.8rem] font-bold text-beige-light mb-3 tracking-[1px]">
                {option.title}
              </h3>
              
              <p className="text-beige/50 text-[0.95rem] leading-[1.6] mb-8 max-w-[280px]">
                {option.desc}
              </p>
              
              <div className="mt-auto w-full">
                <div className="mb-8">
                  <span className="text-gold/50 text-[1.2rem] font-light mr-1">$</span>
                  <span className="text-gold text-[3.2rem] font-black tracking-[-2px] leading-none">
                    {option.price.replace('$', '')}
                  </span>
                  <span className="text-beige-dark text-[0.8rem] ml-2 tracking-[2px] uppercase">USD</span>
                </div>
                
                <Button 
                  className="w-full justify-center gap-3 py-4 text-[0.8rem] tracking-[3px]"
                  variant={option.featured ? "primary" : "secondary"}
                >
                  <ShoppingCart className="w-4 h-4" />
                  ORDER NOW
                </Button>
              </div>

              <p className="mt-6 font-ui text-[0.6rem] tracking-[2px] uppercase text-beige/30">
                {option.tag}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
