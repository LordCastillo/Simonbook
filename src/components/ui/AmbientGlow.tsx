import { useEffect, useState } from 'react';

export function AmbientGlow() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      <div 
        className="absolute rounded-full blur-[180px] transition-transform duration-[1500ms] ease-out opacity-[0.12] w-[800px] h-[800px] bg-orange-glow -top-[300px] -left-[200px]"
        style={{ transform: `translate(${(mousePos.x - 0.5) * 40}px, ${(mousePos.y - 0.5) * 40}px)` }}
      />
      <div 
        className="absolute rounded-full blur-[180px] transition-transform duration-[1500ms] ease-out opacity-[0.08] w-[600px] h-[600px] bg-gold -bottom-[200px] -right-[200px]"
        style={{ transform: `translate(${(0.5 - mousePos.x) * 30}px, ${(0.5 - mousePos.y) * 30}px)` }}
      />
      <div 
        className="absolute rounded-full blur-[180px] transition-transform duration-[1500ms] ease-out opacity-[0.06] w-[500px] h-[500px] bg-orange-warm top-[40%] left-[50%] -translate-x-1/2 -translate-y-1/2"
      />
    </div>
  );
}
