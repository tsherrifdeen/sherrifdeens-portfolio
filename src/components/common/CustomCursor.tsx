"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type CursorVariant = "default" | "hover" | "click";

export default function CustomCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const trailX = useMotionValue(-100);
  const trailY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 300 };
  const trailSpringConfig = { damping: 35, stiffness: 150 };

  const springX = useSpring(cursorX, springConfig);
  const springY = useSpring(cursorY, springConfig);
  const trailSpringX = useSpring(trailX, trailSpringConfig);
  const trailSpringY = useSpring(trailY, trailSpringConfig);

  const [variant, setVariant] = useState<CursorVariant>("default");
  const [particles, setParticles] = useState<
    { id: number; x: number; y: number }[]
  >([]);
  const particleId = useRef(0);
  const lastPos = useRef({ x: -100, y: -100 });
  const frameRef = useRef<number>(0);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      trailX.set(e.clientX);
      trailY.set(e.clientY);

      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const speed = Math.sqrt(dx * dx + dy * dy);

      if (speed > 8) {
        lastPos.current = { x: e.clientX, y: e.clientY };
        const id = particleId.current++;
        setParticles((prev) => [
          ...prev.slice(-12),
          { id, x: e.clientX, y: e.clientY },
        ]);
        setTimeout(
          () => setParticles((prev) => prev.filter((p) => p.id !== id)),
          600,
        );
      }
    };

    const handleMouseDown = () => setVariant("click");
    const handleMouseUp = () => setVariant("default");

    const handleHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest(
          "a, button, [role='button'], input, textarea, select, label",
        )
      ) {
        setVariant("hover");
      }
    };

    const handleHoverEnd = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest(
          "a, button, [role='button'], input, textarea, select, label",
        )
      ) {
        setVariant("default");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    window.addEventListener("mouseover", handleHoverStart);
    window.addEventListener("mouseout", handleHoverEnd);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleHoverStart);
      window.removeEventListener("mouseout", handleHoverEnd);
      cancelAnimationFrame(frameRef.current);
    };
  }, [cursorX, cursorY, trailX, trailY]);

  const cursorVariants = {
    default: { scale: 1, opacity: 1 },
    hover: { scale: 1.6, opacity: 0.9 },
    click: { scale: 0.8, opacity: 1 },
  };

  const ringVariants = {
    default: { scale: 1, opacity: 0.75 },
    hover: { scale: 2, opacity: 0.6 },
    click: { scale: 0.75, opacity: 1 },
  };

  return (
    <>
      <style>{`* { cursor: context-menu !important; }`}</style>

      {/* Dot */}
      {/* <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          width: 8,
          height: 8,
          borderRadius: "50%",
          backgroundColor: "#98faec",
          pointerEvents: "none",
          zIndex: 99999,
          mixBlendMode: "difference",
        }}
        variants={cursorVariants}
        animate={variant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      /> */}

      {/* Ring */}
      <motion.div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          x: trailSpringX,
          y: trailSpringY,
          translateX: "-50%",
          translateY: "-50%",
          width: 24,
          height: 24,
          borderRadius: "50%",
          border: "2px solid #12f7d6",
          pointerEvents: "none",
          zIndex: 99998,
        }}
        variants={ringVariants}
        animate={variant}
        transition={{ type: "spring", stiffness: 200, damping: 20 }}
      />

      {/* Particles */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ opacity: 0.8, scale: 1, x: p.x, y: p.y }}
          animate={{ opacity: 0, scale: 0, y: p.y - 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            translateX: "-50%",
            translateY: "-50%",
            width: 5,
            height: 5,
            borderRadius: "50%",
            backgroundColor: Math.random() > 0.5 ? "#98faec" : "#12f7d6",
            pointerEvents: "none",
            zIndex: 99997,
          }}
        />
      ))}
    </>
  );
}
