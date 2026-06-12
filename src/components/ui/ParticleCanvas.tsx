import { useEffect, useRef } from "react";

class Particle {
  x: number = 0;
  y: number = 0;
  size: number = 0;
  speedY: number = 0;
  speedX: number = 0;
  opacity: number = 0;
  golden: boolean = false;
  canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.reset();
    this.y = Math.random() * canvas.height;
  }

  reset() {
    this.x = Math.random() * this.canvas.width;
    this.y = -20;
    this.size = Math.random() * 2 + 0.5;
    this.speedY = Math.random() * 0.4 + 0.1;
    this.speedX = (Math.random() - 0.5) * 0.3;
    this.opacity = Math.random() * 0.5 + 0.1;
    this.golden = Math.random() > 0.6;
  }

  update() {
    this.y += this.speedY;
    this.x += this.speedX;
    if (this.y > this.canvas.height + 20) {
      this.reset();
      this.y = -20;
    }
    if (this.x < -20) this.x = this.canvas.width + 20;
    if (this.x > this.canvas.width + 20) this.x = -20;
  }

  draw(ctx: CanvasRenderingContext2D) {
    ctx.beginPath();
    const color = this.golden
      ? `rgba(212,160,23,${this.opacity})`
      : `rgba(255,140,42,${this.opacity * 0.6})`;
    ctx.fillStyle = color;
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
    if (this.golden && this.size > 1.2) {
      ctx.beginPath();
      ctx.fillStyle = `rgba(232,197,71,${this.opacity * 0.4})`;
      ctx.arc(this.x, this.y, this.size * 2.5, 0, Math.PI * 2);
      ctx.fill();
    }
  }
}

export function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    );

    if (prefersReducedMotion.matches) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId = 0;
    let resizeFrameId = 0;
    let lastFrameTime = 0;
    let isRunning = true;
    const particles: Particle[] = [];

    const getParticleCount = () => {
      if (window.innerWidth < 768) return 12;
      if (window.innerWidth < 1280) return 28;
      return 42;
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const scheduleResize = () => {
      cancelAnimationFrame(resizeFrameId);
      resizeFrameId = requestAnimationFrame(resizeCanvas);
    };

    resizeCanvas();
    window.addEventListener("resize", scheduleResize);

    for (let i = 0; i < getParticleCount(); i++) {
      particles.push(new Particle(canvas));
    }

    const drawFrame = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.update();
        p.draw(ctx);
      });
    };

    const animate = (time: number) => {
      if (!isRunning) return;

      if (time - lastFrameTime > 33) {
        drawFrame();
        lastFrameTime = time;
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    const start = () => {
      if (isRunning) return;
      isRunning = true;
      animationFrameId = requestAnimationFrame(animate);
    };

    const stop = () => {
      isRunning = false;
      cancelAnimationFrame(animationFrameId);
    };

    const handleVisibilityChange = () => {
      if (document.hidden) {
        stop();
      } else {
        start();
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stop();
      cancelAnimationFrame(resizeFrameId);
      window.removeEventListener("resize", scheduleResize);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-[1] w-full h-full"
    />
  );
}
