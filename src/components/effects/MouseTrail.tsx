"use client";

import { useEffect, useRef } from "react";

interface Trail {
  x: number;
  y: number;
  size: number;
  opacity: number;
  color: string;
  vx: number;
  vy: number;
}

export default function MouseTrail() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    const trails: Trail[] = [];
    const colors = [
      "rgba(6, 214, 160,",
      "rgba(56, 189, 248,",
      "rgba(168, 85, 247,",
    ];
    let mouseX = 0;
    let mouseY = 0;
    let isMoving = false;
    let moveTimeout: NodeJS.Timeout;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouse = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      isMoving = true;
      clearTimeout(moveTimeout);
      moveTimeout = setTimeout(() => { isMoving = false; }, 100);

      for (let i = 0; i < 2; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)];
        trails.push({
          x: mouseX,
          y: mouseY,
          size: Math.random() * 4 + 1,
          opacity: 0.8,
          color: color,
          vx: (Math.random() - 0.5) * 2,
          vy: (Math.random() - 0.5) * 2,
        });
      }

      if (trails.length > 60) {
        trails.splice(0, trails.length - 60);
      }
    };

    window.addEventListener("mousemove", handleMouse);

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = trails.length - 1; i >= 0; i--) {
        const t = trails[i];
        t.x += t.vx;
        t.y += t.vy;
        t.opacity -= 0.02;
        t.size *= 0.97;

        if (t.opacity <= 0 || t.size < 0.3) {
          trails.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        ctx.arc(t.x, t.y, t.size, 0, Math.PI * 2);
        ctx.fillStyle = t.color + t.opacity + ")";
        ctx.fill();
      }

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouse);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-40 pointer-events-none"
    />
  );
}