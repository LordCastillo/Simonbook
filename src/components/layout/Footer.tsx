import { FadeIn } from "../animations/FadeIn";
import SocialMedia from "../shared/SocialMedia";
import Logo from "../shared/Logo";
import { Mail, ArrowRight } from "lucide-react";

export function Footer() {
  const quickLinks = [
    { label: "The Journey", href: "#story" },
    { label: "Buy now", href: "#order" },
    { label: "Reviews", href: "#reviews" },
    { label: "The Lifestyle", href: "#double-life" },
  ];

  const supportLinks = [
    { label: "FAQ", href: "#faq" },
    { label: "Press Kit", href: "#press" },
    { label: "Contact Us", href: "mailto:Info@simonleviev.com" },
  ];

  const legalLinks = [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="relative bg-black overflow-hidden pt-32 pb-12">
      {/* Top Gradient Border */}
      <div className="absolute top-0 left-0 w-full h-px bg-linear-to-r from-transparent via-deep-gold/50 to-transparent"></div>

      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-0 w-1/2 h-full bg-deep-gold/2 blur-[150px] rounded-full pointer-events-none opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-1/2 h-full bg-orange-glow/2 blur-[150px] rounded-full pointer-events-none opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-24">
          {/* Column 1: Brand & Social */}
          <FadeIn className="flex flex-col gap-8">
            <div className="scale-90 origin-left">
              <Logo handleScroll={handleScroll} />
            </div>
            <p className="font-body text-sm text-luxury-beige/50 leading-relaxed max-w-xs">
              Unveiling the truth behind the enigma. Experience the luxury, the controversy, and the untold story of Simon Leviev.
            </p>
            <div className="pt-4 border-t border-luxury-beige/10">
              <p className="font-elegant text-xs text-deep-gold uppercase tracking-[0.2em] mb-4">Connect With Me</p>
              <SocialMedia />
            </div>
          </FadeIn>

          {/* Column 2: Quick Links */}
          <FadeIn delay={0.1} className="flex flex-col gap-8">
            <h3 className="font-elegant text-xl text-luxury-beige tracking-widest uppercase">Quick Links</h3>
            <ul className="flex flex-col gap-4">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScroll(e, link.href)}
                    className="font-ui text-sm text-luxury-beige/40 hover:text-deep-gold transition-all duration-300 flex items-center gap-2 group"
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 text-deep-gold" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          {/* Column 3: Support & Contact */}
          <FadeIn delay={0.2} className="flex flex-col gap-8">
            <h3 className="font-elegant text-xl text-luxury-beige tracking-widest uppercase">Contact</h3>
            <div className="flex flex-col gap-6">
              <p className="font-body text-sm text-luxury-beige/40">
                For inquiries, press, or booking information:
              </p>
              <a 
                href="mailto:Info@simonleviev.com" 
                className="flex items-center gap-3 p-4 rounded-xl glass border border-deep-gold/10 hover:border-deep-gold/30 transition-all duration-500 group"
              >
                <div className="w-10 h-10 rounded-full bg-deep-gold/10 flex items-center justify-center text-deep-gold group-hover:bg-deep-gold group-hover:text-black transition-all duration-500">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] text-deep-gold/60 uppercase tracking-widest">Official Email</p>
                  <p className="text-sm font-ui text-luxury-beige group-hover:text-deep-gold transition-colors">Info@simonleviev.com</p>
                </div>
              </a>
            </div>
          </FadeIn>

          {/* Column 4: Legal */}
          <FadeIn delay={0.3} className="flex flex-col gap-8">
            <h3 className="font-elegant text-xl text-luxury-beige tracking-widest uppercase">Legal</h3>
            <ul className="flex flex-col gap-4">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-ui text-sm text-luxury-beige/40 hover:text-deep-gold transition-all duration-300"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-4 p-4 rounded-lg bg-deep-gold/5 border border-deep-gold/10">
              <p className="text-[10px] leading-relaxed text-luxury-beige/30 italic">
                Disclaimer: This publication is based on historical events. Names and details have been preserved for authenticity.
              </p>
            </div>
          </FadeIn>
        </div>

        {/* Bottom Bar */}
        <div className="pt-12 mt-12 border-t border-luxury-beige/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <p className="font-body text-xs text-luxury-beige/30 tracking-widest">
              &copy; {new Date().getFullYear()} SIMON LEVIEV ENTERPRISE. ALL RIGHTS RESERVED.
            </p>
          </div>
          
          <div className="flex items-center gap-6">
            <span className="w-1.5 h-1.5 rounded-full bg-deep-gold animate-pulse"></span>
            <p className="font-ui text-[10px] text-luxury-beige/40 uppercase tracking-[0.2em]">
              Designed for the extraordinary
            </p>
          </div>
        </div>
      </div>
    </footer>

  );
}

