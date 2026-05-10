import { FaInstagram, FaXTwitter, FaYoutube, FaEnvelope } from 'react-icons/fa6';

export function Footer() {
  const links = [
    { name: "The Story", href: "#about" },
    { name: "Psychology", href: "#double-life" },
    { name: "The Author", href: "#author" },
    { name: "Moments", href: "#trailer" },
    { name: "Order Now", href: "#order" }
  ];

  const socials = [
    { icon: FaInstagram, href: "#", label: "Instagram" },
    { icon: FaXTwitter, href: "#", label: "X (Twitter)" },
    { icon: FaYoutube, href: "#", label: "YouTube" },
    { icon: FaEnvelope, href: "#", label: "Email" }
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="py-[80px] lg:py-[100px] px-8 md:px-[60px] border-t border-gold/10 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 items-start mb-16">
          
          {/* Column 1: Brand */}
          <div className="text-center lg:text-left">
            <h2 className="font-display text-[1.6rem] font-bold text-gold tracking-[4px] uppercase mb-6">
              Simon Leviev
            </h2>
            <p className="text-beige/60 text-[0.9rem] leading-[1.8] max-w-[300px] mx-auto lg:mx-0">
              The official autobiography. A journey through ambition, pain, reinvention, and power.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="text-center">
            <h3 className="font-ui text-[0.7rem] tracking-[3px] uppercase text-gold mb-8">Navigation</h3>
            <ul className="flex flex-wrap justify-center gap-x-8 gap-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={(e) => handleScroll(e, link.href)}
                    className="text-beige/60 hover:text-gold transition-colors duration-300 font-ui text-[0.75rem] tracking-[1px] uppercase"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="text-center lg:text-right">
            <h3 className="font-ui text-[0.7rem] tracking-[3px] uppercase text-gold mb-8">Connect</h3>
            <div className="flex justify-center lg:justify-end gap-5">
              {socials.map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full border border-gold/20 flex items-center justify-center text-beige/60 hover:text-gold hover:border-gold transition-all duration-300 bg-gold/5"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="pt-10 border-t border-gold/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-ui text-[0.65rem] tracking-[2px] text-beige/40 uppercase">
            &copy; 2026 Simon Leviev. All rights reserved.
          </p>
          <p className="font-ui text-[0.65rem] tracking-[2px] text-beige/40 uppercase">
            ISBN 978-905-597-027-2
          </p>
        </div>
      </div>
    </footer>
  );
}
