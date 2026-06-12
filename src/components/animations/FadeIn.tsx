import type { ReactNode } from 'react';
import { m, useReducedMotion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  duration?: number;
}

export function FadeIn({ children, delay = 0, className, direction = 'up', duration = 0.9 }: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { x: 40, y: 0 },
    right: { x: -40, y: 0 },
    none: { x: 0, y: 0 }
  };

  if (shouldReduceMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  return (
    <m.div
      initial={{ 
        opacity: 0, 
        ...directions[direction]
      }}
      whileInView={{ 
        opacity: 1, 
        x: 0, 
        y: 0 
      }}
      viewport={{ once: true, margin: "0px 0px -50px 0px" }}
      transition={{ 
        duration: duration,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1] // equivalent to var(--transition-smooth)
      }}
      className={cn(className)}
    >
      {children}
    </m.div>
  );
}
