import { useEffect } from "react";
import { useDepthMotion } from "./useDepthMotion";

export default function ArchitecturalScene() {
  const motion = useDepthMotion(10);

  useEffect(() => {
    const node = motion.ref.current;
    if (!node) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const desktop = window.matchMedia("(min-width: 801px)");
    let visible = false;
    let frame = 0;
    let listening = false;
    const update = () => {
      frame = 0;
      const section = node.closest("section");
      if (!section) return;
      const bounds = section.getBoundingClientRect();
      node.style.setProperty("--scene-progress", String(Math.min(1, Math.max(0, -bounds.top / bounds.height))));
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    const sync = () => {
      const active = visible && !reduced.matches && desktop.matches;
      if (active && !listening) {
        window.addEventListener("scroll", onScroll, { passive: true });
        listening = true;
        update();
      } else if (!active) {
        window.removeEventListener("scroll", onScroll);
        listening = false;
        cancelAnimationFrame(frame);
        frame = 0;
        node.style.removeProperty("--scene-progress");
      }
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      sync();
    });
    observer.observe(node);
    reduced.addEventListener("change", sync);
    desktop.addEventListener("change", sync);
    return () => {
      observer.disconnect();
      reduced.removeEventListener("change", sync);
      desktop.removeEventListener("change", sync);
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [motion.ref]);

  return (
    <div className="architecture-scene" {...motion} aria-hidden="true">
      <div className="architecture-grid" />
      <div className="architecture-floor" />
      <div className="architecture-object">
        <div className="portal portal-back"><i /></div>
        <div className="portal portal-middle"><i /></div>
        <div className="portal portal-front"><i /></div>
        <div className="architecture-axis" />
      </div>
      <div className="architecture-caption"><span>ÉTUDE DE FORME / 01</span><span>ARCHITECTURE DIGITALE</span></div>
    </div>
  );
}
