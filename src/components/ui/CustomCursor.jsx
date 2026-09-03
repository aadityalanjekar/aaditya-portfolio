import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [trailPosition, setTrailPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only show on desktop
    if (window.innerWidth < 1024) return;

    let rafId;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const animateTrail = () => {
      setTrailPosition((prev) => ({
        x: prev.x + (targetX - prev.x) * 0.12,
        y: prev.y + (targetY - prev.y) * 0.12,
      }));
      rafId = requestAnimationFrame(animateTrail);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleHoverStart = (e) => {
      if (e.target.closest('a, button, [data-cursor="hover"]')) {
        setIsHovering(true);
      }
    };

    const handleHoverEnd = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseenter', handleMouseEnter);
    window.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseover', handleHoverStart);
    document.addEventListener('mouseout', handleHoverEnd);
    rafId = requestAnimationFrame(animateTrail);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseenter', handleMouseEnter);
      window.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseover', handleHoverStart);
      document.removeEventListener('mouseout', handleHoverEnd);
      cancelAnimationFrame(rafId);
    };
  }, []);

  if (typeof window !== 'undefined' && window.innerWidth < 1024) return null;

  return (
    <>
      {/* Main dot cursor */}
      <motion.div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          width: isHovering ? 8 : 6,
          height: isHovering ? 8 : 6,
        }}
        transition={{ duration: 0.1 }}
      >
        <div className="w-full h-full rounded-full bg-white" />
      </motion.div>

      {/* Trail ring */}
      <motion.div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: trailPosition.x,
          top: trailPosition.y,
          transform: 'translate(-50%, -50%)',
        }}
        animate={{
          opacity: isVisible ? 1 : 0,
          width: isHovering ? 44 : 32,
          height: isHovering ? 44 : 32,
        }}
        transition={{ duration: 0.2 }}
      >
        <div
          className="w-full h-full rounded-full"
          style={{
            border: isHovering
              ? '1.5px solid rgba(34, 211, 238, 0.7)'
              : '1px solid rgba(124, 58, 237, 0.5)',
            transition: 'border 0.2s ease',
          }}
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
