import { useEffect, useState } from "react";
import {
  AnimatePresence,
  m,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "../../utils/cn";
import Logo from "../shared/Logo";
import { Button } from "../ui/Button";

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const isScrolled = latest > 50;
    setScrolled((current) => (current === isScrolled ? current : isScrolled));
  });

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const sectionIds = [
      "hero",
      "story",
      "double-life",
      "author",
      "trailer",
      "reviews",
    ];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection((current) =>
            current === entry.target.id ? current : entry.target.id,
          );
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
    href: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false);

    const id = href.replace("#", "");
    if (id) setActiveSection(id);

    const target = document.querySelector(href);
    if (target) {
      const behavior = window.matchMedia("(prefers-reduced-motion: reduce)")
        .matches
        ? "auto"
        : "smooth";

      target.scrollIntoView({ behavior, block: "start" });
    }
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? "py-0" : "py-2"}`}
        id="navbar"
      >
        <div className="glass-strong px-6 lg:px-12 py-2 sm:py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Logo handleScroll={handleScroll} />
            <div className="hidden md:flex items-center gap-8">
              {[
                { id: "hero", label: "Home" },
                { id: "story", label: "Story" },
                { id: "double-life", label: "Double Life" },
                { id: "author", label: "Author" },
                { id: "trailer", label: "Trailer" },
                { id: "reviews", label: "Reviews" },
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleScroll(e, `#${item.id}`)}
                  className={cn(
                    "nav-link font-body text-xs uppercase tracking-[0.2em] transition-all duration-300 ease-in-out relative py-2",
                    activeSection === item.id
                      ? "text-gold"
                      : "text-luxury-beige/70 hover:text-luxury-beige",
                  )}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <m.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 w-full h-0.5 bg-gold"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              ))}
              <Button
                href="#order"
                onClick={(e) => handleScroll(e, "#order")}
                variant="secondary"
                className="px-6 py-2.5 text-[0.7rem] tracking-[0.25em]"
              >
                Order Now
              </Button>
            </div>
            <button
              className="md:hidden flex flex-col justify-center items-center w-9 h-9 gap-[5px] rounded-sm border border-gold/20 hover:border-gold/50 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? (
                <>
                  <span className="block w-5 h-[1.5px] bg-gold rotate-45 translate-y-[3.25px] transition-all duration-300" />
                  <span className="block w-5 h-[1.5px] bg-gold -rotate-45 -translate-y-[3.25px] transition-all duration-300" />
                </>
              ) : (
                <>
                  <span className="block w-5 h-[1.5px] bg-beige-light transition-all duration-300" />
                  <span className="block w-3.5 h-[1.5px] bg-gold transition-all duration-300" />
                  <span className="block w-5 h-[1.5px] bg-beige-light transition-all duration-300" />
                </>
              )}
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
            {[
              { id: "hero", label: "Home" },
              { id: "story", label: "Story" },
              { id: "double-life", label: "Double Life" },
              { id: "author", label: "Author" },
              { id: "trailer", label: "Trailer" },
              { id: "reviews", label: "Reviews" },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => handleScroll(e, `#${item.id}`)}
                className={cn(
                  "font-display text-2xl tracking-widest transition-colors relative py-1",
                  activeSection === item.id ? "text-gold" : "text-luxury-beige",
                )}
              >
                {item.label}
                {activeSection === item.id && (
                  <m.div
                    layoutId="nav-underline-mobile"
                    className="absolute bottom-0 left-0 w-full h-0.5 bg-gold"
                  />
                )}
              </a>
            ))}
            <Button 
              href="#order" 
              onClick={(e) => handleScroll(e, "#order")}
              variant="secondary"
            >
              Order Now
            </Button>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
