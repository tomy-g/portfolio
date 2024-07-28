export const languages = {
  en: "English",
  es: "Español",
};

export const showDefaultLang = false;

export const defaultLang = "en";

export const ui = {
  en: {
    "SITE.TITLE": "Tomy Goizueta",
    "SITE.DESCRIPTION":
        "Portfolio of Tomy Goizueta, a software developer from Spain. Made in Astro",
    "HOME.TITLE": "TOMY GOIZUETA",
    "HOME.SUBTITLE": "This is a <0>more complex</0> string to translate, mixed with <1>html elements</1>, such as a <2>a cool link</2>!",
    "NAVBAR.ABOUT": "About",
    "NAVBAR.EXPERIENCE": "Exp",
    "NAVBAR.PROJECTS": "Projects",
    "NAVBAR.CONTACT": "Contact",
  },
  es: {
    "NAVBAR.ABOUT": "Acerca",
    "NAVBAR.EXPERIENCE": "Exp",
    "NAVBAR.PROJECTS": "Proyectos",
    "NAVBAR.CONTACT": "Contacto",
  },
} as const;
