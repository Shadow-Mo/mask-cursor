"use client"
import { useState } from "react";
import { useMousePosition } from "./utils/useMousePosition";
import { motion } from 'framer-motion';

export default function Home() {

  const [isHovered, setIsHovered] = useState(false);
  const {x, y} = useMousePosition();
  const size = isHovered ? 400 : 40;

  return (
    <main>
      <motion.div 
        className="mask flex justify-center items-center h-screen px-56 absolute"
        animate={{
          WebkitMaskPosition: `${x - (size/2)}px ${y - (size/2)}px`,
          WebkitMaskSize: `${size}px`
        }}
        transition={{ type: 'tween', ease: 'backOut', duration: 0.5}}
      >
        <p onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className="text-6xl">
          A visual developer - with skills that haven't been replaced by A.I (yet) - making good shit only if the paycheck is equally good.
        </p>
      </motion.div>
      <div className="flex justify-center items-center h-screen px-56">
        <p className="text-6xl">I'm a <span className="text-[#ec4e39]">selectively skilled</span> fullstack developer with strong focus on producing high quality & impactful digital experience.</p>
      </div>
    </main>
  );
}
