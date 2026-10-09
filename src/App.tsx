import { FormEvent, useEffect, useRef, useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  Braces,
  Check,
  ChevronRight,
  CircleDot,
  Code2,
  Compass,
  ExternalLink,
  Layers3,
  Menu,
  MonitorSmartphone,
  ScanLine,
  Search,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";

const navItems = [
  ["Accueil", "#accueil"],
  ["Solutions", "#solutions"],
  ["Réalisations", "#realisations"],
  ["Notre approche", "#approche"],
  ["À propos", "#a-propos"],
  ["Contact", "#contact"],
];

const solutions = [
  {
    name: "SABAN START",
    price: "490 € HT",
    intro: "Pour lancer une présence en ligne professionnelle, claire et essentielle.",
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
    intro: "Pour construire un site commercial plus complet, pensé pour vos clients.",
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
    intro: "Pour bénéficier d'un accompagnement digital régulier et pragmatique.",
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
    text: "Des sites élégants, rapides et conçus pour transformer l'intérêt en prise de contact.",
    icon: MonitorSmartphone,
    size: "wide",
  },
  {
    title: "WordPress & sur mesure",
    text: "La solution technique adaptée à votre autonomie, votre budget et vos ambitions.",
    icon: Code2,
  },
  {
    title: "Expérience utilisateur",
    text: "Des parcours simples qui permettent à vos visiteurs de trouver rapidement l'essentiel.",
    icon: Compass,
  },
  {
    title: "Visibilité locale & SEO",
    text: "Des fondations techniques propres pour être compris par les moteurs de recherche.",
    icon: Search,
  },
  {
    title: "Automatisation",
    text: "Des tâches répétitives simplifiées pour consacrer plus de temps à votre activité.",
    icon: Workflow,
  },
  {
    title: "Intégrations IA",
    text: "Des usages ciblés et utiles, intégrés sans complexité inutile à vos outils.",
    icon: Sparkles,
    size: "wide",
  },
];

const projects = [
  {
    type: "CONCEPT 01",
    title: "Site vitrine professionnel",
    text: "Une présence structurée pour présenter un savoir-faire avec clarté.",
    visual: "visual-one",
  },
  {
    type: "CONCEPT 02",
    title: "Présence digitale locale",
    text: "Une interface sobre orientée découverte et prise de contact.",
    visual: "visual-two",
  },
  {
    type: "DÉMONSTRATION 03",
    title: "Expérience web moderne",
    text: "Une direction artistique éditoriale, fluide et distinctive.",
    visual: "visual-three",
  },
];

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
}: {
  children: React.ReactNode;
  href: string;
  secondary?: boolean;
  className?: string;
}) {
  return (
    <a className={`button ${secondary ? "button-secondary" : ""} ${className}`} href={href}>
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
    if (!ref.current) return;
    const bounds = ref.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    ref.current.style.setProperty("--pointer-x", `${x * 9}deg`);
    ref.current.style.setProperty("--pointer-y", `${y * -7}deg`);
  }

  return (
    <div className="sculpture-wrap" ref={ref} onMouseMove={handleMove} onMouseLeave={() => {
      ref.current?.style.setProperty("--pointer-x", "0deg");
      ref.current?.style.setProperty("--pointer-y", "0deg");
    }}>
      <div className="sculpture-halo" />
      <div className="sculpture">
        <div className="slab slab-a"><span /></div>
        <div className="slab slab-b"><span /></div>
        <div className="slab slab-c"><span /></div>
        <div className="core"><i /></div>
        <div className="orbit orbit-a" />
        <div className="orbit orbit-b" />
      </div>
      <div className="sculpture-floor" />
      <div className="tech-label label-top"><ScanLine size={13} /> STRUCTURE / 001</div>
      <div className="tech-label label-bottom">MOUVEMENT ADAPTATIF</div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formState, setFormState] = useState<"idle" | "loading" | "success">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

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

  function submitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const nextErrors: Record<string, string> = {};
    if (!String(data.get("name") || "").trim()) nextErrors.name = "Indiquez votre nom.";
    const email = String(data.get("email") || "");
    if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) nextErrors.email = "Saisissez une adresse email valide.";
    if (!data.get("project")) nextErrors.project = "Sélectionnez un type de projet.";
    if (String(data.get("message") || "").trim().length < 20) nextErrors.message = "Décrivez votre besoin en quelques mots (20 caractères minimum).";
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) return;
    setFormState("loading");
    window.setTimeout(() => setFormState("success"), 900);
  }

  return (
    <div className="site-shell">
      <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
        <a href="#accueil" className="brand-link" aria-label="Saban Corp — Accueil"><Brand /></a>
        <nav className="desktop-nav" aria-label="Navigation principale">
          {navItems.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <a className="nav-cta" href="#contact">Parlons de votre projet <ArrowRight size={15} /></a>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-expanded={menuOpen} aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}>
          {menuOpen ? <X /> : <Menu />}
        </button>
        <div className={`mobile-nav ${menuOpen ? "mobile-nav-open" : ""}`}>
          {navItems.map(([label, href], index) => (
            <a href={href} key={href} onClick={() => setMenuOpen(false)}>
              <span>0{index + 1}</span>{label}<ChevronRight size={18} />
            </a>
          ))}
          <ButtonLink href="#contact" className="mobile-contact">Parlons de votre projet</ButtonLink>
        </div>
      </header>

      <main>
        <section className="hero section-grid" id="accueil">
          <div className="hero-grid-bg" />
          <div className="hero-content">
            <Eyebrow>SABAN CORP — STUDIO DIGITAL INDÉPENDANT</Eyebrow>
            <h1>
              <span>Votre entreprise mérite</span>
              <span>une présence digitale</span>
              <span className="headline-accent">à sa hauteur.</span>
            </h1>
            <p className="hero-copy">Nous concevons des sites web modernes et des solutions digitales sur mesure pour aider les indépendants et les entreprises à renforcer leur image, simplifier leurs outils et développer leur activité.</p>
            <div className="hero-actions">
              <ButtonLink href="#contact">Discutons de votre projet</ButtonLink>
              <ButtonLink href="#solutions" secondary>Découvrir nos solutions</ButtonLink>
            </div>
            <div className="trust-line"><CircleDot size={14} /> Basé à Toulouse <i /> Accompagnement personnalisé</div>
          </div>
          <div className="hero-sculpture"><Sculpture /></div>
          <a href="#mission" className="scroll-cue"><ArrowDown size={16} /> Explorer</a>
          <span className="hero-index">00 — 07</span>
        </section>

        <section className="section mission" id="mission">
          <div className="section-intro reveal">
            <Eyebrow>01 / NOTRE MISSION</Eyebrow>
            <h2>Le digital au service<br />de votre ambition.</h2>
            <p>Un site web ne devrait pas simplement être esthétique. Il doit inspirer confiance, faciliter les échanges et accompagner le développement de votre activité.</p>
          </div>
          <div className="value-grid">
            {[
              ["01", "Une image professionnelle", "Valorisez votre entreprise avec une présence digitale claire, moderne et cohérente.", Layers3],
              ["02", "Une expérience efficace", "Facilitez la navigation, les prises de contact et les demandes de vos futurs clients.", Compass],
              ["03", "Des solutions adaptées", "Bénéficiez d'un accompagnement technique construit autour de vos besoins réels.", Braces],
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
            <p>Des bases transparentes, ajustées après un échange précis sur votre projet.</p>
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
            <h2>La bonne technologie.<br />Pour le bon besoin.</h2>
            <p>Nous traduisons la technique en solutions concrètes, utiles aujourd'hui et capables d'évoluer demain.</p>
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

        <section className="section projects" id="realisations">
          <div className="section-heading reveal">
            <div><Eyebrow>04 / NOTRE SAVOIR-FAIRE</Eyebrow><h2>Des projets qui donnent<br />vie aux idées.</h2></div>
            <p>Une sélection de compositions de démonstration, en attendant la publication de projets autorisés.</p>
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className={`project-card reveal ${index === 0 ? "project-large" : ""}`} key={project.title}>
                <div className={`project-visual ${project.visual}`}>
                  <div className="mock-window"><span /><span /><span /></div>
                  <div className="project-shape shape-one" />
                  <div className="project-shape shape-two" />
                  <span className="demo-label">VISUEL DE DÉMONSTRATION</span>
                </div>
                <div className="project-info">
                  <div><span>{project.type}</span><h3>{project.title}</h3><p>{project.text}</p></div>
                  <span className="reserved-link" title="Lien réservé — projet à venir"><ExternalLink size={18} /></span>
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
              ["01", "Échange", "Nous prenons le temps de comprendre votre activité, vos besoins et vos objectifs."],
              ["02", "Proposition", "Nous définissons une solution, un périmètre et un budget adaptés."],
              ["03", "Création", "Nous concevons et développons votre solution avec des échanges réguliers."],
              ["04", "Lancement", "Nous finalisons les vérifications et vous accompagnons dans la mise en ligne."],
            ].map(([num, title, text], index) => (
              <article className="process-step reveal" style={{ "--delay": `${index * 100}ms` } as React.CSSProperties} key={num}>
                <div className="step-marker"><span>{num}</span><i /></div>
                <h3>{title}</h3><p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section about" id="a-propos">
          <div className="portrait-placeholder reveal">
            <div className="portrait-grid" />
            <div className="portrait-monogram">YC</div>
            <span>EMPLACEMENT PORTRAIT</span>
            <small>Photographie du fondateur à intégrer</small>
          </div>
          <div className="about-content reveal">
            <Eyebrow>06 / À PROPOS</Eyebrow>
            <h2>Une expertise technique.<br />Une approche humaine.</h2>
            <div className="about-copy">
              <p>Je suis Yves-Christophe, développeur web indépendant basé à Toulouse et fondateur de SABAN CORP.</p>
              <p>J'accompagne les professionnels dans la conception de sites internet et de solutions digitales adaptées à leur activité.</p>
              <p>Mon approche associe expertise technique, simplicité et attention portée aux besoins de chaque projet.</p>
            </div>
            <div className="tags">{["WordPress", "React", "JavaScript", "PHP", "Solutions IA"].map((tag) => <span key={tag}>{tag}</span>)}</div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="contact-copy reveal">
            <Eyebrow>07 / PRENONS CONTACT</Eyebrow>
            <h2>Parlons de votre<br />prochain projet.</h2>
            <p>Vous souhaitez moderniser votre site, améliorer votre présence en ligne ou développer une solution digitale ? Échangeons sur vos besoins.</p>
            <div className="contact-detail">
              <span>CONTACT DIRECT</span>
              <p>Les coordonnées directes seront configurées avant la mise en ligne.</p>
            </div>
          </div>
          <form className="contact-form reveal" onSubmit={submitForm} noValidate>
            <div className="form-row">
              <label>Nom *<input name="name" type="text" placeholder="Votre nom" aria-invalid={!!errors.name} /></label>
              <label>Entreprise<input name="company" type="text" placeholder="Nom de votre entreprise" /></label>
            </div>
            {errors.name && <p className="field-error">{errors.name}</p>}
            <label>Email professionnel *<input name="email" type="email" placeholder="vous@entreprise.fr" aria-invalid={!!errors.email} /></label>
            {errors.email && <p className="field-error">{errors.email}</p>}
            <label>Type de projet *
              <select name="project" defaultValue="" aria-invalid={!!errors.project}>
                <option value="" disabled>Sélectionnez une option</option>
                <option>Création de site</option><option>Refonte de site</option><option>Visibilité locale</option><option>Maintenance</option><option>Autre projet</option>
              </select>
            </label>
            {errors.project && <p className="field-error">{errors.project}</p>}
            <label>Votre besoin *<textarea name="message" rows={4} placeholder="Parlez-nous de votre activité, de vos objectifs et de vos délais..." aria-invalid={!!errors.message} /></label>
            {errors.message && <p className="field-error">{errors.message}</p>}
            <label className="consent"><input type="checkbox" required /><span>J'accepte que mes informations soient utilisées uniquement pour répondre à ma demande. Aucun usage commercial sans mon accord.</span></label>
            {formState === "success" ? (
              <div className="form-success"><Check size={20} /><span><strong>Votre demande est prête.</strong> Le formulaire est validé ; le service d'envoi devra être connecté avant la mise en ligne.</span></div>
            ) : (
              <button className="button submit-button" type="submit" disabled={formState === "loading"}>
                <span>{formState === "loading" ? "Validation en cours…" : "Envoyer ma demande"}</span>
                <ArrowRight size={17} />
              </button>
            )}
            <p className="form-note">Prototype fonctionnel — aucun message n'est envoyé tant qu'un service de formulaire n'est pas configuré.</p>
          </form>
        </section>
      </main>

      <footer>
        <div className="footer-main">
          <div><Brand /><p>Des expériences digitales précises, utiles et durables.</p></div>
          <div className="footer-nav">{navItems.slice(1).map(([label, href]) => <a href={href} key={href}>{label}</a>)}</div>
          <div className="footer-location"><span>LOCALISATION</span><p>Toulouse, France</p></div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} SABAN CORP</span>
          <span>Studio digital indépendant</span>
          <div><span>Mentions légales — à venir</span><span>Confidentialité — à venir</span></div>
        </div>
      </footer>
    </div>
  );
}

export default App;
