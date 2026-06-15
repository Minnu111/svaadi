import React, { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  z: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
  opacityDelta: number;
}

export function Hero3D() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let W = canvas.offsetWidth;
    let H = canvas.offsetHeight;
    canvas.width = W;
    canvas.height = H;

    const GOLD = { r: 201, g: 168, b: 76 };
    const CREAM = { r: 255, g: 248, b: 239 };
    const PARTICLE_COUNT = 180;

    const mouse = { x: W / 2, y: H / 2 };

    const mkParticle = (): Particle => ({
      x: Math.random() * W,
      y: Math.random() * H,
      z: Math.random(),
      vx: (Math.random() - 0.5) * 0.3,
      vy: -(0.25 + Math.random() * 0.45),
      size: 0.8 + Math.random() * 2.2,
      opacity: 0.15 + Math.random() * 0.55,
      opacityDelta: (Math.random() - 0.5) * 0.005,
    });

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, mkParticle);

    const onMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };
    window.addEventListener("mousemove", onMouseMove);

    const onResize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    window.addEventListener("resize", onResize);

    let animId: number;

    // Torus ring drawing (CSS 3D-look via 2D ellipse arcs)
    let torusAngle = 0;

    const drawTorus = () => {
      ctx.save();
      const cx = W / 2;
      const cy = H / 2;
      const rx = Math.min(W, H) * 0.28;
      const ry = rx * 0.38;
      ctx.strokeStyle = `rgba(201, 168, 76, 0.09)`;
      ctx.lineWidth = 0.7;

      // outer ellipse
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, torusAngle * 0.3, 0, Math.PI * 2);
      ctx.stroke();

      // inner rotated ellipse (gives torus illusion)
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx * 0.7, ry * 0.7, -torusAngle * 0.2, 0, Math.PI * 2);
      ctx.stroke();

      // dashed arc for depth
      ctx.setLineDash([4, 8]);
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx * 0.5, ry * 1.5, torusAngle * 0.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.restore();
    };

    const animate = () => {
      animId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, W, H);

      torusAngle += 0.004;

      drawTorus();

      const mx = (mouse.x / W - 0.5) * 0.04;
      const my = (mouse.y / H - 0.5) * 0.04;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Depth-based color blend: closer (z~1) = gold, farther (z~0) = cream
        const c = {
          r: Math.round(CREAM.r + (GOLD.r - CREAM.r) * p.z),
          g: Math.round(CREAM.g + (GOLD.g - CREAM.g) * p.z),
          b: Math.round(CREAM.b + (GOLD.b - CREAM.b) * p.z),
        };

        // Glow
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3.5);
        grd.addColorStop(0, `rgba(${c.r},${c.g},${c.b},${p.opacity})`);
        grd.addColorStop(1, `rgba(${c.r},${c.g},${c.b},0)`);

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${c.r},${c.g},${c.b},${Math.min(p.opacity * 1.6, 1)})`;
        ctx.fill();

        // Move
        p.x += p.vx + mx * p.z * 8;
        p.y += p.vy + my * p.z * 8;
        p.opacity += p.opacityDelta;

        if (p.opacity < 0.05 || p.opacity > 0.75) p.opacityDelta *= -1;

        // Respawn at bottom
        if (p.y < -10) {
          p.y = H + 10;
          p.x = Math.random() * W;
        }
        if (p.x < -20 || p.x > W + 20) {
          p.x = Math.random() * W;
        }
      }
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
}
