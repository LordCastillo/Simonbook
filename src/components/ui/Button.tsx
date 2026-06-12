import { useRef, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import { m, useMotionValue, useSpring } from 'framer-motion';
import type { HTMLMotionProps } from 'framer-motion';
import { cn } from '../../utils/cn';

type BaseButtonProps = {
  children: ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
};

type AnchorButtonProps = BaseButtonProps &
  Omit<HTMLMotionProps<'a'>, 'children' | 'className' | 'style'> & {
    href: string;
  };

type NativeButtonProps = BaseButtonProps &
  Omit<HTMLMotionProps<'button'>, 'children' | 'className' | 'style'> & {
    href?: undefined;
  };

type ButtonProps = AnchorButtonProps | NativeButtonProps;

export function Button({ children, variant = 'primary', className, ...props }: ButtonProps) {
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

  const handleMagneticMove = (clientX: number, clientY: number) => {
    if (!ref.current || isMobile) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((clientX - centerX) * 0.15);
    y.set((clientY - centerY) * 0.15);
  };

  const handleMouseLeave = () => {
    if (isMobile) return;
    x.set(0);
    y.set(0);
  };

  const handleHashScroll = (e: React.MouseEvent, href?: string) => {
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
          behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
            ? 'auto'
            : 'smooth'
        });
      }
    }
  };

  const baseStyles = "inline-flex items-center gap-2.5 font-ui text-[0.85rem] tracking-[2px] uppercase px-9 py-4 cursor-pointer rounded-sm relative overflow-hidden transition-all duration-400 z-10 font-bold outline-none";
  
  const primaryStyles = "bg-gold text-black hover:bg-gold-light hover:shadow-gold-intense hover:-translate-y-[3px] before:content-[''] before:absolute before:inset-0 before:border-[2px] before:border-transparent before:rounded before:transition-all before:duration-400 hover:before:border-gold-light hover:before:-inset-[6px] hover:before:opacity-60";
  
  const secondaryStyles = "bg-transparent text-beige border-[1.5px] border-gold/50 hover:border-gold hover:bg-gold/10 hover:shadow-[0_0_40px_rgba(212,160,23,0.2)] hover:-translate-y-[3px] backdrop-blur-md font-semibold";

  const sharedClassName = cn(
    baseStyles,
    variant === 'primary' ? primaryStyles : secondaryStyles,
    className
  );
  const motionStyle = {
    x: !isMobile ? mouseXSpring : 0,
    y: !isMobile ? mouseYSpring : 0,
  };

  if ('href' in props && props.href !== undefined) {
    const { href, onClick, ...anchorProps } = props;

    const setAnchorRef = (node: HTMLAnchorElement | null) => {
      ref.current = node;
    };

    const handleAnchorClick: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
      handleHashScroll(e, href);
      onClick?.(e);
    };

    const handleAnchorMouseMove: React.MouseEventHandler<HTMLAnchorElement> = (e) => {
      handleMagneticMove(e.clientX, e.clientY);
    };

    return (
      <m.a
        ref={setAnchorRef}
        href={href}
        onClick={handleAnchorClick}
        onMouseMove={handleAnchorMouseMove}
        onMouseLeave={handleMouseLeave}
        style={motionStyle}
        className={sharedClassName}
        {...anchorProps}
      >
        {children}
      </m.a>
    );
  }

  const { onClick, ...buttonProps } = props;

  const setButtonRef = (node: HTMLButtonElement | null) => {
    ref.current = node;
  };

  const handleButtonClick: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    onClick?.(e);
  };

  const handleButtonMouseMove: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    handleMagneticMove(e.clientX, e.clientY);
  };

  return (
    <m.button
      ref={setButtonRef}
      onClick={handleButtonClick}
      onMouseMove={handleButtonMouseMove}
      onMouseLeave={handleMouseLeave}
      style={motionStyle}
      className={sharedClassName}
      {...buttonProps}
    >
      {children}
    </m.button>
  );
}
