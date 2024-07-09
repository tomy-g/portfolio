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
    "NAVBAR.HELLO": "Hello!",
    "NAVBAR.ABOUT": "About",
    "NAVBAR.EXPERIENCE": "Experience",
    "NAVBAR.PROJECTS": "Projects",
    "NAVBAR.CONTACT": "Contact",
  },
  es: {
    "NAVBAR.HELLO": "Hola!",
    "NAVBAR.ABOUT": "Sobre mi",
    "NAVBAR.EXPERIENCE": "Experiencia",
    "NAVBAR.PROJECTS": "Proyectos",
    "NAVBAR.CONTACT": "Contacto",
  },
} as const;
