import { useEffect, useMemo, useState } from "react";
import {
  AnimatePresence,
  m,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "../../utils/cn";

const NAV_ITEMS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "The Story", href: "#double-life" },
  { label: "Author", href: "#author" },
  { label: "Trailer", href: "#trailer" },
  { label: "Reviews", href: "#reviews" },
];

export function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("#hero");

  const { scrollY } = useScroll();

  /*
   |--------------------------------------------------------------------------
   | Navbar Background Change
   |--------------------------------------------------------------------------
   */

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50);
  });

  /*
   |--------------------------------------------------------------------------
   | Lock Body Scroll on Mobile Menu
   |--------------------------------------------------------------------------
   */

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileMenuOpen]);

  /*
   |--------------------------------------------------------------------------
   | Active Section Detection
   |--------------------------------------------------------------------------
   */

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.querySelector(item.href));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(`#${entry.target.id}`);
          }
        });
      },
      {
        threshold: 0.4,
      },
    );

    sections.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  /*
   |--------------------------------------------------------------------------
   | Smooth Scroll
   |--------------------------------------------------------------------------
   */

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();

    const target = document.querySelector(id);

    if (!target) return;

    const navbarOffset = 90;

    const targetPosition =
      target.getBoundingClientRect().top + window.pageYOffset - navbarOffset;

    window.scrollTo({
      top: targetPosition,
      behavior: "smooth",
    });

    setMobileMenuOpen(false);
  };

  /*
   |--------------------------------------------------------------------------
   | Reusable Nav Link
   |--------------------------------------------------------------------------
   */

  const renderNavLinks = useMemo(
    () => (
      <>
        {NAV_ITEMS.map((item) => {
          const isActive = activeSection === item.href;

          return (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleScroll(e, item.href)}
              className={cn(
                "group relative font-ui text-[0.78rem] font-semibold uppercase tracking-[2.5px]",
                "transition-all duration-300 ease-out",
                isActive ? "text-gold" : "text-beige/75 hover:text-gold",
              )}
            >
              {item.label}

              <span
                className={cn(
                  "absolute -bottom-2 left-0 h-[1.5px] bg-gold transition-all duration-300",
                  isActive ? "w-full" : "w-0 group-hover:w-full",
                )}
              />
            </a>
          );
        })}
      </>
    ),
    [activeSection],
  );

  return (
    <>
      {/* ========================================= */}
      {/* NAVBAR */}
      {/* ========================================= */}

      <m.nav
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={cn(
          "fixed inset-x-0 top-0 z-[1000]",
          "transition-all duration-500",
          scrolled
            ? "border-b border-white/10 bg-black/75 backdrop-blur-[24px] shadow-[0_10px_50px_rgba(0,0,0,0.45)]"
            : "bg-transparent",
        )}
      >
        <div className="container mx-auto flex items-center justify-between px-6 md:px-[60px] py-4">
          {/* ========================================= */}
          {/* LOGO */}
          {/* ========================================= */}

          <a
            href="#hero"
            onClick={(e) => handleScroll(e, "#hero")}
            className="relative z-50 font-display text-[1.1rem] md:text-[1.45rem] font-bold uppercase tracking-[4px] text-gold no-underline transition-all duration-300 hover:opacity-80"
          >
            Simon Leviev
          </a>

          {/* ========================================= */}
          {/* DESKTOP NAV */}
          {/* ========================================= */}

          <div className="hidden lg:flex items-center gap-9">
            {renderNavLinks}
          </div>

          {/* ========================================= */}
          {/* RIGHT SIDE */}
          {/* ========================================= */}

          <div className="flex items-center gap-4">
            {/* CTA BUTTON */}

            <a
              href="#order"
              onClick={(e) => handleScroll(e, "#order")}
              className={cn(
                "group relative overflow-hidden rounded-sm border border-gold",
                "px-5 md:px-7 py-3",
                "font-ui text-[0.72rem] md:text-[0.8rem] font-semibold uppercase tracking-[2px]",
                "text-beige transition-all duration-500",
                "hover:bg-gold hover:text-black",
                "hover:shadow-[0_0_40px_rgba(212,175,55,0.35)]",
              )}
            >
              <span className="relative z-10">Order Now</span>

              {/* Shine Effect */}

              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            </a>

            {/* MOBILE MENU BUTTON */}

            <button
              aria-label="Toggle Menu"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="relative z-50 flex items-center justify-center text-beige lg:hidden"
            >
              {mobileMenuOpen ? (
                <X className="size-6" />
              ) : (
                <Menu className="size-6" />
              )}
            </button>
          </div>
        </div>
      </m.nav>

      {/* ========================================= */}
      {/* MOBILE MENU */}
      {/* ========================================= */}

      <AnimatePresence>
        {mobileMenuOpen && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black/95 backdrop-blur-[30px] lg:hidden"
          >
            <m.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 40, opacity: 0 }}
              transition={{
                duration: 0.4,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="flex flex-col items-center gap-8"
            >
              {NAV_ITEMS.map((item, index) => (
                <m.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleScroll(e, item.href)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.08,
                  }}
                  className={cn(
                    "font-display text-[1.45rem] uppercase tracking-[4px]",
                    "transition-all duration-300",
                    activeSection === item.href
                      ? "text-gold"
                      : "text-beige hover:text-gold",
                  )}
                >
                  {item.label}
                </m.a>
              ))}

              <m.a
                href="#order"
                onClick={(e) => handleScroll(e, "#order")}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="mt-4 border border-gold px-8 py-4 font-ui text-[0.8rem] font-semibold uppercase tracking-[3px] text-gold transition-all duration-300 hover:bg-gold hover:text-black"
              >
                Order Now
              </m.a>
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </>
  );
}
