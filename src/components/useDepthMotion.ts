import { useEffect, useRef, type PointerEvent } from "react";

/** Pointer motion stays outside React state and is disabled for touch/reduced motion. */
export function useDepthMotion(strength = 5) {
  const ref = useRef<HTMLDivElement>(null);
  const frame = useRef(0);
  const eligible = useRef(false);
  const point = useRef({ x: 0, y: 0 });

  function reset() {
    cancelAnimationFrame(frame.current);
    frame.current = 0;
    ["--tilt-x", "--tilt-y", "--shift-x", "--shift-y"].forEach((name) => ref.current?.style.removeProperty(name));
  }

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const update = () => {
      eligible.current = !reduced.matches && pointer.matches;
      if (!eligible.current) reset();
    };
    update();
    reduced.addEventListener("change", update);
    pointer.addEventListener("change", update);
    return () => {
      reduced.removeEventListener("change", update);
      pointer.removeEventListener("change", update);
      cancelAnimationFrame(frame.current);
    };
  }, []);

  function onPointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!eligible.current || event.pointerType !== "mouse") return;
    point.current = { x: event.clientX, y: event.clientY };
    if (frame.current) return;
    frame.current = requestAnimationFrame(() => {
      frame.current = 0;
      const node = ref.current;
      if (!node) return;
      const bounds = node.getBoundingClientRect();
      const x = Math.max(-.5, Math.min(.5, (point.current.x - bounds.left) / bounds.width - .5));
      const y = Math.max(-.5, Math.min(.5, (point.current.y - bounds.top) / bounds.height - .5));
      node.style.setProperty("--tilt-x", `${-y * strength}deg`);
      node.style.setProperty("--tilt-y", `${x * strength}deg`);
      node.style.setProperty("--shift-x", `${x * 12}px`);
      node.style.setProperty("--shift-y", `${y * 12}px`);
    });
  }

  return { ref, onPointerMove, onPointerLeave: reset };
}
