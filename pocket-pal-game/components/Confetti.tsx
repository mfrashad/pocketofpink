import React, { useEffect, useRef } from 'react';

const Confetti: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiCount = 200;
    const pieces: {
        x: number; y: number; w: number; h: number;
        color: string; angle: number; speed: number;
        rotate: number; rotateSpeed: number;
    }[] = [];

    const colors = ["#F7A6C7", "#CBB6E0", "#A7E3D8", "#FBE29F", "#FF6B6B"];

    for (let i = 0; i < confettiCount; i++) {
      pieces.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height - canvas.height,
        w: Math.random() * 8 + 5,
        h: Math.random() * 8 + 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        angle: Math.random() * Math.PI * 2,
        speed: Math.random() * 3 + 2,
        rotate: Math.random() * Math.PI * 2,
        rotateSpeed: Math.random() * 0.2 - 0.1
      });
    }

    let animationFrameId: number;
    const startTime = Date.now();

    const draw = () => {
      if(!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      pieces.forEach(p => {
        p.y += p.speed;
        p.x += Math.sin(p.angle);
        p.rotate += p.rotateSpeed;

        ctx.save();
        ctx.fillStyle = p.color;
        ctx.translate(p.x + p.w / 2, p.y + p.h / 2);
        ctx.rotate(p.rotate);
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();

        if (p.y > canvas.height) {
          p.x = Math.random() * canvas.width;
          p.y = -20;
        }
      });

      if (Date.now() - startTime < 2500) { // Run for 2.5 seconds
        animationFrameId = requestAnimationFrame(draw);
      } else {
        onComplete();
      }
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [onComplete]);

  return <canvas ref={canvasRef} style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', pointerEvents: 'none', zIndex: 9999 }} />;
};

export default Confetti;