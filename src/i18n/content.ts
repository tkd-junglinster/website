// Longer-form page content (lists, tables, multi-paragraph text).
//
// Short labels, navigation and the homepage hero live in `ui.ts`.
// This file holds the richer content for the Join, Training and About pages,
// plus the homepage news banner — anything that is a list, a table or more
// than a sentence or two.
//
// HOW TO EDIT TEXT:
//   - Find the page (home / join / training / about) and the field you want.
//   - Edit the text for each of the three languages: fr, en, de.
//   - Keep the same shape (the same fields and list lengths) in all three.
//   - English is the default language; if something is missing the English
//     text is used as a fallback.
//
// Content sourced from the previous site (tkd-junglinster.lu), June 2026.

import type { Lang } from './ui';

// Shared external links and contact details (the same in every language).
export const links = {
  spond:
    'https://club.spond.com/landing/signup/tkdjunglinster/form/D3056925915D4661BB24FCF3E448FBE3',
  medical: 'https://sports.public.lu/fr/programs/medico-sportif/rendez-vous.html',
  opFreinenMap: 'https://maps.app.goo.gl/58qX6RDSrLi1TZf38',
  email: 'info@tkd-junglinster.lu',
} as const;

interface Fee {
  label: string;
  amount: string;
}
interface NamedItem {
  name: string;
  desc: string;
}
interface TimetableRow {
  day: string;
  venue: string;
  sessions: string;
}
interface Venue {
  name: string;
  desc: string;
  /** Optional Google Maps link. */
  map?: string;
}

interface PageContent {
  home: {
    newsBanner: string;
    trialTitle: string;
    trialBody: string;
  };
  join: {
    intro: string;
    signupTitle: string;
    signupBody: string;
    signupButton: string;
    feesTitle: string;
    fees: Fee[];
    feesNote: string;
    medicalTitle: string;
    medicalBody: string;
    medicalLink: string;
    ageTitle: string;
    ageBody: string;
    liability: string;
    contactTitle: string;
    contactBody: string;
  };
  training: {
    intro: string;
    groupsTitle: string;
    groups: NamedItem[];
    timetableTitle: string;
    colDay: string;
    colVenue: string;
    colSessions: string;
    timetable: TimetableRow[];
    timetableNote: string;
    venuesTitle: string;
    venues: Venue[];
    mapLabel: string;
  };
  about: {
    intro: string;
    virtuesTitle: string;
    virtues: NamedItem[];
    rulesTitle: string;
    rulesIntro: string;
    rules: string[];
  };
}

export const content: Record<Lang, PageContent> = {
  en: {
    home: {
      newsBanner:
        'All groups are full for the 2025/26 season. Registrations for the 2026/27 season open in August 2026.',
      trialTitle: 'Try us out — 3 free sessions',
      trialBody:
        'Come to us, have fun, make new friends and get rid of your stress! Everyone gets 3 free training sessions to check out the club before signing up.',
    },
    join: {
      intro:
        'New members are always welcome. Everyone gets 3 free training sessions to try the club before deciding to join.',
      signupTitle: 'How to sign up',
      signupBody:
        'Registration is handled through SPOND. Create your account and complete the sign-up form using the button below.',
      signupButton: 'Sign up on SPOND',
      feesTitle: 'Membership fees',
      fees: [
        { label: 'Annual membership', amount: '€320' },
        { label: 'LTF license incl. insurance (2025)', amount: '€30' },
        { label: 'Account set-up fee', amount: '€8' },
      ],
      feesNote: 'The annual fee and the license fee cannot be reimbursed.',
      medicalTitle: 'Sports medical check',
      medicalBody:
        'A sports medical check (contrôle médico-sportif) is mandatory for athletes obtaining or renewing a federation license. The first examination is required at age 7, then at ages 12, 15, 20, 30, 40 and 50.',
      medicalLink: 'Book a medical appointment',
      ageTitle: 'Minimum age',
      ageBody:
        'The minimum age is 5. In exceptional cases we accept 4-year-olds who follow instructions well and are mature for their age, with board approval.',
      liability: 'All participants take part in our sessions at their own risk.',
      contactTitle: 'Questions?',
      contactBody: 'Get in touch with the board at',
    },
    training: {
      intro:
        'We train several groups by age and level, at two venues in Junglinster. Below are our groups and the weekly timetable.',
      groupsTitle: 'Our groups',
      groups: [
        { name: 'Tigeren', desc: 'Children, ages 6–8' },
        { name: 'Kobraen', desc: 'Children, ages 9–11' },
        { name: 'Draachen', desc: 'Teenagers, 12 and up' },
        { name: 'Adults', desc: 'Adults, 15 and up' },
      ],
      timetableTitle: 'Weekly timetable',
      colDay: 'Day',
      colVenue: 'Venue',
      colSessions: 'Sessions',
      timetable: [
        {
          day: 'Monday',
          venue: 'Lënster Lycée',
          sessions: 'Poomsae 18:00–19:00 · Body Combat 19:00–20:00',
        },
        {
          day: 'Tuesday',
          venue: 'Op Freinen',
          sessions:
            'Tigeren 17:00–18:00 · Kobraen 18:00–19:00 · Draachen 19:00–20:00 · Draachen extra 19:00–21:00',
        },
        {
          day: 'Thursday',
          venue: 'Op Freinen',
          sessions:
            'Tigeren 17:00–18:00 · Kobraen 18:00–19:00 · Draachen 19:00–20:00 · Draachen extra 19:00–21:00',
        },
        {
          day: 'Saturday',
          venue: 'Op Freinen',
          sessions: '10:00–12:00 (competitors)',
        },
      ],
      timetableNote:
        'Saturday morning is for competitors. New to the club? Your first three sessions are free — come along and find your group.',
      venuesTitle: 'Where we train',
      venues: [
        {
          name: 'Op Freinen',
          desc: 'Main training hall (Tuesday, Thursday, Saturday).',
          map: links.opFreinenMap,
        },
        { name: 'Lënster Lycée', desc: 'Monday sessions.' },
      ],
      mapLabel: 'Open in Google Maps',
    },
    about: {
      intro:
        'TKD Junglinster is a Taekwondo club in Junglinster, Luxembourg, welcoming children and adults of all levels. Taekwondo is more than a sport: it builds discipline, respect and self-confidence. These values guide everything we do in the dojang.',
      virtuesTitle: 'The five virtues',
      virtues: [
        { name: 'Perseverance', desc: 'Enduring physical and mental challenges and never giving up.' },
        { name: 'Courage', desc: 'Facing difficult opponents and our own limits.' },
        { name: 'Courtesy', desc: 'Combining humility with respect for others.' },
        { name: 'Justice', desc: 'Caring for others before ourselves.' },
        { name: 'Volunteering', desc: 'Supporting and serving others, in the club and beyond.' },
      ],
      rulesTitle: 'Dojang etiquette',
      rulesIntro:
        'A few simple rules keep our dojang safe and respectful for everyone:',
      rules: [
        'Arrive 5 minutes early — our sessions start on time.',
        'Bow when you enter and leave the dojang.',
        'Greet your training partners and coaches.',
        'No jewelry of any kind — this applies especially to piercings.',
        'Tie up long hair.',
        'No swearing — the dojang is a place of respect.',
        'Wear a clean, pressed dobok (uniform).',
        'Train barefoot or in taekwondo shoes — no ordinary sneakers, they cause injuries.',
      ],
    },
  },

  fr: {
    home: {
      newsBanner:
        'Tous les groupes sont complets pour la saison 2025/26. Les inscriptions pour la saison 2026/27 ouvriront en août 2026.',
      trialTitle: 'Faites un essai — 3 séances gratuites',
      trialBody:
        'Venez chez nous, amusez-vous, faites de nouvelles rencontres et évacuez votre stress ! Chacun bénéficie de 3 séances d’entraînement gratuites pour découvrir le club avant de s’inscrire.',
    },
    join: {
      intro:
        'Les nouveaux membres sont toujours les bienvenus. Chacun bénéficie de 3 séances d’entraînement gratuites pour essayer le club avant de s’inscrire.',
      signupTitle: 'Comment s’inscrire',
      signupBody:
        'Les inscriptions se font via SPOND. Créez votre compte et remplissez le formulaire d’inscription à l’aide du bouton ci-dessous.',
      signupButton: 'S’inscrire sur SPOND',
      feesTitle: 'Cotisations',
      fees: [
        { label: 'Cotisation annuelle', amount: '320 €' },
        { label: 'Licence LTF avec assurance (2025)', amount: '30 €' },
        { label: 'Frais d’ouverture de compte', amount: '8 €' },
      ],
      feesNote:
        'La cotisation annuelle ainsi que la licence ne sont pas remboursables.',
      medicalTitle: 'Contrôle médico-sportif',
      medicalBody:
        'Un contrôle médico-sportif est obligatoire pour les athlètes qui obtiennent ou renouvellent une licence fédérale. Le premier examen est requis à 7 ans, puis à 12, 15, 20, 30, 40 et 50 ans.',
      medicalLink: 'Prendre un rendez-vous médical',
      ageTitle: 'Âge minimum',
      ageBody:
        'L’âge minimum est de 5 ans. À titre exceptionnel, nous acceptons les enfants de 4 ans qui suivent bien les consignes et sont mûrs pour leur âge, avec l’accord du comité.',
      liability:
        'Tous les participants prennent part à nos séances à leurs propres risques.',
      contactTitle: 'Des questions ?',
      contactBody: 'Contactez le comité à l’adresse',
    },
    training: {
      intro:
        'Nous entraînons plusieurs groupes selon l’âge et le niveau, sur deux sites à Junglinster. Voici nos groupes et l’horaire hebdomadaire.',
      groupsTitle: 'Nos groupes',
      groups: [
        { name: 'Tigeren', desc: 'Enfants, 6–8 ans' },
        { name: 'Kobraen', desc: 'Enfants, 9–11 ans' },
        { name: 'Draachen', desc: 'Adolescents, 12 ans et plus' },
        { name: 'Adultes', desc: 'Adultes, 15 ans et plus' },
      ],
      timetableTitle: 'Horaire hebdomadaire',
      colDay: 'Jour',
      colVenue: 'Lieu',
      colSessions: 'Séances',
      timetable: [
        {
          day: 'Lundi',
          venue: 'Lënster Lycée',
          sessions: 'Poomsae 18:00–19:00 · Body Combat 19:00–20:00',
        },
        {
          day: 'Mardi',
          venue: 'Op Freinen',
          sessions:
            'Tigeren 17:00–18:00 · Kobraen 18:00–19:00 · Draachen 19:00–20:00 · Draachen extra 19:00–21:00',
        },
        {
          day: 'Jeudi',
          venue: 'Op Freinen',
          sessions:
            'Tigeren 17:00–18:00 · Kobraen 18:00–19:00 · Draachen 19:00–20:00 · Draachen extra 19:00–21:00',
        },
        {
          day: 'Samedi',
          venue: 'Op Freinen',
          sessions: '10:00–12:00 (compétiteurs)',
        },
      ],
      timetableNote:
        'Le samedi matin est réservé aux compétiteurs. Nouveau au club ? Vos trois premières séances sont gratuites — venez trouver votre groupe.',
      venuesTitle: 'Où nous nous entraînons',
      venues: [
        {
          name: 'Op Freinen',
          desc: 'Salle d’entraînement principale (mardi, jeudi, samedi).',
          map: links.opFreinenMap,
        },
        { name: 'Lënster Lycée', desc: 'Séances du lundi.' },
      ],
      mapLabel: 'Ouvrir dans Google Maps',
    },
    about: {
      intro:
        'Le TKD Junglinster est un club de Taekwondo à Junglinster, au Luxembourg, ouvert aux enfants et aux adultes de tous niveaux. Le Taekwondo est plus qu’un sport : il développe la discipline, le respect et la confiance en soi. Ces valeurs guident tout ce que nous faisons dans le dojang.',
      virtuesTitle: 'Les cinq vertus',
      virtues: [
        { name: 'Persévérance', desc: 'Endurer les défis physiques et mentaux et ne jamais abandonner.' },
        { name: 'Courage', desc: 'Affronter des adversaires difficiles et ses propres limites.' },
        { name: 'Courtoisie', desc: 'Allier l’humilité au respect des autres.' },
        { name: 'Justice', desc: 'Se soucier des autres avant soi-même.' },
        { name: 'Bénévolat', desc: 'Soutenir et servir les autres, au club et au-delà.' },
      ],
      rulesTitle: 'Étiquette du dojang',
      rulesIntro:
        'Quelques règles simples permettent de garder notre dojang sûr et respectueux pour tous :',
      rules: [
        'Arrivez 5 minutes en avance — nos séances commencent à l’heure.',
        'Saluez en entrant et en sortant du dojang.',
        'Saluez vos partenaires d’entraînement et vos entraîneurs.',
        'Aucun bijou — cela vaut tout particulièrement pour les piercings.',
        'Attachez les cheveux longs.',
        'Pas de grossièretés — le dojang est un lieu de respect.',
        'Portez un dobok (tenue) propre et repassé.',
        'Entraînez-vous pieds nus ou en chaussures de taekwondo — pas de baskets ordinaires, elles provoquent des blessures.',
      ],
    },
  },

  de: {
    home: {
      newsBanner:
        'Alle Gruppen sind für die Saison 2025/26 ausgebucht. Die Anmeldung für die Saison 2026/27 beginnt im August 2026.',
      trialTitle: 'Probieren Sie es aus — 3 kostenlose Einheiten',
      trialBody:
        'Komm zu uns, hab Spaß, finde neue Freunde und bau deinen Stress ab! Jede(r) erhält 3 kostenlose Trainingseinheiten, um den Verein vor der Anmeldung kennenzulernen.',
    },
    join: {
      intro:
        'Neue Mitglieder sind immer willkommen. Jede(r) erhält 3 kostenlose Trainingseinheiten, um den Verein auszuprobieren, bevor man sich anmeldet.',
      signupTitle: 'So melden Sie sich an',
      signupBody:
        'Die Anmeldung erfolgt über SPOND. Erstellen Sie Ihr Konto und füllen Sie das Anmeldeformular über die Schaltfläche unten aus.',
      signupButton: 'Auf SPOND anmelden',
      feesTitle: 'Mitgliedsbeiträge',
      fees: [
        { label: 'Jahresbeitrag', amount: '320 €' },
        { label: 'LTF-Lizenz inkl. Versicherung (2025)', amount: '30 €' },
        { label: 'Kontoeinrichtungsgebühr', amount: '8 €' },
      ],
      feesNote:
        'Der Jahresbeitrag sowie die Lizenzgebühr können nicht erstattet werden.',
      medicalTitle: 'Sportmedizinische Untersuchung',
      medicalBody:
        'Eine sportmedizinische Untersuchung (contrôle médico-sportif) ist für Athleten verpflichtend, die eine Verbandslizenz erhalten oder verlängern. Die erste Untersuchung ist mit 7 Jahren erforderlich, danach mit 12, 15, 20, 30, 40 und 50 Jahren.',
      medicalLink: 'Einen medizinischen Termin buchen',
      ageTitle: 'Mindestalter',
      ageBody:
        'Das Mindestalter beträgt 5 Jahre. In Ausnahmefällen nehmen wir Kinder mit 4 Jahren auf, die Anweisungen gut befolgen und für ihr Alter reif sind, mit Zustimmung des Vorstands.',
      liability:
        'Alle Teilnehmer nehmen auf eigene Gefahr an unseren Einheiten teil.',
      contactTitle: 'Fragen?',
      contactBody: 'Wenden Sie sich an den Vorstand unter',
    },
    training: {
      intro:
        'Wir trainieren mehrere Gruppen nach Alter und Niveau an zwei Standorten in Junglinster. Nachfolgend finden Sie unsere Gruppen und den Wochenplan.',
      groupsTitle: 'Unsere Gruppen',
      groups: [
        { name: 'Tigeren', desc: 'Kinder, 6–8 Jahre' },
        { name: 'Kobraen', desc: 'Kinder, 9–11 Jahre' },
        { name: 'Draachen', desc: 'Jugendliche, ab 12 Jahren' },
        { name: 'Erwachsene', desc: 'Erwachsene, ab 15 Jahren' },
      ],
      timetableTitle: 'Wochenplan',
      colDay: 'Tag',
      colVenue: 'Ort',
      colSessions: 'Einheiten',
      timetable: [
        {
          day: 'Montag',
          venue: 'Lënster Lycée',
          sessions: 'Poomsae 18:00–19:00 · Body Combat 19:00–20:00',
        },
        {
          day: 'Dienstag',
          venue: 'Op Freinen',
          sessions:
            'Tigeren 17:00–18:00 · Kobraen 18:00–19:00 · Draachen 19:00–20:00 · Draachen extra 19:00–21:00',
        },
        {
          day: 'Donnerstag',
          venue: 'Op Freinen',
          sessions:
            'Tigeren 17:00–18:00 · Kobraen 18:00–19:00 · Draachen 19:00–20:00 · Draachen extra 19:00–21:00',
        },
        {
          day: 'Samstag',
          venue: 'Op Freinen',
          sessions: '10:00–12:00 (Wettkämpfer)',
        },
      ],
      timetableNote:
        'Samstagvormittag ist für Wettkämpfer. Neu im Verein? Ihre ersten drei Einheiten sind kostenlos — kommen Sie vorbei und finden Sie Ihre Gruppe.',
      venuesTitle: 'Wo wir trainieren',
      venues: [
        {
          name: 'Op Freinen',
          desc: 'Haupttrainingshalle (Dienstag, Donnerstag, Samstag).',
          map: links.opFreinenMap,
        },
        { name: 'Lënster Lycée', desc: 'Montagseinheiten.' },
      ],
      mapLabel: 'In Google Maps öffnen',
    },
    about: {
      intro:
        'Der TKD Junglinster ist ein Taekwondo-Verein in Junglinster, Luxemburg, der Kinder und Erwachsene aller Niveaus willkommen heißt. Taekwondo ist mehr als ein Sport: Es fördert Disziplin, Respekt und Selbstvertrauen. Diese Werte leiten alles, was wir im Dojang tun.',
      virtuesTitle: 'Die fünf Tugenden',
      virtues: [
        { name: 'Ausdauer', desc: 'Körperliche und geistige Herausforderungen meistern und niemals aufgeben.' },
        { name: 'Mut', desc: 'Schwierigen Gegnern und den eigenen Grenzen begegnen.' },
        { name: 'Höflichkeit', desc: 'Demut mit Respekt für andere verbinden.' },
        { name: 'Gerechtigkeit', desc: 'Sich um andere kümmern, bevor man an sich selbst denkt.' },
        { name: 'Engagement', desc: 'Andere unterstützen und ihnen dienen, im Verein und darüber hinaus.' },
      ],
      rulesTitle: 'Dojang-Etikette',
      rulesIntro:
        'Ein paar einfache Regeln sorgen dafür, dass unser Dojang für alle sicher und respektvoll bleibt:',
      rules: [
        'Kommen Sie 5 Minuten früher — unsere Einheiten beginnen pünktlich.',
        'Verbeugen Sie sich beim Betreten und Verlassen des Dojang.',
        'Begrüßen Sie Ihre Trainingspartner und Trainer.',
        'Kein Schmuck jeglicher Art — das gilt besonders für Piercings.',
        'Binden Sie lange Haare zusammen.',
        'Kein Fluchen — das Dojang ist ein Ort des Respekts.',
        'Tragen Sie einen sauberen, gebügelten Dobok (Anzug).',
        'Trainieren Sie barfuß oder in Taekwondo-Schuhen — keine normalen Turnschuhe, sie führen zu Verletzungen.',
      ],
    },
  },
};
