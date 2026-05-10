import { useEffect, useState } from "react";
import { AnimatePresence, m, useScroll, useMotionValueEvent } from "framer-motion";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'py-0' : 'py-2'}`}
        id="navbar"
      >
        <div className="glass-strong px-6 lg:px-12 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <a
              href="#hero"
              onClick={(e) => handleScroll(e, "#hero")}
              className="font-elegant text-2xl text-gradient-gold tracking-wider"
            >
              SL
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#story"
                onClick={(e) => handleScroll(e, "#story")}
                className="nav-link font-body text-xs uppercase tracking-[0.2em] text-luxury-beige/70 hover:text-luxury-beige transition-colors"
              >
                Story
              </a>
              <a
                href="#double-life"
                onClick={(e) => handleScroll(e, "#double-life")}
                className="nav-link font-body text-xs uppercase tracking-[0.2em] text-luxury-beige/70 hover:text-luxury-beige transition-colors"
              >
                Double Life
              </a>
              <a
                href="#author"
                onClick={(e) => handleScroll(e, "#author")}
                className="nav-link font-body text-xs uppercase tracking-[0.2em] text-luxury-beige/70 hover:text-luxury-beige transition-colors"
              >
                Author
              </a>
              <a
                href="#trailer"
                onClick={(e) => handleScroll(e, "#trailer")}
                className="nav-link font-body text-xs uppercase tracking-[0.2em] text-luxury-beige/70 hover:text-luxury-beige transition-colors"
              >
                Trailer
              </a>
              <a
                href="#reviews"
                onClick={(e) => handleScroll(e, "#reviews")}
                className="nav-link font-body text-xs uppercase tracking-[0.2em] text-luxury-beige/70 hover:text-luxury-beige transition-colors"
              >
                Reviews
              </a>
              <a
                href="#order"
                onClick={(e) => handleScroll(e, "#order")}
                className="magnetic-btn px-6 py-2 border border-deep-gold/50 text-deep-gold font-body text-xs uppercase tracking-[0.2em] hover:bg-deep-gold hover:text-luxury-black transition-all duration-300"
              >
                Order Now
              </a>
            </div>
            <button
              className="md:hidden text-luxury-beige"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-luxury-black/95 z-40 flex flex-col items-center justify-center gap-8 backdrop-blur-md"
          >
            <a
              href="#story"
              onClick={(e) => handleScroll(e, "#story")}
              className="font-display text-2xl text-luxury-beige tracking-widest"
            >
              Story
            </a>
            <a
              href="#double-life"
              onClick={(e) => handleScroll(e, "#double-life")}
              className="font-display text-2xl text-luxury-beige tracking-widest"
            >
              Double Life
            </a>
            <a
              href="#author"
              onClick={(e) => handleScroll(e, "#author")}
              className="font-display text-2xl text-luxury-beige tracking-widest"
            >
              Author
            </a>
            <a
              href="#trailer"
              onClick={(e) => handleScroll(e, "#trailer")}
              className="font-display text-2xl text-luxury-beige tracking-widest"
            >
              Trailer
            </a>
            <a
              href="#order"
              onClick={(e) => handleScroll(e, "#order")}
              className="mt-8 px-8 py-3 border border-deep-gold text-deep-gold font-body text-sm uppercase tracking-[0.2em]"
            >
              Order Now
            </a>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
