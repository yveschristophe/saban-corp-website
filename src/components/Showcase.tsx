import { ArrowRight } from "lucide-react";
import { useDepthMotion } from "./useDepthMotion";

type DeviceKind = "laptop" | "phone" | "tablet";

function Device({ kind, image, alt, width, height }: {
  kind: DeviceKind; image: string; alt: string; width: number; height: number;
}) {
  return (
    <div className={`device device-${kind}`}>
      <div className="device-shell">
        <div className="device-camera" aria-hidden="true" />
        <div className="device-screen"><img src={image} alt={alt} width={width} height={height} loading="lazy" decoding="async" /></div>
      </div>
      {kind === "laptop" && <div className="device-base" aria-hidden="true"><i /></div>}
    </div>
  );
}

const demos = [
  {
    number: "01", kind: "laptop" as const, category: "L’EXPÉRIENCE DESKTOP",
    title: "Une présence à la hauteur de votre activité.",
    text: "Une hiérarchie claire, une identité forte et un accès direct aux informations essentielles. Explorez la version desktop de SABAN CORP.",
    cta: "Découvrir les solutions", href: "#solutions",
  },
  {
    number: "02", kind: "phone" as const, category: "LE PARCOURS MOBILE",
    title: "La même exigence. Sur chaque écran.",
    text: "Une navigation simple, des contenus lisibles et une prise de contact accessible. Cette preview montre notre site dans sa version mobile.",
    cta: "Parlons de votre projet", href: "#contact",
  },
  {
    number: "03", kind: "tablet" as const, category: "UNE EXPÉRIENCE COHÉRENTE",
    title: "Des interfaces pensées comme un ensemble.",
    text: "De la présentation des offres au premier échange, chaque détail participe à une expérience cohérente. Découvrez nos interfaces sur tablette et mobile.",
    cta: "Découvrir notre approche", href: "#approche",
  },
];

function DemoStage({ kind }: { kind: DeviceKind }) {
  const motion = useDepthMotion(7);
  return (
    <div className={`demo-stage demo-stage-${kind}`} {...motion}>
      <div className="demo-stage-grid" aria-hidden="true" />
      <div className="device-composition">
        {kind === "laptop" && <Device kind="laptop" image="/images/previews/saban-desktop.webp" alt="Capture réelle du hero SABAN CORP sur ordinateur." width={1440} height={900} />}
        {kind === "phone" && <Device kind="phone" image="/images/previews/saban-mobile.webp" alt="Capture réelle du site SABAN CORP sur mobile." width={390} height={844} />}
        {kind === "tablet" && <>
          <Device kind="tablet" image="/images/previews/saban-tablet.webp" alt="Capture réelle des offres SABAN CORP sur tablette." width={768} height={1024} />
          <Device kind="phone" image="/images/previews/saban-mobile.webp" alt="La même expérience SABAN CORP dans sa version mobile." width={390} height={844} />
        </>}
      </div>
      <span className="demo-stage-note">SABAN CORP / PREVIEW INTERNE</span>
    </div>
  );
}

export default function Showcase() {
  return (
    <div className="showcase-list">
      {demos.map((demo) => (
        <article className="showcase-row reveal" key={demo.number}>
          <DemoStage kind={demo.kind} />
          <div className="showcase-copy">
            <div className="showcase-category"><span>{demo.number}</span>{demo.category}</div>
            <h3>{demo.title}</h3><p>{demo.text}</p>
            <a href={demo.href} className="showcase-link">{demo.cta}<ArrowRight size={16} /></a>
          </div>
        </article>
      ))}
    </div>
  );
}
