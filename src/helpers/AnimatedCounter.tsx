import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ from = 0, to, duration = 2 }) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    const start = performance.now();
    const step = (timestamp: number) => {
      const elapsed = (timestamp - start) / (duration * 1000);
      if (elapsed < 1) {
        setCount(Math.round(from + (to - from) * elapsed));
        requestAnimationFrame(step);
      } else {
        setCount(to);
      }
    };
    requestAnimationFrame(step);
  }, [from, to, duration]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {count}
    </motion.span>
  );
};


export default AnimatedCounter;