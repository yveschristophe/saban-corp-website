import { useEffect, useRef, useState } from "react";
import LegalPage, { type LegalPageKind } from "./LegalPages";
import {
  ArrowDown,
  ArrowRight,
  Braces,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Compass,
  Layers3,
  Menu,
  MonitorSmartphone,
  Search,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

const navItems = [
  ["Accueil", "#accueil"],
  ["Solutions", "#solutions"],
  ["Cas d'usage", "#cas-usage"],
  ["Notre approche", "#approche"],
  ["À propos", "#a-propos"],
  ["Contact", "#contact"],
];

const legalPageByPath: Record<string, LegalPageKind> = {
  "/mentions-legales": "mentions",
  "/mentions-legales.html": "mentions",
  "/politique-de-confidentialite": "confidentialite",
  "/politique-de-confidentialite.html": "confidentialite",
};

const solutions = [
  {
    name: "SABAN START",
    price: "490 € HT",
    intro: "Pour présenter votre activité avec un site professionnel et permettre à vos futurs clients de vous contacter.",
    features: [
      "Site vitrine one-page",
      "Design responsive",
      "Présentation des prestations",
      "Formulaire de contact",
      "Fondamentaux SEO",
      "Mise en ligne",
    ],
    cta: "Découvrir cette solution",
  },
  {
    name: "SABAN BUSINESS",
    price: "890 € HT",
    intro: "Pour détailler vos prestations, renforcer votre crédibilité et faciliter les demandes de devis.",
    features: [
      "Jusqu'à 4 pages",
      "Design personnalisé",
      "Parcours de conversion",
      "Formulaire de demande",
      "Optimisation mobile",
      "SEO local initial",
      "Suivi élémentaire des demandes",
    ],
    cta: "Discuter de cette solution",
    featured: true,
  },
  {
    name: "SABAN VISIBILITY",
    price: "129 € HT / mois",
    intro: "Pour assurer le suivi technique de votre site et bénéficier d'améliorations régulières selon un périmètre défini ensemble.",
    features: [
      "Maintenance et suivi technique",
      "Accompagnement visibilité locale",
      "Suivi des demandes",
      "Petites optimisations régulières",
      "Bilan synthétique",
    ],
    cta: "En savoir plus",
  },
];

const expertise = [
  {
    title: "Création de sites web",
    text: "Des sites vitrines modernes, adaptés au mobile et conçus pour présenter clairement votre activité.",
    icon: MonitorSmartphone,
    size: "wide",
  },
  {
    title: "WordPress & sur mesure",
    text: "Des outils choisis selon vos besoins, avec une attention portée à la simplicité de gestion et à l'évolutivité.",
    icon: Code2,
    size: "wide",
  },
  {
    title: "Expérience utilisateur",
    text: "Des parcours intuitifs pour aider vos visiteurs à trouver l'information et passer à l'action.",
    icon: Compass,
  },
  {
    title: "Visibilité locale & SEO",
    text: "Des fondations techniques et des contenus structurés pour améliorer la lisibilité de votre site auprès des moteurs de recherche.",
    icon: Search,
  },
  {
    title: "Automatisation",
    text: "Des fonctionnalités pour simplifier certaines tâches répétitives et fluidifier vos processus.",
    icon: Workflow,
  },
  {
    title: "Intégrations IA",
    text: "Des possibilités d'intégration ciblées lorsque l'intelligence artificielle apporte une utilité concrète.",
    icon: Sparkles,
  },
];

const useCases = [
  {
    type: "SITE VITRINE",
    title: "Présenter son activité avec confiance.",
    text: "Une vitrine professionnelle pour expliquer vos prestations, valoriser votre savoir-faire et rendre vos coordonnées accessibles.",
    image: "/images/artisan-pottery.webp",
    imageWidth: 1600,
    imageHeight: 1067,
    imageAlt: "Homme façonnant un vase en terre dans un atelier de poterie.",
  },
  {
    type: "REFONTE WEB",
    title: "Donner un nouveau souffle à son image.",
    text: "Une interface plus actuelle, une navigation claire et une expérience pensée pour les visiteurs sur ordinateur comme sur mobile.",
    image: "/images/premium-workspace.webp",
    imageWidth: 1100,
    imageHeight: 733,
    imageAlt: "Ordinateur portable, appareil photo et carnet sur un bureau sombre.",
  },
  {
    type: "OUTILS DIGITAUX",
    title: "Faciliter les échanges et gagner du temps.",
    text: "Formulaires avancés, prise de rendez-vous ou fonctionnalités personnalisées : des outils adaptés à votre fonctionnement.",
    image: "/images/mobile-workflow.webp",
    imageWidth: 1100,
    imageHeight: 734,
    imageAlt: "Personne consultant un smartphone à un bureau avec ordinateur.",
  },
];

type SubmitStatus = "idle" | "sending" | "success" | "error";

function Brand() {
  return (
    <span className="brand" aria-label="Saban Corp">
      <span className="brand-mark" aria-hidden="true">
        <i />
        <i />
      </span>
      <span className="brand-name">
        SABAN <b>CORP</b>
      </span>
    </span>
  );
}

function ButtonLink({
  children,
  href,
  secondary = false,
  className = "",
  onClick,
}: {
  children: React.ReactNode;
  href: string;
  secondary?: boolean;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  return (
    <a className={`button ${secondary ? "button-secondary" : ""} ${className}`} href={href} onClick={onClick}>
      <span>{children}</span>
      <ArrowRight size={17} strokeWidth={1.7} />
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <p className="eyebrow">{children}</p>;
}

function Sculpture() {
  const ref = useRef<HTMLDivElement>(null);

  function handleMove(event: React.MouseEvent<HTMLDivElement>) {
    if (!ref.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const bounds = ref.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    ref.current.style.setProperty("--pointer-x", `${x * 9}deg`);
    ref.current.style.setProperty("--pointer-y", `${y * -7}deg`);
  }

  return (
    <div className="sculpture-wrap" ref={ref} aria-hidden="true" onMouseMove={handleMove} onMouseLeave={() => {
      ref.current?.style.setProperty("--pointer-x", "0deg");
      ref.current?.style.setProperty("--pointer-y", "0deg");
    }}>
      <div className="sculpture-halo" />
      <svg className="kinetic-art" viewBox="0 0 560 560" focusable="false">
        <defs>
          <linearGradient id="ring-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#101820" />
            <stop offset=".2" stopColor="#334452" />
            <stop offset=".42" stopColor="#7d919e" />
            <stop offset=".52" stopColor="#293643" />
            <stop offset=".77" stopColor="#111920" />
            <stop offset="1" stopColor="#536978" />
          </linearGradient>
          <linearGradient id="ring-edge" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0" stopColor="#0a1017" />
            <stop offset=".5" stopColor="#a5bdcb" />
            <stop offset="1" stopColor="#17232d" />
          </linearGradient>
        </defs>
        <circle className="kinetic-guide" cx="280" cy="280" r="242" />
        <g className="kinetic-secondary">
          <ellipse className="kinetic-shadow" cx="280" cy="280" rx="112" ry="214" transform="rotate(58 280 280)" strokeWidth="27" />
          <ellipse className="kinetic-metal" cx="280" cy="280" rx="112" ry="214" transform="rotate(58 280 280)" strokeWidth="19" strokeDasharray="91 9" pathLength="100" />
          <ellipse className="kinetic-edge" cx="280" cy="280" rx="112" ry="214" transform="rotate(58 280 280)" strokeWidth="1.5" strokeDasharray="91 9" pathLength="100" />
        </g>
        <g className="kinetic-primary">
          <ellipse className="kinetic-shadow" cx="280" cy="280" rx="174" ry="211" transform="rotate(-23 280 280)" strokeWidth="48" />
          <ellipse className="kinetic-metal" cx="280" cy="280" rx="174" ry="211" transform="rotate(-23 280 280)" strokeWidth="36" strokeDasharray="88 12" pathLength="100" />
          <ellipse className="kinetic-edge" cx="280" cy="280" rx="174" ry="211" transform="rotate(-23 280 280)" strokeWidth="2" strokeDasharray="88 12" pathLength="100" />
        </g>
      </svg>
      <div className="sculpture-floor" />
      <div className="tech-label label-top">FORME / 001</div>
      <div className="tech-label label-bottom">MOUVEMENT CINÉTIQUE</div>
    </div>
  );
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const legalPage = legalPageByPath[path] ?? null;
  const homeHref = (href: string) => legalPage ? `/${href}` : href;
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const menuToggleRef = useRef<HTMLButtonElement>(null);
  const mobileNavRef = useRef<HTMLElement>(null);
  const pendingFocusTargetRef = useRef<string | null>(null);
  const submissionInFlightRef = useRef(false);

  function closeMobileMenu(href: string) {
    if (!legalPage) pendingFocusTargetRef.current = href;
    setMenuOpen(false);
  }

  async function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (submissionInFlightRef.current) return;

    const form = event.currentTarget;
    if (!form.reportValidity()) return;

    submissionInFlightRef.current = true;
    setSubmitStatus("sending");

    try {
      const body = new URLSearchParams();
      new FormData(form).forEach((value, key) => {
        if (typeof value === "string") body.append(key, value);
      });

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      });

      if (!response.ok) throw new Error(`Netlify Forms: HTTP ${response.status}`);
      form.reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    } finally {
      submissionInFlightRef.current = false;
    }
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) {
      const href = pendingFocusTargetRef.current;
      if (href) {
        pendingFocusTargetRef.current = null;
        const target = document.querySelector<HTMLElement>(href);
        if (target) {
          target.tabIndex = -1;
          target.focus({ preventScroll: true });
        }
      }
      return;
    }

    const toggle = menuToggleRef.current;
    const links = Array.from(mobileNavRef.current?.querySelectorAll<HTMLAnchorElement>("a[href]") ?? []);
    const focusable: HTMLElement[] = [...(toggle ? [toggle] : []), ...links];
    const focusTimer = window.setTimeout(() => links[0]?.focus(), 50);

    function handleMenuKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
        toggle?.focus();
        return;
      }
      if (event.key !== "Tab" || focusable.length === 0) return;

      const current = document.activeElement;
      if (event.shiftKey && current === focusable[0]) {
        event.preventDefault();
        focusable[focusable.length - 1].focus();
      } else if (!event.shiftKey && current === focusable[focusable.length - 1]) {
        event.preventDefault();
        focusable[0].focus();
      } else if (!focusable.includes(current as HTMLElement)) {
        event.preventDefault();
        focusable[0].focus();
      }
    }

    document.addEventListener("keydown", handleMenuKeyDown);
    return () => {
      window.clearTimeout(focusTimer);
      document.removeEventListener("keydown", handleMenuKeyDown);
    };
  }, [menuOpen]);

  useEffect(() => {
    const mobile = window.matchMedia("(max-width: 800px)");
    const closeOnDesktop = () => {
      if (!mobile.matches) setMenuOpen(false);
    };
    mobile.addEventListener("change", closeOnDesktop);
    return () => mobile.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (legalPage) {
      window.scrollTo(0, 0);
      document.querySelector<HTMLElement>(".legal-heading h1")?.focus({ preventScroll: true });
      return;
    }

    if (window.location.hash) {
      const frame = window.requestAnimationFrame(() => {
        const target = document.getElementById(window.location.hash.slice(1));
        if (target) {
          target.tabIndex = -1;
          target.scrollIntoView();
          target.focus({ preventScroll: true });
        }
      });
      return () => window.cancelAnimationFrame(frame);
    }
  }, [legalPage]);

  return (
    <div className="site-shell">
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a href={legalPage ? "/" : "#accueil"} className="brand-link" aria-label="Saban Corp — Accueil" onClick={() => setMenuOpen(false)}><Brand /></a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navItems.map(([label, href]) => <a href={homeHref(href)} key={href}>{label}</a>)}
        </nav>
        <a className="nav-cta" href={homeHref("#contact")}>Parlons de votre projet <ArrowRight size={15} /></a>
        <button ref={menuToggleRef} className="menu-toggle" type="button" onClick={() => setMenuOpen(!menuOpen)} aria-controls="mobile-navigation" aria-expanded={menuOpen} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <nav id="mobile-navigation" ref={mobileNavRef} className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`} aria-label="Navigation mobile" aria-hidden={!menuOpen}>
          {navItems.map(([label, href], index) => (
            <a href={homeHref(href)} key={href} onClick={() => closeMobileMenu(href)}>
              <span>0{index + 1}</span>{label}<ChevronRight size={18} />
            </a>
          ))}
          <ButtonLink href={homeHref("#contact")} className="mobile-contact" onClick={() => closeMobileMenu("#contact")}>Parlons de votre projet</ButtonLink>
        </nav>
      </header>

      <main inert={menuOpen}>
        {legalPage ? <LegalPage kind={legalPage} /> : <>
        <section className="hero section-grid" id="accueil">
          <div className="hero-grid-bg" />
          <div className="hero-content">
            <Eyebrow>SABAN CORP — STUDIO DIGITAL INDÉPENDANT À TOULOUSE</Eyebrow>
            <h1>
              <span>Des sites web</span>
              <span>à la hauteur de</span>
              <span className="headline-accent">votre entreprise.</span>
            </h1>
            <p className="hero-copy">SABAN CORP conçoit des sites internet modernes et des solutions digitales pour les professionnels. Design soigné, expertise technique et accompagnement direct : une présence en ligne pensée pour valoriser votre activité et faciliter les échanges avec vos futurs clients.</p>
            <div className="hero-actions">
              <ButtonLink href="#contact">Parlons de votre projet</ButtonLink>
              <ButtonLink href="#solutions" secondary>Découvrir nos solutions</ButtonLink>
            </div>
            <div className="trust-line"><CircleDot size={14} /> Toulouse, France <i /> Un interlocuteur dédié</div>
          </div>
          <div className="hero-sculpture"><Sculpture /></div>
          <a href="#mission" className="scroll-cue"><ArrowDown size={16} /> Explorer</a>
          <span className="hero-index">00 — 07</span>
        </section>

        <section className="section mission" id="mission">
          <div className="section-intro reveal">
            <Eyebrow>01 / NOTRE MISSION</Eyebrow>
            <h2>Votre savoir-faire mérite une présence qui inspire confiance.</h2>
            <p>Votre site internet est souvent l'un des premiers contacts entre votre entreprise et ses futurs clients. Il doit permettre de comprendre votre activité, découvrir vos services et vous contacter facilement. SABAN CORP conçoit des expériences digitales qui répondent à ces besoins, sans complexité inutile.</p>
          </div>
          <div className="value-grid">
            {[
              ["01", "Une image professionnelle", "Présentez votre activité avec un site clair, moderne et cohérent avec la qualité de votre travail.", Layers3],
              ["02", "Des contacts facilités", "Aidez vos visiteurs à trouver les bonnes informations et à vous adresser leur demande simplement.", Compass],
              ["03", "Une solution adaptée", "Investissez dans les fonctionnalités réellement utiles à votre activité, sans complexité superflue.", Braces],
            ].map(([num, title, text, Icon], index) => {
              const IconComponent = Icon as typeof Layers3;
              return (
                <article className="value-card reveal" style={{ "--delay": `${index * 100}ms` } as React.CSSProperties} key={String(title)}>
                  <div className="card-top"><span>{String(num)}</span><IconComponent size={25} strokeWidth={1.35} /></div>
                  <h3>{String(title)}</h3>
                  <p>{String(text)}</p>
                  <span className="corner-line" />
                </article>
              );
            })}
          </div>
        </section>

        <section className="section solutions" id="solutions">
          <div className="section-heading reveal">
            <div><Eyebrow>02 / NOS SOLUTIONS</Eyebrow><h2>Des solutions pensées<br />pour votre activité.</h2></div>
            <p>Une présence en ligne essentielle, un site plus complet ou un accompagnement dans la durée : choisissez un point de départ adapté à vos besoins.</p>
          </div>
          <div className="pricing-grid">
            {solutions.map((solution, index) => (
              <article className={`pricing-card reveal ${solution.featured ? "pricing-featured" : ""}`} style={{ "--delay": `${index * 100}ms` } as React.CSSProperties} key={solution.name}>
                <div className="plan-head">
                  <span className="plan-number">0{index + 1}</span>
                  <h3>{solution.name}</h3>
                  <p>À partir de</p>
                  <strong>{solution.price}</strong>
                  <small>{solution.intro}</small>
                </div>
                <ul>
                  {solution.features.map((feature) => <li key={feature}><Check size={14} />{feature}</li>)}
                </ul>
                <a href="#contact" className="plan-link">{solution.cta}<ArrowRight size={16} /></a>
              </article>
            ))}
          </div>
          <p className="pricing-note">Les tarifs affichés sont des prix de départ indicatifs. Une proposition précise est établie après confirmation du périmètre, des contenus et des besoins techniques.</p>
        </section>

        <section className="section expertise-section">
          <div className="section-intro reveal">
            <Eyebrow>03 / NOS EXPERTISES</Eyebrow>
            <h2>La technique au service de vos objectifs.</h2>
            <p>Chaque entreprise a ses propres besoins. Nous privilégions les solutions adaptées à votre activité, à votre budget et à votre manière de travailler.</p>
          </div>
          <div className="expertise-grid">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <article className={`expertise-card reveal ${item.size === "wide" ? "expertise-wide" : ""}`} style={{ "--delay": `${(index % 3) * 80}ms` } as React.CSSProperties} key={item.title}>
                  <div className="expertise-icon"><Icon size={22} strokeWidth={1.4} /></div>
                  <span>0{index + 1}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section projects" id="cas-usage">
          <div className="section-heading reveal">
            <div><Eyebrow>04 / CAS D'USAGE</Eyebrow><h2>Des solutions pour des besoins concrets.</h2></div>
            <p>Chaque projet part d'un besoin précis. Voici trois situations dans lesquelles un site ou un outil digital peut faire la différence.</p>
          </div>
          <div className="projects-grid">
            {useCases.map((useCase, index) => (
              <article className={`project-card reveal ${index === 0 ? "project-large" : ""}`} key={useCase.title}>
                <div className="project-visual">
                  <img src={useCase.image} alt={useCase.imageAlt} width={useCase.imageWidth} height={useCase.imageHeight} loading="lazy" decoding="async" />
                </div>
                <div className="project-info">
                  <div><span>{useCase.type}</span><h3>{useCase.title}</h3><p>{useCase.text}</p></div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section process" id="approche">
          <div className="section-intro reveal">
            <Eyebrow>05 / NOTRE MÉTHODE</Eyebrow>
            <h2>Une approche claire.<br />Du premier échange<br />à la mise en ligne.</h2>
          </div>
          <div className="process-list">
            {[
              ["01", "Échange", "Nous échangeons sur votre activité, vos besoins et les objectifs de votre projet."],
              ["02", "Proposition", "Vous recevez une proposition précisant la solution, le périmètre et le budget envisagés."],
              ["03", "Création", "Votre site ou votre solution prend forme avec des points d'échange aux étapes importantes."],
              ["04", "Lancement", "Nous réalisons les dernières vérifications et préparons la mise en ligne."],
            ].map(([num, title, text], index) => (
              <article className="process-step reveal" style={{ "--delay": `${index * 100}ms` } as React.CSSProperties} key={num}>
                <div className="step-marker"><span>{num}</span><i /></div>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="a-propos">
          <div className="founder-identity reveal">
            <div className="portrait-grid" />
            <div className="portrait-monogram" aria-hidden="true"><span>YC</span></div>
            <span>Yves-Christophe Saban</span>
            <small>Fondateur &amp; développeur web</small>
            <small>Toulouse, France</small>
          </div>
          <div className="about-content reveal">
            <Eyebrow>06 / LE FONDATEUR</Eyebrow>
            <h2>Une expertise technique.<br />Un interlocuteur direct.</h2>
            <div className="about-copy">
              <p>Je suis Yves-Christophe Saban, développeur web basé à Toulouse et fondateur de SABAN CORP.</p>
              <p>Mon parcours m'a amené à concevoir, faire évoluer et maintenir des sites internet et des solutions web pour des organisations aux besoins variés.</p>
              <p>Avec SABAN CORP, je mets cette expérience au service des professionnels qui souhaitent disposer d'un site soigné, utile et adapté à leur activité.</p>
              <p>De notre premier échange jusqu'à la mise en ligne, vous échangez directement avec la personne qui conçoit et développe votre projet.</p>
              <p>Mon objectif : vous proposer une solution que vous comprenez, qui répond à vos besoins et dont vous pouvez réellement vous servir.</p>
            </div>
            <div className="tags">{["WordPress", "Développement web", "React", "PHP", "Solutions sur mesure"].map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-copy reveal">
            <Eyebrow>07 / PRENONS CONTACT</Eyebrow>
            <h2>Parlons de votre<br />prochain projet.</h2>
            <p>Vous souhaitez créer un site internet, moderniser votre présence en ligne ou développer une fonctionnalité adaptée à votre activité ? Présentez votre projet et vos besoins. Nous pourrons faire le point sur la solution la plus pertinente.</p>
            <div className="contact-detail">
              <span>CONTACT DIRECT</span>
              <p>Email : <a href="mailto:sabancorp31@gmail.com">sabancorp31@gmail.com</a></p>
              <p>Téléphone : <a href="tel:+33631821362">06 31 82 13 62</a></p>
            </div>
          </div>
          <form className="contact-form reveal" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" aria-busy={submitStatus === "sending"} onSubmit={handleContactSubmit} onChange={() => {
            if (submitStatus !== "sending") setSubmitStatus("idle");
          }}>
            <input type="hidden" name="form-name" value="contact" />
            <div className="honeypot-field" aria-hidden="true"><label>Ne pas remplir ce champ<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></div>
            <div className="form-row">
              <label>Nom *<input name="name" type="text" autoComplete="name" placeholder="Votre nom" required /></label>
              <label>Entreprise<input name="company" type="text" autoComplete="organization" placeholder="Nom de votre entreprise" /></label>
            </div>
            <label>Email professionnel *<input name="email" type="email" autoComplete="email" placeholder="vous@entreprise.fr" required /></label>
            <label>Type de projet *
              <select name="project" defaultValue="" required>
                <option value="" disabled>Sélectionnez une option</option>
                <option>Création de site</option><option>Refonte de site</option><option>Visibilité locale</option><option>Maintenance</option><option>Autre projet</option>
              </select>
            </label>
            <label>Votre besoin *<textarea name="message" rows={4} placeholder="Parlez-nous de votre activité, de vos objectifs et de vos délais..." required /></label>
            <p className="privacy-note">Les informations transmises sont utilisées pour répondre à votre demande et, si nécessaire, préparer une proposition commerciale. Pour en savoir plus, consultez notre <a href="/politique-de-confidentialite">Politique de confidentialité</a>.</p>
            <button className="button submit-button" type="submit" disabled={submitStatus === "sending"}>
              <span>{submitStatus === "sending" ? "Envoi en cours…" : "Envoyer ma demande"}</span>
              <ArrowRight size={17} />
            </button>
            <div className="form-feedback" role={submitStatus === "error" ? "alert" : "status"} aria-live={submitStatus === "error" ? "assertive" : "polite"}>
              {submitStatus === "success" && "Votre demande a été transmise. Nous vous répondrons dès que possible."}
              {submitStatus === "error" && "L'envoi n'a pas abouti. Réessayez plus tard."}
            </div>
          </form>
        </section>
        </>}
      </main>

      <footer inert={menuOpen}>
        <div className="footer-main">
          <div><a href="/" aria-label="Saban Corp — Accueil"><Brand /></a><p>Sites web et solutions digitales pour les professionnels.</p></div>
          <div className="footer-nav">{navItems.slice(1).map(([label, href]) => <a href={homeHref(href)} key={href}>{label}</a>)}</div>
          <div className="footer-location"><span>LOCALISATION</span><p>Toulouse, France</p></div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SABAN CORP</span>
          <span>Studio digital indépendant</span>
          <div><a href="/mentions-legales" aria-current={legalPage === "mentions" ? "page" : undefined}>Mentions légales</a><a href="/politique-de-confidentialite" aria-current={legalPage === "confidentialite" ? "page" : undefined}>Politique de confidentialité</a></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
