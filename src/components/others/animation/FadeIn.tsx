'use client';

import { motion, useAnimation } from "framer-motion";
import { useInView } from "framer-motion";
import { useEffect, useRef, ReactNode } from "react";

interface FadeInOnViewProps {
  children: ReactNode;
  duration?: number;
  delay?: number;
}

export default function FadeInOnView({
  children,
  duration = 1.5,
  delay = 0
}: FadeInOnViewProps) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0, transition: { duration, delay } });
    }
  }, [inView, controls, duration, delay]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};