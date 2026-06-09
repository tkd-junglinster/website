// Translation dictionary for the whole site.
//
// HOW TO EDIT TEXT:
//   - Find the key you want to change (e.g. 'home.hero.title').
//   - Edit the text for each of the three languages: fr (French),
//     en (English), de (German).
//   - Keep the keys identical across all three languages.
//
// French is the default language. If a key is missing in en/de, the French
// text is shown as a fallback.

export const languages = {
  fr: 'Français',
  en: 'English',
  de: 'Deutsch',
} as const;

export const defaultLang = 'fr';

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
    'nav.news': 'Actualités',

    'home.hero.title': 'Bienvenue au TKD Junglinster',
    'home.hero.subtitle':
      'Le Taekwondo pour enfants et adultes, dans une ambiance conviviale et professionnelle.',
    'home.cta': 'Nous rejoindre',
    'home.cta.band': 'Prêt à commencer le Taekwondo ?',
    'home.welcome.title': 'Notre club',
    'home.welcome.body':
      'Le TKD Junglinster accueille les enfants et les adultes de tous niveaux dans une atmosphère conviviale et professionnelle. (Texte de présentation à finaliser.)',
    'home.facts.title': 'En bref',
    'home.fact.1': 'Cours pour enfants et adultes',
    'home.fact.2': "Deux lieux d'entraînement",
    'home.fact.3': 'Taekwondo traditionnel',

    'page.comingSoon': 'Cette page sera bientôt disponible.',

    'comp.intro':
      'Les compétitions à venir au Luxembourg et dans les pays voisins (Belgique, France, Allemagne). Cliquez sur une compétition pour vous inscrire.',
    'comp.note':
      "Vérifiez toujours les détails et les délais d'inscription sur la page de l'événement.",
    'comp.source':
      'Calendrier mis à jour automatiquement chaque semaine depuis martial.events.',
    'comp.register': "S'inscrire",
    'comp.empty': 'Aucune compétition à venir pour le moment. Revenez bientôt !',
    'comp.country.LU': 'Luxembourg',
    'comp.country.BE': 'Belgique',
    'comp.country.FR': 'France',
    'comp.country.DE': 'Allemagne',

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
    'nav.news': 'News & gallery',

    'home.hero.title': 'Welcome to TKD Junglinster',
    'home.hero.subtitle':
      'Taekwondo for children and adults, in a friendly and professional setting.',
    'home.cta': 'Join us',
    'home.cta.band': 'Ready to start Taekwondo?',
    'home.welcome.title': 'Our club',
    'home.welcome.body':
      'TKD Junglinster welcomes children and adults of all levels in a friendly and professional atmosphere. (Welcome text to be finalised.)',
    'home.facts.title': 'At a glance',
    'home.fact.1': 'Classes for children and adults',
    'home.fact.2': 'Two training venues',
    'home.fact.3': 'Traditional Taekwondo',

    'page.comingSoon': 'This page is coming soon.',

    'comp.intro':
      'Upcoming competitions in Luxembourg and neighbouring countries (Belgium, France, Germany). Click a competition to register.',
    'comp.note':
      'Always check the details and registration deadlines on the event page.',
    'comp.source':
      'Calendar updated automatically each week from martial.events.',
    'comp.register': 'Register',
    'comp.empty': 'No upcoming competitions right now. Check back soon!',
    'comp.country.LU': 'Luxembourg',
    'comp.country.BE': 'Belgium',
    'comp.country.FR': 'France',
    'comp.country.DE': 'Germany',

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
    'nav.news': 'Aktuelles',

    'home.hero.title': 'Willkommen beim TKD Junglinster',
    'home.hero.subtitle':
      'Taekwondo für Kinder und Erwachsene, in freundlicher und professioneller Atmosphäre.',
    'home.cta': 'Mitmachen',
    'home.cta.band': 'Bereit, mit Taekwondo zu starten?',
    'home.welcome.title': 'Unser Verein',
    'home.welcome.body':
      'Der TKD Junglinster heißt Kinder und Erwachsene aller Niveaus in freundlicher und professioneller Atmosphäre willkommen. (Begrüßungstext wird noch finalisiert.)',
    'home.facts.title': 'Auf einen Blick',
    'home.fact.1': 'Kurse für Kinder und Erwachsene',
    'home.fact.2': 'Zwei Trainingsorte',
    'home.fact.3': 'Traditionelles Taekwondo',

    'page.comingSoon': 'Diese Seite ist bald verfügbar.',

    'comp.intro':
      'Bevorstehende Wettkämpfe in Luxemburg und den Nachbarländern (Belgien, Frankreich, Deutschland). Klicken Sie auf einen Wettkampf, um sich anzumelden.',
    'comp.note':
      'Bitte prüfen Sie die Details und Anmeldefristen immer auf der Veranstaltungsseite.',
    'comp.source':
      'Kalender wird wöchentlich automatisch von martial.events aktualisiert.',
    'comp.register': 'Anmelden',
    'comp.empty':
      'Derzeit keine bevorstehenden Wettkämpfe. Schauen Sie bald wieder vorbei!',
    'comp.country.LU': 'Luxemburg',
    'comp.country.BE': 'Belgien',
    'comp.country.FR': 'Frankreich',
    'comp.country.DE': 'Deutschland',

    'footer.tagline': 'Taekwondo-Verein in Junglinster, Luxemburg',
    'footer.rights': 'Alle Rechte vorbehalten.',
  },
} as const;

export type Lang = keyof typeof ui;
export type UiKey = keyof (typeof ui)[typeof defaultLang];
