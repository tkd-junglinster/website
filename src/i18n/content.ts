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
  medical: 'https://sports.public.lu/fr/programs/medico-sportif.html',
  opFreinenMap: 'https://maps.app.goo.gl/58qX6RDSrLi1TZf38',
  lensterLyceeMap:
    'https://www.google.com/maps/search/?api=1&query=L%C3%ABnster%20Lyc%C3%A9e%20Junglinster',
  email: 'info@tkd-junglinster.lu',
} as const;

/**
 * Master switch for new-member sign-ups.
 *
 * Set to `true` when registration opens (around August) and back to `false`
 * when the club is full again. This single flag controls every "Join us" /
 * sign-up button across the site (home hero, home "Join the club" section, and
 * the Join page). The friendly welcome text stays the same in both states.
 */
export const registrationOpen = false;

interface Fee {
  label: string;
  amount: string;
}
interface Stat {
  /** Short headline, e.g. "Since 2000" or "80+". */
  stat: string;
  /** Supporting line under the headline. */
  label: string;
}
interface SeasonBlock {
  title: string;
  body: string;
  /** Shown when registration is closed, in place of the sign-up button. */
  closedNote: string;
}
interface NamedItem {
  name: string;
  desc: string;
}
interface TimetableRow {
  day: string;
  venue: string;
  /** One entry per session, time first (e.g. "18:00–19:00 Poomsae"). */
  sessions: string[];
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
    heroStatusClosed: string;
    season: SeasonBlock;
    facts: Stat[];
  };
  join: {
    intro: string;
    signupTitle: string;
    signupBody: string;
    signupButton: string;
    signupClosed: string;
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
    venuesTitle: string;
    venues: Venue[];
    mapLabel: string;
  };
  about: {
    intro: string;
    storyTitle: string;
    story: string[];
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
      heroStatusClosed: 'Sign-ups open in August',
      season: {
        title: 'Join the club',
        body: 'We’re a friendly, established club and we welcome new members every year. Everyone who joins gets 3 free trial sessions to try us out. Sign-ups open in August and the new season starts in September.',
        closedNote:
          'Registrations for the 2026/27 season aren’t open yet — they open in August 2026. Get in touch any time and we’ll let you know when places are available:',
      },
      facts: [
        { stat: 'Since 2000', label: '25+ years of Taekwondo in Junglinster' },
        { stat: 'Licensed', label: 'Coaches licensed by the Luxembourg Taekwondo Federation' },
        { stat: '80+', label: 'Members, from age 6 to adult' },
      ],
    },
    join: {
      intro:
        'Each year we welcome new members to the club. Sign-ups open in August and the new season starts in September. Everyone who joins gets 3 free trial sessions to try us out.',
      signupTitle: 'How to sign up',
      signupBody:
        'Registration is handled through SPOND. Create your account and complete the sign-up form using the button below.',
      signupButton: 'Sign up on SPOND',
      signupClosed:
        'Registrations for the 2026/27 season open in August 2026. Get in touch and we’ll let you know as soon as places are available:',
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
      ],
      timetableTitle: 'Weekly timetable',
      colDay: 'Day',
      colVenue: 'Venue',
      colSessions: 'Sessions',
      timetable: [
        {
          day: 'Monday',
          venue: 'Lënster Lycée',
          sessions: ['18:00–19:00 Poomsae', '19:00–20:00 Body Combat'],
        },
        {
          day: 'Tuesday',
          venue: 'Op Freinen',
          sessions: [
            '17:00–18:00 Tigeren',
            '18:00–19:00 Kobraen',
            '19:00–20:30 Draachen',
          ],
        },
        {
          day: 'Thursday',
          venue: 'Op Freinen',
          sessions: [
            '17:00–18:00 Tigeren',
            '18:00–19:00 Kobraen',
            '19:00–20:30 Draachen',
          ],
        },
        {
          day: 'Saturday',
          venue: 'Op Freinen',
          sessions: ['10:00–12:00 Competitors'],
        },
      ],
      venuesTitle: 'Where we train',
      venues: [
        {
          name: 'Op Freinen',
          desc: 'Main training hall (Tuesday, Thursday, Saturday).',
          map: links.opFreinenMap,
        },
        {
          name: 'Lënster Lycée',
          desc: 'Monday sessions.',
          map: links.lensterLyceeMap,
        },
      ],
      mapLabel: 'Open in Google Maps',
    },
    about: {
      intro:
        'TKD Junglinster is a Taekwondo club in Junglinster, Luxembourg, welcoming children and adults of all levels. Taekwondo is more than a sport: it builds discipline, respect and self-confidence. These values guide everything we do in the dojang.',
      storyTitle: 'Our story',
      story: [
        'The club was founded in Junglinster in April 2000 by a small group of enthusiastic athletes. What began as a modest experiment has grown into an established martial arts community, with members ranging from children aged 6 to adults, of all ages and levels.',
        'Training takes place up to four days a week across multiple groups, structured to suit different ages and abilities. We primarily train in the “op Fréinen” sports hall in Junglinster, but also use Lënster Lycée.',
        'Belt gradings are held twice a year, giving members a regular opportunity to demonstrate their progress.',
        'Our programme is grounded in World Taekwondo and Kukkiwon tradition. Sessions cover technique, fitness, body control, and discipline, with regular work on self-defence, sparring, one-step sparring, and Poomsae.',
        'Beyond training, the club organises social events and camps throughout the season. We take pride in the atmosphere we have built: one that is welcoming, serious about the art, and genuinely enjoyable to be part of.',
        'We expect all members to conduct themselves with respect toward fellow athletes, coaches, and the spirit of the martial art. Anyone who fails to do so will not remain a member of the club.',
      ],
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
      heroStatusClosed: 'Inscriptions en août',
      season: {
        title: 'Rejoindre le club',
        body: 'Nous sommes un club convivial et établi, et nous accueillons de nouveaux membres chaque année. Chaque nouveau membre bénéficie de 3 séances d’essai gratuites pour nous découvrir. Les inscriptions ouvrent en août et la nouvelle saison commence en septembre.',
        closedNote:
          'Les inscriptions pour la saison 2026/27 ne sont pas encore ouvertes — elles ouvriront en août 2026. Contactez-nous à tout moment et nous vous préviendrons dès que des places seront disponibles :',
      },
      facts: [
        { stat: 'Depuis 2000', label: 'Plus de 25 ans de Taekwondo à Junglinster' },
        { stat: 'Diplômés', label: 'Entraîneurs licenciés par la Luxembourg Taekwondo Federation' },
        { stat: '80+', label: 'Membres, dès 6 ans et adultes' },
      ],
    },
    join: {
      intro:
        'Chaque année, nous accueillons de nouveaux membres au club. Les inscriptions ouvrent en août et la nouvelle saison commence en septembre. Chaque nouveau membre bénéficie de 3 séances d’essai gratuites pour nous découvrir.',
      signupTitle: 'Comment s’inscrire',
      signupBody:
        'Les inscriptions se font via SPOND. Créez votre compte et remplissez le formulaire d’inscription à l’aide du bouton ci-dessous.',
      signupButton: 'S’inscrire sur SPOND',
      signupClosed:
        'Les inscriptions pour la saison 2026/27 ouvriront en août 2026. Contactez-nous et nous vous préviendrons dès que des places seront disponibles :',
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
      ],
      timetableTitle: 'Horaire hebdomadaire',
      colDay: 'Jour',
      colVenue: 'Lieu',
      colSessions: 'Séances',
      timetable: [
        {
          day: 'Lundi',
          venue: 'Lënster Lycée',
          sessions: ['18:00–19:00 Poomsae', '19:00–20:00 Body Combat'],
        },
        {
          day: 'Mardi',
          venue: 'Op Freinen',
          sessions: [
            '17:00–18:00 Tigeren',
            '18:00–19:00 Kobraen',
            '19:00–20:30 Draachen',
          ],
        },
        {
          day: 'Jeudi',
          venue: 'Op Freinen',
          sessions: [
            '17:00–18:00 Tigeren',
            '18:00–19:00 Kobraen',
            '19:00–20:30 Draachen',
          ],
        },
        {
          day: 'Samedi',
          venue: 'Op Freinen',
          sessions: ['10:00–12:00 Compétiteurs'],
        },
      ],
      venuesTitle: 'Où nous nous entraînons',
      venues: [
        {
          name: 'Op Freinen',
          desc: 'Salle d’entraînement principale (mardi, jeudi, samedi).',
          map: links.opFreinenMap,
        },
        {
          name: 'Lënster Lycée',
          desc: 'Séances du lundi.',
          map: links.lensterLyceeMap,
        },
      ],
      mapLabel: 'Ouvrir dans Google Maps',
    },
    about: {
      intro:
        'Le TKD Junglinster est un club de Taekwondo à Junglinster, au Luxembourg, ouvert aux enfants et aux adultes de tous niveaux. Le Taekwondo est plus qu’un sport : il développe la discipline, le respect et la confiance en soi. Ces valeurs guident tout ce que nous faisons dans le dojang.',
      storyTitle: 'Notre histoire',
      story: [
        'Le club a été fondé à Junglinster en avril 2000 par un petit groupe de sportifs passionnés. Ce qui a commencé comme une modeste expérience est devenu une communauté d’arts martiaux bien établie, avec des membres allant des enfants à partir de 6 ans jusqu’aux adultes, de tous âges et de tous niveaux.',
        'Les entraînements ont lieu jusqu’à quatre jours par semaine, répartis en plusieurs groupes structurés selon l’âge et le niveau. Nous nous entraînons principalement dans la salle sportive « op Fréinen » à Junglinster, mais utilisons également le Lënster Lycée.',
        'Les passages de ceinture ont lieu deux fois par an, offrant aux membres l’occasion de démontrer régulièrement leurs progrès.',
        'Notre programme s’inscrit dans la tradition de World Taekwondo et du Kukkiwon. Les séances couvrent la technique, la condition physique, la maîtrise du corps et la discipline, avec un travail régulier sur la self-défense, le combat, le combat en un pas et le Poomsae.',
        'Au-delà de l’entraînement, le club organise des événements sociaux et des stages tout au long de la saison. Nous sommes fiers de l’atmosphère que nous avons construite : un environnement accueillant, sérieux dans sa pratique des arts martiaux, et où il fait vraiment bon se retrouver.',
        'Nous attendons de tous les membres qu’ils fassent preuve de respect envers leurs camarades, les entraîneurs et l’esprit de l’art martial. Toute personne ne respectant pas ces valeurs ne pourra pas rester membre du club.',
      ],
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
      heroStatusClosed: 'Anmeldung im August',
      season: {
        title: 'Dem Verein beitreten',
        body: 'Wir sind ein freundlicher, etablierter Verein und heißen jedes Jahr neue Mitglieder willkommen. Jedes neue Mitglied erhält 3 kostenlose Schnuppertrainings, um uns kennenzulernen. Die Anmeldung beginnt im August und die neue Saison startet im September.',
        closedNote:
          'Die Anmeldung für die Saison 2026/27 ist noch nicht geöffnet — sie beginnt im August 2026. Melden Sie sich jederzeit bei uns, und wir informieren Sie, sobald Plätze verfügbar sind:',
      },
      facts: [
        { stat: 'Seit 2000', label: 'Über 25 Jahre Taekwondo in Junglinster' },
        { stat: 'Lizenziert', label: 'Trainer lizenziert von der Luxembourg Taekwondo Federation' },
        { stat: '80+', label: 'Mitglieder, ab 6 Jahren bis Erwachsene' },
      ],
    },
    join: {
      intro:
        'Jedes Jahr heißen wir neue Mitglieder im Verein willkommen. Die Anmeldung beginnt im August und die neue Saison startet im September. Jedes neue Mitglied erhält 3 kostenlose Schnuppertrainings, um uns kennenzulernen.',
      signupTitle: 'So melden Sie sich an',
      signupBody:
        'Die Anmeldung erfolgt über SPOND. Erstellen Sie Ihr Konto und füllen Sie das Anmeldeformular über die Schaltfläche unten aus.',
      signupButton: 'Auf SPOND anmelden',
      signupClosed:
        'Die Anmeldung für die Saison 2026/27 beginnt im August 2026. Melden Sie sich bei uns, und wir informieren Sie, sobald Plätze verfügbar sind:',
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
      ],
      timetableTitle: 'Wochenplan',
      colDay: 'Tag',
      colVenue: 'Ort',
      colSessions: 'Einheiten',
      timetable: [
        {
          day: 'Montag',
          venue: 'Lënster Lycée',
          sessions: ['18:00–19:00 Poomsae', '19:00–20:00 Body Combat'],
        },
        {
          day: 'Dienstag',
          venue: 'Op Freinen',
          sessions: [
            '17:00–18:00 Tigeren',
            '18:00–19:00 Kobraen',
            '19:00–20:30 Draachen',
          ],
        },
        {
          day: 'Donnerstag',
          venue: 'Op Freinen',
          sessions: [
            '17:00–18:00 Tigeren',
            '18:00–19:00 Kobraen',
            '19:00–20:30 Draachen',
          ],
        },
        {
          day: 'Samstag',
          venue: 'Op Freinen',
          sessions: ['10:00–12:00 Wettkämpfer'],
        },
      ],
      venuesTitle: 'Wo wir trainieren',
      venues: [
        {
          name: 'Op Freinen',
          desc: 'Haupttrainingshalle (Dienstag, Donnerstag, Samstag).',
          map: links.opFreinenMap,
        },
        {
          name: 'Lënster Lycée',
          desc: 'Montagseinheiten.',
          map: links.lensterLyceeMap,
        },
      ],
      mapLabel: 'In Google Maps öffnen',
    },
    about: {
      intro:
        'Der TKD Junglinster ist ein Taekwondo-Verein in Junglinster, Luxemburg, der Kinder und Erwachsene aller Niveaus willkommen heißt. Taekwondo ist mehr als ein Sport: Es fördert Disziplin, Respekt und Selbstvertrauen. Diese Werte leiten alles, was wir im Dojang tun.',
      storyTitle: 'Unsere Geschichte',
      story: [
        'Der Verein wurde im April 2000 in Junglinster von einer kleinen Gruppe begeisterter Sportler gegründet. Was als bescheidenes Experiment begann, hat sich zu einer etablierten Kampfsportgemeinschaft entwickelt, mit Mitgliedern von Kindern ab 6 Jahren bis hin zu Erwachsenen aller Altersgruppen und Niveaus.',
        'Das Training findet an bis zu vier Tagen pro Woche in mehreren Gruppen statt, die nach Alter und Können strukturiert sind. Wir trainieren hauptsächlich in der Sporthalle „op Fréinen“ in Junglinster, nutzen aber auch das Lënster Lycée.',
        'Gürtelprüfungen werden zweimal jährlich abgehalten und geben den Mitgliedern regelmäßig die Möglichkeit, ihre Fortschritte unter Beweis zu stellen.',
        'Unser Programm basiert auf der Tradition von World Taekwondo und Kukkiwon. Die Trainingseinheiten umfassen Technik, Kondition, Körperbeherrschung und Disziplin, mit regelmäßiger Arbeit an Selbstverteidigung, Kampf, Ein-Schritt-Kampf und Poomsae.',
        'Neben dem Training organisiert der Verein während der Saison gesellschaftliche Veranstaltungen und Camps. Wir sind stolz auf die Atmosphäre, die wir aufgebaut haben: eine Gemeinschaft, die offen und herzlich ist, die Kampfkunst ernst nimmt und in der man wirklich gerne dabei ist.',
        'Wir erwarten von allen Mitgliedern, dass sie ihren Mitsportlern, den Trainern und dem Geist der Kampfkunst gegenüber respektvoll auftreten. Wer dem nicht nachkommt, wird den Verein verlassen müssen.',
      ],
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
