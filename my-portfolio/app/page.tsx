'use client';

import Image from "next/image";
import { socialLinks } from "./config";
import useMousePosition from "./components/useMousePosition";
import { motion } from "framer-motion";
import Landing from "./components/landing";
import CV from "./components/cv";
import Works from "./works";
import CFA from "./cfa";

export default function Page() {

  const { x, y } = useMousePosition();


  return (
    <>

      <motion.div
        className="cursor-custom dark:invert md:block hidden fixed"
        animate={{
          left: `${x}px`,
          top: `${y}px`,
        }}
        transition={{ type: "tween", ease: "backOut" }}
      ></motion.div>

      <Landing/>
      <CV/>
      <Works/>
      <CFA/>
      
    </>

  );
}
