"use client";

import { useEffect, useRef } from "react";

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;

    interface Star {
      x: number;
      y: number;
      size: number;
      opacity: number;
      twinkleSpeed: number;
      twinkleOffset: number;
    }

    interface ShootingStar {
      x: number;
      y: number;
      length: number;
      speed: number;
      opacity: number;
      angle: number;
      active: boolean;
    }

    const stars: Star[] = [];
    const shootingStars: ShootingStar[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < 150; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 0.3,
        opacity: Math.random() * 0.6 + 0.1,
        twinkleSpeed: Math.random() * 0.02 + 0.01,
        twinkleOffset: Math.random() * Math.PI * 2,
      });
    }

    const createShootingStar = (): ShootingStar => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height * 0.4,
      length: Math.random() * 80 + 40,
      speed: Math.random() * 8 + 4,
      opacity: 1,
      angle: Math.PI / 4 + (Math.random() - 0.5) * 0.3,
      active: true,
    });

    let time = 0;

    const animate = () => {
      time += 0.016;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const gradient = ctx.createRadialGradient(
        canvas.width * 0.2, canvas.height * 0.3, 0,
        canvas.width * 0.2, canvas.height * 0.3, canvas.width * 0.6
      );
      gradient.addColorStop(0, "rgba(6, 214, 160, 0.03)");
      gradient.addColorStop(0.5, "rgba(56, 189, 248, 0.02)");
      gradient.addColorStop(1, "transparent");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const gradient2 = ctx.createRadialGradient(
        canvas.width * 0.8, canvas.height * 0.5, 0,
        canvas.width * 0.8, canvas.height * 0.5, canvas.width * 0.5
      );
      gradient2.addColorStop(0, "rgba(168, 85, 247, 0.04)");
      gradient2.addColorStop(1, "transparent");
      ctx.fillStyle = gradient2;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      stars.forEach((star) => {
        const twinkle = Math.sin(time * star.twinkleSpeed * 60 + star.twinkleOffset) * 0.5 + 0.5;
        const currentOpacity = star.opacity * (0.4 + twinkle * 0.6);

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, Math.PI * 2);

        const colors = ["rgba(6, 214, 160,", "rgba(56, 189, 248,", "rgba(168, 85, 247,", "rgba(255, 255, 255,"];
        const color = star.size > 1.5 ? colors[Math.floor(star.twinkleOffset) % 3] : colors[3];
        ctx.fillStyle = color + currentOpacity + ")";
        ctx.fill();

        if (star.size > 1.8) {
          ctx.beginPath();
          ctx.arc(star.x, star.y, star.size * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = color + (currentOpacity * 0.08) + ")";
          ctx.fill();
        }
      });

      if (Math.random() < 0.003) {
        shootingStars.push(createShootingStar());
      }

      shootingStars.forEach((ss) => {
        if (!ss.active) return;
        ss.x += Math.cos(ss.angle) * ss.speed;
        ss.y += Math.sin(ss.angle) * ss.speed;
        ss.opacity -= 0.015;

        if (ss.opacity <= 0) {
          ss.active = false;
          return;
        }

        const tailX = ss.x - Math.cos(ss.angle) * ss.length;
        const tailY = ss.y - Math.sin(ss.angle) * ss.length;

        const grad = ctx.createLinearGradient(tailX, tailY, ss.x, ss.y);
        grad.addColorStop(0, "rgba(6, 214, 160, 0)");
        grad.addColorStop(1, "rgba(6, 214, 160, " + ss.opacity + ")");

        ctx.beginPath();
        ctx.moveTo(tailX, tailY);
        ctx.lineTo(ss.x, ss.y);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />;
}