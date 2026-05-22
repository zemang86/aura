"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type LiquidGlassMagnifierProps = {
  diameter?: number;
  borderWidth?: number;
  borderColor?: string;
  shadow?: boolean;
  glassTint?: { r: number; g: number; b: number };
  glassOpacity?: number;
  className?: string;
  style?: CSSProperties;
};

export function LiquidGlassMagnifier({
  diameter = 200,
  borderWidth = 2,
  borderColor = "#FFFFFF",
  shadow = true,
  glassTint = { r: 255, g: 255, b: 255 },
  glassOpacity = 0.25,
  className,
  style,
}: LiquidGlassMagnifierProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const handleMove = (event: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      setMousePos({
        x: Math.max(0, Math.min(1, x)),
        y: Math.max(0, Math.min(1, y)),
      });
    };
    node.addEventListener("mousemove", handleMove);
    return () => node.removeEventListener("mousemove", handleMove);
  }, []);

  const glassStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    width: diameter,
    height: diameter,
    borderRadius: "50%",
    overflow: "hidden",
    pointerEvents: "none",
    background: `rgba(${glassTint.r},${glassTint.g},${glassTint.b},${glassOpacity})`,
    boxShadow: shadow ? "0 2px 8px 0 rgba(0,0,0,0.07)" : undefined,
    border: `${borderWidth}px solid ${borderColor}`,
    zIndex: 1,
  };

  const magnifyStyle: CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    borderRadius: "50%",
    pointerEvents: "none",
    zIndex: 2,
    overflow: "hidden",
    backdropFilter: "brightness(1.2) saturate(1.5) contrast(1.1)",
    WebkitBackdropFilter: "brightness(1.2) saturate(1.5) contrast(1.1)",
  };

  return (
    <div
      ref={ref}
      className={className}
      style={{
        ...style,
        position: "relative",
        width: diameter,
        height: diameter,
        borderRadius: "50%",
        overflow: "visible",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        pointerEvents: "auto",
      }}
      aria-label="Magnifier glass"
      role="img"
    >
      <div style={magnifyStyle}>
        <div
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            position: "absolute",
            inset: 0,
            pointerEvents: "none",
            transform: "scale(1.5)",
            transformOrigin: "center center",
          }}
        />
      </div>
      <div style={glassStyle} />
    </div>
  );
}
