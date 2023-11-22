import { useState, useEffect } from 'react';
// import { MdOutlineArrowOutward } from "react-icons/md";
const MouseTrailer = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      className="mouse-trailer"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      
    </div>
  );
};

export default MouseTrailer;
