import { useRef, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';
import { cn } from '../../utils/cn';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement | HTMLAnchorElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
  href?: string;
}

export function Button({ children, variant = 'primary', className, href, onClick, ...props }: ButtonProps) {
  const ref = useRef<HTMLAnchorElement | HTMLButtonElement>(null);
  const [isMobile, setIsMobile] = useState(typeof window !== 'undefined' ? window.innerWidth < 768 : false);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (!ref.current || isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.15);
    y.set((e.clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    x.set(0);
    y.set(0);
  };

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    if (href?.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const offset = 90;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    }
    if (onClick) {
      (onClick as React.MouseEventHandler)(e);
    }
  };

  const baseStyles = "inline-flex items-center gap-2.5 font-ui text-[0.85rem] tracking-[2px] uppercase px-9 py-4 cursor-pointer rounded-sm relative overflow-hidden transition-all duration-400 z-10 font-bold outline-none";
  
  const primaryStyles = "bg-gold text-black hover:bg-gold-light hover:shadow-gold-intense hover:-translate-y-[3px] before:content-[''] before:absolute before:inset-0 before:border-[2px] before:border-transparent before:rounded before:transition-all before:duration-400 hover:before:border-gold-light hover:before:-inset-[6px] hover:before:opacity-60";
  
  const secondaryStyles = "bg-transparent text-beige border-[1.5px] border-gold/50 hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_40px_rgba(212,160,23,0.2)] hover:-translate-y-[3px] backdrop-blur-md font-semibold";

  const Component = href ? m.a : m.button;

  return (
    // @ts-expect-error - Framer motion type complexity with generic Component
    <Component
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ref={ref as any}
      href={href}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: !isMobile ? mouseXSpring : 0, y: !isMobile ? mouseYSpring : 0 }}
      className={cn(
        baseStyles,
        variant === 'primary' ? primaryStyles : secondaryStyles,
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}

