// Translation dictionary for the whole site.
//
// HOW TO EDIT TEXT:
//   - Find the key you want to change (e.g. 'home.hero.title').
//   - Edit the text for each of the three languages: fr (French),
//     en (English), de (German).
//   - Keep the keys identical across all three languages.
//
// English is the default language. If a key is missing in fr/de, the English
// text is shown as a fallback.

export const languages = {
  en: 'English',
  fr: 'Français',
  de: 'Deutsch',
} as const;

export const defaultLang = 'en';

export const ui = {
  fr: {
    'site.title': 'TKD Junglinster',
    'site.tagline': 'Club de Taekwondo',
    'site.description':
      'Club de Taekwondo à Junglinster pour enfants et adultes. Cours, horaires et inscriptions.',

    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.join': 'Nous rejoindre',
    'nav.training': 'Entraînement',
    'nav.competitions': 'Compétitions',
    'nav.calendar': 'Calendrier',
    'nav.news': 'Actualités',

    'home.hero.title': 'Bienvenue au TKD Junglinster',
    'home.hero.subtitle':
      'Le Taekwondo pour enfants et adultes, dans une ambiance conviviale et professionnelle.',
    'home.cta': 'Nous rejoindre',
    'home.cta.band': 'Prêt à commencer le Taekwondo ?',
    'home.welcome.title': 'Notre club',
    'home.welcome.body':
      'Le TKD Junglinster est un club de Taekwondo convivial à Junglinster, ouvert aux enfants et aux adultes de tous niveaux. Le Taekwondo développe la discipline, le respect et la confiance en soi — et c’est très amusant. Venez vous entraîner avec nous.',
    'page.comingSoon': 'Cette page sera bientôt disponible.',

    'comp.intro':
      'Les compétitions à venir au Luxembourg et dans les pays voisins (Belgique, France, Allemagne). Cliquez sur une compétition pour vous inscrire.',
    'comp.note':
      "Vérifiez toujours les détails et les délais d'inscription sur la page de l'événement.",
    'comp.source':
      'Compétitions compilées depuis martial.events et la Luxembourg Taekwondo Federation, puis validées par le club avant publication.',
    'comp.register': "S'inscrire",
    'comp.details': "Plus d'infos",
    'comp.empty': 'Aucune compétition à venir pour le moment. Revenez bientôt !',
    'comp.country.LU': 'Luxembourg',
    'comp.country.BE': 'Belgique',
    'comp.country.FR': 'France',
    'comp.country.DE': 'Allemagne',

    'events.intro':
      'Le calendrier de la saison : les rendez-vous auxquels nous attendons nos membres — stages, passages de grade, événements du club et fêtes locales. Cliquez sur un événement pour en savoir plus.',
    'events.empty': 'Aucun événement programmé pour le moment. Revenez bientôt !',
    'event.learnMore': 'En savoir plus',
    'event.back': '← Tous les événements',
    'event.links': 'Participer',
    'event.featured': 'À ne pas manquer',
    'event.tentative': 'Date provisoire',
    'event.type.camp': 'Stage',
    'event.type.competition': 'Compétition',
    'event.type.grading': 'Passage de grade',
    'event.type.social': 'Convivialité',
    'event.type.other': 'Autre',

    'footer.tagline': 'Club de Taekwondo à Junglinster, Luxembourg',
    'footer.rights': 'Tous droits réservés.',
  },
  en: {
    'site.title': 'TKD Junglinster',
    'site.tagline': 'Taekwondo Club',
    'site.description':
      'Taekwondo club in Junglinster for children and adults. Classes, timetable and sign-up.',

    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.join': 'Join us',
    'nav.training': 'Training',
    'nav.competitions': 'Competitions',
    'nav.calendar': 'Calendar',
    'nav.news': 'News & gallery',

    'home.hero.title': 'Welcome to TKD Junglinster',
    'home.hero.subtitle':
      'Taekwondo for children and adults, in a friendly and professional setting.',
    'home.cta': 'Join us',
    'home.cta.band': 'Ready to start Taekwondo?',
    'home.welcome.title': 'Our club',
    'home.welcome.body':
      'TKD Junglinster is a friendly Taekwondo club in Junglinster, welcoming children and adults of all levels. Taekwondo builds discipline, respect and confidence — and it’s a lot of fun. Come and train with us.',

    'page.comingSoon': 'This page is coming soon.',

    'comp.intro':
      'Upcoming competitions in Luxembourg and neighbouring countries (Belgium, France, Germany). Click a competition to register.',
    'comp.note':
      'Always check the details and registration deadlines on the event page.',
    'comp.source':
      'Competitions compiled from martial.events and the Luxembourg Taekwondo Federation, then reviewed by the club before publishing.',
    'comp.register': 'Register',
    'comp.details': 'More info',
    'comp.empty': 'No upcoming competitions right now. Check back soon!',
    'comp.country.LU': 'Luxembourg',
    'comp.country.BE': 'Belgium',
    'comp.country.FR': 'France',
    'comp.country.DE': 'Germany',

    'events.intro':
      'The season at a glance — the dates we hope to see our members at: camps, gradings, club events and local festivals. Click an event to find out more.',
    'events.empty': 'No events scheduled yet. Check back soon!',
    'event.learnMore': 'Learn more',
    'event.back': '← All events',
    'event.links': 'Take part',
    'event.featured': "Don't miss",
    'event.tentative': 'Tentative date',
    'event.type.camp': 'Camp',
    'event.type.competition': 'Competition',
    'event.type.grading': 'Grading',
    'event.type.social': 'Social',
    'event.type.other': 'Other',

    'footer.tagline': 'Taekwondo club in Junglinster, Luxembourg',
    'footer.rights': 'All rights reserved.',
  },
  de: {
    'site.title': 'TKD Junglinster',
    'site.tagline': 'Taekwondo-Verein',
    'site.description':
      'Taekwondo-Verein in Junglinster für Kinder und Erwachsene. Kurse, Trainingszeiten und Anmeldung.',

    'nav.home': 'Startseite',
    'nav.about': 'Über uns',
    'nav.join': 'Mitmachen',
    'nav.training': 'Training',
    'nav.competitions': 'Wettkämpfe',
    'nav.calendar': 'Kalender',
    'nav.news': 'Aktuelles',

    'home.hero.title': 'Willkommen beim TKD Junglinster',
    'home.hero.subtitle':
      'Taekwondo für Kinder und Erwachsene, in freundlicher und professioneller Atmosphäre.',
    'home.cta': 'Mitmachen',
    'home.cta.band': 'Bereit, mit Taekwondo zu starten?',
    'home.welcome.title': 'Unser Verein',
    'home.welcome.body':
      'Der TKD Junglinster ist ein freundlicher Taekwondo-Verein in Junglinster, der Kinder und Erwachsene aller Niveaus willkommen heißt. Taekwondo fördert Disziplin, Respekt und Selbstvertrauen — und macht großen Spaß. Trainieren Sie mit uns.',

    'page.comingSoon': 'Diese Seite ist bald verfügbar.',

    'comp.intro':
      'Bevorstehende Wettkämpfe in Luxemburg und den Nachbarländern (Belgien, Frankreich, Deutschland). Klicken Sie auf einen Wettkampf, um sich anzumelden.',
    'comp.note':
      'Bitte prüfen Sie die Details und Anmeldefristen immer auf der Veranstaltungsseite.',
    'comp.source':
      'Wettkämpfe zusammengestellt aus martial.events und der Luxembourg Taekwondo Federation, dann vom Verein vor der Veröffentlichung geprüft.',
    'comp.register': 'Anmelden',
    'comp.details': 'Mehr Infos',
    'comp.empty':
      'Derzeit keine bevorstehenden Wettkämpfe. Schauen Sie bald wieder vorbei!',
    'comp.country.LU': 'Luxemburg',
    'comp.country.BE': 'Belgien',
    'comp.country.FR': 'Frankreich',
    'comp.country.DE': 'Deutschland',

    'events.intro':
      'Die Saison auf einen Blick — die Termine, zu denen wir unsere Mitglieder erwarten: Trainingslager, Gürtelprüfungen, Vereinsveranstaltungen und lokale Feste. Klicken Sie auf eine Veranstaltung, um mehr zu erfahren.',
    'events.empty': 'Noch keine Veranstaltungen geplant. Schauen Sie bald wieder vorbei!',
    'event.learnMore': 'Mehr erfahren',
    'event.back': '← Alle Veranstaltungen',
    'event.links': 'Teilnehmen',
    'event.featured': 'Nicht verpassen',
    'event.tentative': 'Voraussichtlicher Termin',
    'event.type.camp': 'Trainingslager',
    'event.type.competition': 'Wettkampf',
    'event.type.grading': 'Gürtelprüfung',
    'event.type.social': 'Geselligkeit',
    'event.type.other': 'Sonstiges',

    'footer.tagline': 'Taekwondo-Verein in Junglinster, Luxemburg',
    'footer.rights': 'Alle Rechte vorbehalten.',
  },
} as const;

export type Lang = keyof typeof ui;
export type UiKey = keyof (typeof ui)[typeof defaultLang];
