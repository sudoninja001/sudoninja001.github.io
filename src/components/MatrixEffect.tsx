import React, { useEffect, useRef } from 'react';

const MatrixEffect: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const fontSize = 14;
    const columns = Math.floor(canvas.width / fontSize);
    
    // Using characters that look like code or binary
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲンガギグゲゴザジズゼゾダヂヅデド';
    
    // Set initial position for each column to off-screen randomly
    const drops: number[] = Array(columns).fill(0).map(() => Math.floor(Math.random() * -canvas.height));

    // Draw animation
    const draw = () => {
      // Add some transparency to gradually fade out the characters
      ctx.fillStyle = 'rgba(0, 10, 20, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Green-ish text color for matrix effect
      ctx.fillStyle = '#0F9';
      ctx.font = `${fontSize}px monospace`;
      
      // Loop over each column
      for (let i = 0; i < columns; i++) {
        // Get a random character
        const char = chars[Math.floor(Math.random() * chars.length)];
        
        // x coordinate is determined by column index and font size
        const x = i * fontSize;
        // y coordinate is the current position of the drop
        const y = drops[i] * fontSize;
        
        // Draw the character
        ctx.fillText(char, x, y);
        
        // Send the drop to the top randomly after it has crossed the screen
        // Making it a bit higher for canvas overflow and to prevent visual repetition
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.99) {
          drops[i] = 0;
        }
        
        // Move the drop down
        drops[i]++;
      }
    };

    const intervalId = setInterval(draw, 50);

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full"></canvas>;
};

export default MatrixEffect;