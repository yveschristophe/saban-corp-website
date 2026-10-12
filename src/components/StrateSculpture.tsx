import { useEffect } from "react";
import { useDepthMotion } from "./useDepthMotion";

// Independent architectural geometry, not the official emblem's vector paths.
const planes = [
  { name: "upper", path: "M26 96 89 30H256L304 78V144L250 108V88H112L80 118V168L26 146Z" },
  { name: "bridge", path: "M56 172 266 238V284L56 218Z" },
  { name: "lower", path: "M14 278 72 310V332H216L246 304V254L302 276V334L238 390H82L14 336Z" },
];

function StratePlane({ name, path }: { name: string; path: string }) {
  return (
    <div className={`strate-tier strate-${name}`}>
      <svg className="strate-volume" viewBox="0 0 340 430" focusable="false">
        <defs>
          <linearGradient id={`strate-${name}-satin`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#535359" />
            <stop offset=".45" stopColor="#36363c" />
            <stop offset="1" stopColor="#25252b" />
          </linearGradient>
        </defs>
        {/* Static bevels share one SVG surface; only the three tiers tilt in CSS. */}
        <path d={path} transform="translate(14 9)" fill="#141418" />
        <path d={path} transform="translate(7 4.5)" fill="#212126" />
        <path className="strate-surface" d={path} fill={`url(#strate-${name}-satin)`} />
      </svg>
    </div>
  );
}

export default function StrateSculpture() {
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
    <div className="architecture-scene strate-scene" {...motion} aria-hidden="true">
      <div className="architecture-grid" />
      <div className="architecture-floor" />
      <div className="strate-assembly">
        {planes.map((plane) => <StratePlane {...plane} key={plane.name} />)}
      </div>
      <div className="architecture-caption"><span>STRATE / ÉTUDE 02</span><span>STRUCTURE & ÉQUILIBRE</span></div>
    </div>
  );
}
