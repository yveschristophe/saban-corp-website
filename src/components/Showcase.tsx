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
    number: "02", kind: "phone" as const, category: "LE CONTACT MOBILE",
    title: "Un premier échange, simplement.",
    text: "Un formulaire lisible, des champs utiles et une demande facile à préparer. Cette démonstration présente le contact SABAN CORP sur mobile.",
    cta: "Parlons de votre projet", href: "#contact",
  },
  {
    number: "03", kind: "tablet" as const, category: "LES OFFRES & LA MÉTHODE",
    title: "Des interfaces pensées comme un ensemble.",
    text: "Des offres compréhensibles et une démarche expliquée étape par étape. Ces deux vues réelles de SABAN CORP présentent les solutions sur tablette et la méthode sur mobile.",
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
        {kind === "phone" && <Device kind="phone" image="/images/previews/saban-mobile.webp" alt="Capture réelle du formulaire de contact SABAN CORP sur mobile." width={390} height={844} />}
        {kind === "tablet" && <>
          <Device kind="tablet" image="/images/previews/saban-tablet.webp" alt="Capture réelle des offres SABAN CORP sur tablette." width={768} height={1024} />
          <Device kind="phone" image="/images/previews/saban-method-mobile.webp" alt="Capture réelle de la méthode SABAN CORP sur mobile." width={390} height={844} />
        </>}
      </div>
      <span className="demo-stage-note">SABAN CORP / DÉMONSTRATION INTERNE</span>
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
