export type LegalPageKind = "mentions" | "confidentialite";

const privacyPath = "/politique-de-confidentialite";

function LegalSection({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="legal-section" aria-labelledby={id}>
      <h2 id={id}>{title}</h2>
      <div className="legal-section-body">{children}</div>
    </section>
  );
}

function MentionsLegales() {
  return (
    <>
      <LegalSection id="mentions-editeur" title="1. Éditeur du site">
        <p>Le présent site internet est édité par Yves SABAN, Entrepreneur individuel (EI), exerçant sous le nom commercial SABAN CORP.</p>
        <p>Informations relatives à l'entreprise :</p>
        <dl className="legal-facts">
          <div><dt>Nom commercial</dt><dd>SABAN CORP</dd></div>
          <div><dt>Exploitant</dt><dd>Yves SABAN — Entrepreneur individuel (EI)</dd></div>
          <div><dt>Adresse</dt><dd>8 rue Saint-Gabriel, 31400 Toulouse, France</dd></div>
          <div><dt>SIREN</dt><dd>924 753 569</dd></div>
          <div><dt>SIRET</dt><dd>924 753 569 00012</dd></div>
          <div><dt>Immatriculation</dt><dd>Registre national des entreprises (RNE)</dd></div>
          <div><dt>Numéro de TVA intracommunautaire communiqué</dt><dd>FR94924753569</dd></div>
          <div><dt>Email</dt><dd><a href="mailto:sabancorp31@gmail.com">sabancorp31@gmail.com</a></dd></div>
          <div><dt>Téléphone</dt><dd><a href="tel:+33631821362">06 31 82 13 62</a></dd></div>
        </dl>
        <p>SABAN CORP exerce une activité de développement informatique, de création et refonte de sites internet, de conseil technique et de conception de solutions digitales.</p>
        <p>Les prestations commerciales présentées sur ce site sont destinées exclusivement aux professionnels agissant dans le cadre de leur activité professionnelle.</p>
      </LegalSection>

      <LegalSection id="mentions-directeur" title="2. Directeur de la publication">
        <p>Le directeur de la publication est Yves SABAN, Entrepreneur individuel.</p>
      </LegalSection>

      <LegalSection id="mentions-hebergement" title="3. Hébergement">
        <p>Le site est hébergé par :</p>
        <address>
          Netlify, Inc.<br />
          101 2nd Street<br />
          San Francisco, CA 94105<br />
          États-Unis
        </address>
        <p>Site internet : <a href="https://www.netlify.com">https://www.netlify.com</a></p>
        <p>Email : <a href="mailto:support@netlify.com">support@netlify.com</a></p>
      </LegalSection>

      <LegalSection id="mentions-propriete" title="4. Propriété intellectuelle">
        <p>Les contenus originaux présents sur le site, notamment les textes, créations graphiques, interfaces, visuels, éléments de marque et composants de présentation, sont protégés par la législation applicable en matière de propriété intellectuelle.</p>
        <p>Toute reproduction, représentation, adaptation ou diffusion non autorisée de contenus protégés est interdite, sauf dans les cas prévus par la loi.</p>
        <p>Les marques, outils, logiciels et éléments appartenant à des tiers demeurent la propriété de leurs titulaires respectifs.</p>
      </LegalSection>

      <LegalSection id="mentions-commerciales" title="5. Informations commerciales">
        <p>Les prestations présentées sur ce site s'adressent aux professionnels.</p>
        <p>Les prix éventuellement affichés constituent des tarifs de départ indicatifs exprimés hors taxes (HT). Ils ne constituent pas une offre contractuelle ferme.</p>
        <p>Le périmètre des prestations, les modalités d'exécution, les délais et les conditions financières sont précisés dans un devis ou contrat accepté par les parties.</p>
      </LegalSection>

      <LegalSection id="mentions-responsabilite" title="6. Responsabilité">
        <p>SABAN CORP veille à fournir des informations aussi exactes et actualisées que possible.</p>
        <p>Toutefois, les contenus publiés sont fournis à titre informatif et peuvent être modifiés sans préavis.</p>
        <p>SABAN CORP ne garantit pas une disponibilité permanente du site. Sa responsabilité demeure soumise aux dispositions légales impératives applicables.</p>
      </LegalSection>

      <LegalSection id="mentions-liens" title="7. Liens externes">
        <p>Le site peut contenir des liens vers des services ou sites internet tiers.</p>
        <p>SABAN CORP n'exerce pas de contrôle permanent sur leurs contenus et ne peut être tenu responsable de leurs pratiques indépendantes.</p>
      </LegalSection>

      <LegalSection id="mentions-donnees" title="8. Protection des données personnelles">
        <p>Les informations personnelles recueillies lors de l'utilisation du formulaire de contact sont traitées conformément à la réglementation applicable en matière de protection des données personnelles.</p>
        <p>Les finalités, bases légales, destinataires, durées de conservation et droits des utilisateurs sont détaillés dans la <a href={privacyPath}>Politique de confidentialité</a> du site.</p>
        <p>Pour toute question concernant les données personnelles :</p>
        <p><a href="mailto:sabancorp31@gmail.com">sabancorp31@gmail.com</a></p>
      </LegalSection>

      <LegalSection id="mentions-droit" title="9. Droit applicable">
        <p>Le présent site est soumis au droit français.</p>
        <p>Tout différend relatif à son utilisation sera traité dans le respect de la législation applicable et, le cas échéant, des stipulations contractuelles valablement convenues entre les parties.</p>
      </LegalSection>
    </>
  );
}

function PolitiqueConfidentialite() {
  return (
    <>
      <LegalSection id="confidentialite-objet" title="1. Objet">
        <p>La présente politique de confidentialité décrit la manière dont SABAN CORP collecte et traite les données personnelles des visiteurs de son site internet.</p>
        <p>Elle s'applique notamment aux représentants d'entreprises, entrepreneurs individuels et professionnels utilisant le formulaire de contact.</p>
        <p>SABAN CORP respecte les dispositions du Règlement général sur la protection des données (RGPD) et de la législation française applicable.</p>
      </LegalSection>

      <LegalSection id="confidentialite-responsable" title="2. Responsable du traitement">
        <p>Yves SABAN — Entrepreneur individuel (EI)</p>
        <p>Nom commercial : SABAN CORP</p>
        <address>Adresse : 8 rue Saint-Gabriel, 31400 Toulouse, France</address>
        <p>Email : <a href="mailto:sabancorp31@gmail.com">sabancorp31@gmail.com</a></p>
        <p>Téléphone : <a href="tel:+33631821362">06 31 82 13 62</a></p>
      </LegalSection>

      <LegalSection id="confidentialite-donnees" title="3. Données collectées">
        <p>Le formulaire de contact permet de recueillir :</p>
        <ul>
          <li>Nom du contact professionnel</li>
          <li>Nom de l'entreprise, lorsqu'il est renseigné</li>
          <li>Adresse email</li>
          <li>Type de projet</li>
          <li>Description de la demande</li>
        </ul>
        <p>Les champs obligatoires sont nécessaires au traitement de la demande. Les autres champs sont facultatifs.</p>
        <p>Les utilisateurs sont invités à ne pas transmettre de données sensibles ou confidentielles non nécessaires.</p>
        <p>Certaines données techniques peuvent également être traitées par les prestataires nécessaires au fonctionnement du site : adresse IP, navigateur, terminal, horodatage des requêtes, ressources consultées et informations de sécurité.</p>
      </LegalSection>

      <LegalSection id="confidentialite-finalites" title="4. Finalités et bases légales">
        <p>Les informations transmises permettent de répondre aux sollicitations professionnelles, d'échanger au sujet d'un projet, d'établir éventuellement un devis et d'assurer le suivi de la demande.</p>
        <p>Pour les représentants et contacts d'entreprises, le traitement repose sur l'intérêt légitime de SABAN CORP à répondre aux sollicitations professionnelles.</p>
        <p>Lorsqu'un entrepreneur individuel demande lui-même une prestation, certaines opérations précontractuelles peuvent relever de l'article 6, paragraphe 1, point b du RGPD.</p>
        <p>Les traitements techniques nécessaires au fonctionnement et à la sécurité du site reposent sur l'intérêt légitime correspondant.</p>
        <p>Lorsqu'une relation contractuelle est établie, les informations nécessaires à son exécution et aux obligations comptables et fiscales sont traitées selon les bases légales applicables.</p>
      </LegalSection>

      <LegalSection id="confidentialite-utilisation" title="5. Utilisation des données">
        <p>Les informations communiquées par le formulaire sont utilisées pour traiter la demande concernée.</p>
        <p>Elles ne donnent pas lieu à une inscription automatique à une newsletter.</p>
        <p>SABAN CORP ne vend pas les données personnelles collectées sur son site.</p>
      </LegalSection>

      <LegalSection id="confidentialite-prestataires" title="6. Destinataires et prestataires">
        <p>Les données sont accessibles à SABAN CORP et aux prestataires techniques nécessaires à leur transmission et leur hébergement.</p>
        <h3>Netlify, Inc.</h3>
        <p>Netlify assure l'hébergement du site. Netlify Forms permet la réception et la conservation technique des soumissions.</p>
        <p>Site : <a href="https://www.netlify.com">https://www.netlify.com</a></p>
        <p>Confidentialité : <a href="https://www.netlify.com/privacy/">https://www.netlify.com/privacy/</a></p>
        <h3>Google</h3>
        <p>Les notifications et échanges électroniques peuvent être traités avec Gmail.</p>
        <p>Le site utilise également Google Fonts pour le chargement de certaines polices, ce qui peut entraîner la transmission de données techniques à Google.</p>
        <p>Confidentialité : <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a></p>
      </LegalSection>

      <LegalSection id="confidentialite-conservation" title="7. Durées de conservation">
        <p>Les demandes de contact qui ne débouchent pas sur une relation contractuelle ont vocation à être conservées pendant une durée maximale de 12 mois à compter du dernier échange.</p>
        <p>Lorsque la demande aboutit à une prestation, les informations nécessaires à la gestion contractuelle et aux obligations légales peuvent être conservées pendant les durées applicables.</p>
        <p>Les données techniques traitées par les prestataires sont soumises aux durées nécessaires à leurs finalités techniques et de sécurité.</p>
      </LegalSection>

      <LegalSection id="confidentialite-transferts" title="8. Transferts internationaux">
        <p>L'utilisation de Netlify et de services Google peut entraîner le traitement ou le transfert de données personnelles en dehors de l'Espace économique européen, notamment vers les États-Unis.</p>
        <p>Les transferts concernés doivent bénéficier des garanties prévues par le RGPD.</p>
        <p>Les utilisateurs peuvent consulter la documentation contractuelle et les politiques de confidentialité des prestataires pour obtenir davantage d'informations.</p>
      </LegalSection>

      <LegalSection id="confidentialite-securite" title="9. Sécurité">
        <p>SABAN CORP s'efforce de mettre en œuvre des mesures techniques et organisationnelles adaptées aux données traitées.</p>
        <p>Le site utilise HTTPS pour les communications avec le navigateur.</p>
        <p>L'accès aux demandes reçues doit rester limité aux personnes autorisées à les traiter.</p>
      </LegalSection>

      <LegalSection id="confidentialite-cookies" title="10. Cookies et services externes">
        <p>Dans sa configuration actuelle, SABAN CORP n'utilise pas d'outil déclaré de publicité comportementale ni de mesure d'audience marketing.</p>
        <p>Des mécanismes techniques peuvent être nécessaires au fonctionnement et à la sécurité du site.</p>
        <p>Le chargement de Google Fonts entraîne une connexion du navigateur aux services de Google.</p>
        <p>En cas d'installation ultérieure de traceurs soumis au consentement, une information adaptée et les mécanismes réglementaires nécessaires seront mis en place.</p>
      </LegalSection>

      <LegalSection id="confidentialite-droits" title="11. Droits des personnes">
        <p>Conformément au RGPD, les personnes concernées disposent, dans les conditions prévues par la réglementation, des droits d'accès, de rectification, d'effacement, de limitation et d'opposition.</p>
        <p>Un droit à la portabilité peut également être exercé lorsque ses conditions légales sont réunies.</p>
        <p>Pour exercer ces droits :</p>
        <p><a href="mailto:sabancorp31@gmail.com">sabancorp31@gmail.com</a></p>
        <p>Adresse postale :</p>
        <address>
          Yves SABAN — SABAN CORP<br />
          8 rue Saint-Gabriel<br />
          31400 Toulouse<br />
          France
        </address>
        <p>Les demandes sont traitées dans les délais réglementaires.</p>
        <p>En cas de difficulté, les personnes concernées peuvent introduire une réclamation auprès de la Commission nationale de l'informatique et des libertés :</p>
        <p><a href="https://www.cnil.fr">https://www.cnil.fr</a></p>
      </LegalSection>

      <LegalSection id="confidentialite-decisions" title="12. Décisions automatisées">
        <p>Les informations recueillies par le formulaire ne sont pas utilisées pour prendre des décisions individuelles entièrement automatisées produisant des effets juridiques ou des effets significatifs similaires.</p>
      </LegalSection>

      <LegalSection id="confidentialite-modification" title="13. Modification de la politique">
        <p>SABAN CORP peut modifier cette politique afin de tenir compte des évolutions techniques, organisationnelles ou réglementaires.</p>
        <p>La date de dernière mise à jour est indiquée en début de document.</p>
      </LegalSection>
    </>
  );
}

export default function LegalPage({ kind }: { kind: LegalPageKind }) {
  const title = kind === "mentions" ? "Mentions légales" : "Politique de confidentialité";

  return (
    <article className="legal-page">
      <div className="legal-heading">
        <p className="eyebrow">SABAN CORP — INFORMATIONS JURIDIQUES</p>
        <h1 tabIndex={-1}>{title}</h1>
        <p className="legal-updated">Dernière mise à jour : <time dateTime="2026-10-09">9 octobre 2026</time></p>
      </div>
      <div className="legal-content">
        {kind === "mentions" ? <MentionsLegales /> : <PolitiqueConfidentialite />}
      </div>
    </article>
  );
}
