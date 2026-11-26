export type Entry = {
  title: string;
  period?: string;
  description: string | string[];
  url?: string;
};

// Edit this file to personalize every section of the portfolio.
// Leave optional fields empty until you are ready to share them.
export const profile: {
  name: string;
  shortName: string;
  location: string;
  born: string;
  nationality: string;
  role: string;
  yearsActive: string;
  knownFor: string;
  partner: string;
  relatives: string;
  bio: string[];
  about: string[];
  photo: string;
  photoCaption: string;
  email: string;
  links: { label: string; url: string }[];
  interests: string[];
  education: Entry[];
  careerIntro: string[];
  experience: Entry[];
  projects: Entry[];
} = {
  name: "Youssef Abou Eljihad",
  shortName: "youssef.",
  location: "Mohammedia, Morocco",
  born: "June 17, Rabat, Morocco",
  nationality: "Moroccan 🇲🇦",
  role: "lifelong learner",
  yearsActive: "",
  knownFor: "",
  partner: "𝕏",
  relatives: "",
  // Reference biography used as temporary copy; replace with your own story.
  bio: [
  "Youssef Abou Eljihad is a Moroccan-French founder, media creator, and CS engineer. Youssef founded [StartupOKLM](https://www.instagram.com/startupoklm) in 2020, a media platform covering the French startup ecosystem; over three years it accumulated hundreds of productions and more than 30 million views and generated over $40,000 in revenue, making it one of the largest startup media platforms in France.",
  "As of 2026, Youssef is based in San Francisco, where he runs [Silicon Mania](https://siliconmania.tv/), the most entertaining tech media company, and [Large Language Movies](https://largelanguagemovies.com/), a video production creative studio."
],
  about: [
  "Youssef Abou Eljihad was born and raised in [Rabat, Morocco](https://en.wikipedia.org/wiki/Rabat), where he spent his first 19 years. In 2004, Youssef's parents offered him his first computer, a [Pentium 1](https://en.wikipedia.org/wiki/Pentium), which sparked a lifelong interest in making cool shit online, ... and beyond.",
  "Youssef has said he resets his life roughly every decade by moving to a new country and reconsidering his assumptions, comparing the practice to starting a new season in a game. This brought him from Morocco to France in 2016 and eventually to San Francisco in 2026."
],
  photo: "/photos/profile.jpg",
  photoCaption: "",
  email: "",
  links: [{ label: "GitHub", url: "https://github.com/yoesefab" }],
  interests: ["Football", "Music", "Psychology", "Minimalism"],
  education: [
  {
    "title": "Lycée Moulay Youssef",
    "description": [
      "Youssef attended [Lycée Moulay Youssef](https://fr.wikipedia.org/wiki/Lyc%C3%A9e_Moulay-Youssef) in [Rabat](https://en.wikipedia.org/wiki/Rabat) from 2011 to 2016. He completed secondary school (2011–2014) with Honors, serving as class representative in his second year and as a member of the school's Scientific and Cultural Club. From 2014 to 2016 he pursued preparatory classes [(CPGE)](https://en.wikipedia.org/wiki/Classe_pr%C3%A9paratoire_aux_grandes_%C3%A9coles) at the same institution, on the MPSI – MP track. He again served as class representative in his second year and passed the [CCP competitive exam](https://en.wikipedia.org/wiki/Concours_communs_polytechniques)."
    ]
  },
  {
    "title": "ISIMA",
    "description": [
      "In 2016, Youssef enrolled at [ISIMA](https://www.isima.fr/) (Institut Supérieur d'Informatique, de Modélisation et de leurs Applications) in [Clermont-Ferrand, France](https://en.wikipedia.org/wiki/Clermont-Ferrand), where he studied computer science engineering, graduating in 2020. studying Software Development, Algorithms and Decision Support, Law, Management, and Business Intelligence.",
      "Youssef was involved in multiple student organisations: he served as class representative in his second and third years, as Project, Communication, and Hand-Over Manager for Im@ge ISIMA (the school's entrepreneurship club), and as Editor for La GaZZette, the student newspaper. He also contributed to [Cartzz](https://www.isima.fr/2018/06/12/cartzz-le-uno-cree-par-les-etudiants/), a card game designed for ISIMA students as a variation on the Uno format."
    ]
  },
  {
    "title": "buildspace",
    "description": [
      "In June 2024, Youssef participated in [buildspace](https://buildspace.so/)'s nights & weekends s5 programme, a builder-focused accelerator backed by [a16z](https://a16z.com/) and [Y Combinator](https://www.ycombinator.com/).",
      "Youssef built yolomate, a weekly check-in app for friends to catch up, share memories, and make every week count. then stopped as he found his joy with [Retro](https://retro.app/), a social media app for sharing memories with friends."
    ]
  }
],
  careerIntro: [
  "Youssef said that he has been obsessed with tech and media since childhood, and that entertainment is the best vehicle for making anything accessible to anyone."
],
  experience: [
  {
    "title": "Early startup involvement",
    "description": [
      "In 2018, Youssef attended his first [Techstars Startup Weekend](https://en.wikipedia.org/wiki/Startup_Weekend) in Clermont-Ferrand. He found the format compelling enough that he subsequently switched from participant to organiser, running his own entrepreneurship events in the region."
    ]
  },
  {
    "title": "Teen Startup Day",
    "description": [
      "In 2019, Youssef launched [Teen Startup Day](https://www.youtube.com/watch?v=cz5qXKNevZA), a one-day startup hackathon for teenagers, modelled on Startup Weekend. The programme secured 17 partners and raised $3,000. It ran once before being shelved in 2020, a decision Youssef has attributed to two compounding factors: the COVID-19 pandemic, and the inherent difficulty of organising events for an audience of secondary school students."
    ]
  },
  {
    "title": "StartupOKLM",
    "description": [
      "Youssef founded [StartupOKLM](https://www.instagram.com/startupoklm), in 2020, a media platform covering youth entrepreneurship and the French startup ecosystem. Youssef said he started it because no one was making engaging content about startups for young French audiences. Within three years it became one of the largest platforms of its kind in France.",
      "StartupOKLM produced documentary-style founder interviews, live Twitch podcast episodes, and street interviews that brought startup culture to general audiences. The platform went viral multiple times, accumulating more than 30 million views and generating over $40,000 in revenue.",
      "Its flagship programme was Le Patron, a talk show in which Youssef interviewed prominent figures from the French business and technology world (like [Fabrice Grinda](https://makeitmania.substack.com/p/03-a-conversation-with-fabrice-grinda), [Ilan Benhaim](https://youtu.be/LBhSVh60xCk?si=_IEHfZIV274fjQK9), [Eric Larcheveque](https://youtu.be/K2LRuM94vD4?si=XjFljs4EQWI_PTzM), etc.). The platform received press coverage from [Welcome to the Jungle](https://www.welcometothejungle.com/fr/articles/entrepreneur-jeune-media-solution-startup-oklm) and [Dix Mille Heures](https://www.dixmilleheures.fr/articles/side-story-startupoklm-adil-mania), among other outlets."
    ]
  },
  {
    "title": "The White Mirror",
    "description": [
      "From September 2024 to February 2025, Youssef co-founded [The White Mirror](https://thewhitemirror-v2.vercel.app/), an independent media focused on consumer social technology. The project allowed him to pursue a long-standing interest in consumer social.",
      "Youssef shipped multiple articles and interviews before winding it down to focus on other ventures."
    ]
  },
  {
    "title": "anomalie.space",
    "description": [
      "In May 2025, Youssef co-founded [anomalie.space](https://anomalie.space/), a hackerspace in Paris designed for builders, makers, and people working on projects that do not fit neatly into existing categories. Youssef has said the goal was to create a space where being ambitious and a little weird is the default, not the exception.",
      "anomalie.space shut down in November 2025 after no European investor stepped forward to lead a funding round."
    ]
  },
  {
    "title": "Large Language Movies",
    "description": [
      "In 2025, Youssef launched [Large Language Movies](https://largelanguagemovies.com/), a video production creative studio focused on creating engaging video content using AI and creative storytelling."
    ]
  }
],
  projects: [],
};
