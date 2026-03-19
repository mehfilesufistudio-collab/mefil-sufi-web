
import React, { useEffect, useRef } from 'react';

const QawwaliSinger3D = ({ className }) => {
  const imgRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const img = imgRef.current;
    const container = containerRef.current;
    if (!img || !container) return;

    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };
    let velocity = { x: 0, y: 0 };
    let rotation = { x: 0, y: 0 };
    let isHovered = false;
    let animationFrameId;

    const handlePointerDown = (e) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
      // Reset velocity when catching the image
      velocity = { x: 0, y: 0 };
    };

    const handlePointerMove = (e) => {
      if (isDragging) {
        const deltaMove = {
          x: e.clientX - previousMousePosition.x,
          y: e.clientY - previousMousePosition.y
        };
        
        // Adjust sensitivity for 2D DOM rotation
        velocity.x = deltaMove.x * 0.4;
        velocity.y = deltaMove.y * 0.4;
        
        previousMousePosition = { x: e.clientX, y: e.clientY };
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    const handlePointerEnter = () => { isHovered = true; };
    const handlePointerLeave = () => {
      isHovered = false;
      isDragging = false;
    };

    // Attach events
    container.addEventListener('pointerdown', handlePointerDown);
    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
    container.addEventListener('pointerenter', handlePointerEnter);
    container.addEventListener('pointerleave', handlePointerLeave);

    // Animation Loop
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      if (!isDragging) {
        // Apply damping (inertia/momentum)
        velocity.x *= 0.92;
        velocity.y *= 0.92;

        // Auto-rotation when idle and not hovered
        if (!isHovered && Math.abs(velocity.x) < 0.05 && Math.abs(velocity.y) < 0.05) {
          velocity.x = 0.15; // Gentle continuous spinning
        }
      }

      // Apply velocity to rotation
      rotation.y += velocity.x;
      rotation.x -= velocity.y; // Subtract to match natural drag direction

      // Clamp X rotation to prevent flipping upside down
      rotation.x = Math.max(-25, Math.min(25, rotation.x));

      // Apply transform
      img.style.transform = `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`;
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener('pointerdown', handlePointerDown);
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
      container.removeEventListener('pointerenter', handlePointerEnter);
      container.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative cursor-grab active:cursor-grabbing touch-none flex items-center justify-center ${className}`}
      style={{ 
        touchAction: 'none',
        perspective: '1000px'
      }}
      aria-label="Interactive view of Sufi qawwali singer. Drag to rotate."
      role="img"
    >
      <img
        ref={imgRef}
        src="https://horizons-cdn.hostinger.com/5dbc3b26-e6fe-4c9c-b160-1d09298323f8/60d696b55363819fb81c7e8ef8a5844c.png"
        alt="Professional Sufi qawwali singer in traditional attire"
        className="w-full h-full object-contain drop-shadow-2xl will-change-transform"
        style={{ 
          transformStyle: 'preserve-3d',
          filter: 'drop-shadow(0 20px 30px rgba(0,0,0,0.5))'
        }}
        draggable="false"
      />
    </div>
  );
};

export default QawwaliSinger3D;
