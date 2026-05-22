"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

type DecimalSeparator = "comma" | "period" | "none";

type EasyCounterProps = {
  startNumber?: number;
  endNumber?: number;
  speed?: number;
  prefix?: string;
  suffix?: string;
  loop?: boolean;
  decimalSeparator?: DecimalSeparator;
  fontSize?: number;
  fontFamily?: string;
  fontWeight?: number;
  fontColor?: string;
  className?: string;
};

function formatCount(value: number, sep: DecimalSeparator) {
  if (sep === "comma") return value.toLocaleString("en-US");
  if (sep === "period")
    return value.toLocaleString("en-US").replace(/,/g, ".");
  return value.toFixed(0);
}

export function EasyCounter({
  startNumber = 0,
  endNumber = 10,
  speed = 100,
  prefix = "",
  suffix = "",
  loop = false,
  decimalSeparator = "comma",
  fontSize = 16,
  fontFamily,
  fontWeight = 400,
  fontColor = "#707070",
  className,
}: EasyCounterProps) {
  const [count, setCount] = useState(startNumber);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting);
    });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible || startNumber === endNumber) return;
    const id = setInterval(() => {
      setCount((prev) => {
        if (prev < endNumber) return prev + 1;
        if (loop) return startNumber;
        return prev;
      });
    }, speed);
    return () => clearInterval(id);
  }, [isVisible, speed, startNumber, endNumber, loop]);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{
        display: "flex",
        gap: `${fontSize / 2}px`,
        fontSize: `${fontSize}px`,
        fontFamily,
        fontWeight,
        color: fontColor,
      }}
    >
      {prefix}
      {formatCount(count, decimalSeparator)}
      {suffix}
    </motion.div>
  );
}
