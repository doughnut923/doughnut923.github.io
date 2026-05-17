'use client';

import { useState, useEffect } from "react";
import useMousePosition from "./components/useMousePosition";
import { motion } from "framer-motion";
import Landing from "./components/landing";
import CV from "./components/cv";
import Works from "./works";
import CFA from "./cfa";

export default function Page() {

  const { x, y } = useMousePosition();
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = target.closest("a, button, [data-cursor='hover'], input, textarea, select");
      setHovering(!!isInteractive);
    };

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        className="cursor-custom dark:invert md:block hidden fixed z-50"
        animate={{
          left: `${x}px`,
          top: `${y}px`,
          width: hovering ? 15 : 5,
          height: hovering ? 15 : 5,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.3 }}
      ></motion.div>

      <Landing/>
      <CV/>
      <Works/>
      <CFA/>
      
    </>

  );
}
