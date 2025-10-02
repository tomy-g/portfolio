/* Burger menu by Mikael Ainalem (https://codepen.io/ainalem/pen/wvKOEMV) */

import downloadIcon from "../assets/download-icon-white.svg";
import "../styles/navigationMobile.css";
import languageIcon from "../assets/language-icon.svg";
import { useState } from "react";
import { IconFileFilled, IconWorld } from "@tabler/icons-react";
import { useTranslatedPath } from "../i18n/utils";
import { defaultLang } from "../i18n/ui";

function NavigationMobile ({ pages, lang, pathname }: { pages: string[], lang: string, pathname?: string }) {
  const route = pathname ? (lang === defaultLang ? pathname.split('/')[1] : pathname.split('/')[2]) : '/'
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const translatePath = useTranslatedPath(lang as "en" | "es");

  const handleDownload = () => {
    const link = document.createElement('a');
    if(lang === 'es') {
      link.href = '/files/CV ES.pdf';
      link.download = 'CV ES.pdf';
    } else {
      link.href = '/files/CV EN.pdf';
      link.download = 'CV EN.pdf';
    }
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  

  const toogleMenu = () => {
    setIsMenuOpen((prevState) => !prevState);
  };

  return (
    <div className="container">
      <button
        className={isMenuOpen ? 'menu opened' : 'menu'}
        onClick={toogleMenu}
      >
        <svg width="50" height="50" viewBox="0 0 100 100">
          <path
            className="line line1"
            d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
          />
          <path className="line line2" d="M 20,50 H 80" />
          <path
            className="line line3"
            d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
          />
        </svg>
      </button>
      <nav
        className="mobile-nav"
        style={{ top: isMenuOpen ? "4rem" : "-75vh; top: -75dvh", opacity: isMenuOpen ? 1 : 0 }}
      >
        <ul className="mobile-pages">
          {pages.map(page => {
          const translatedPage =
            lang === 'es'
              ? page === 'Acerca'
                ? 'about'
                : page === 'Proyectos'
                ? 'projects'
                : page === 'Contacto'
                ? 'contact'
                : page.toLowerCase()
              : page.toLowerCase()

          return (
            <li key={page}>
              <a style={{ textDecoration: 'none' }} onClick={() => setIsMenuOpen(false)} href={`/${lang === 'es' ? 'es/' : ''}#${translatedPage}`}>
                {page}
              </a>
            </li>
          )
        })}
          <li key="resume">
            <a onClick={handleDownload} className="icon">
              <IconFileFilled height={21} />
              <span>CV</span>
            </a>
          </li>
          <li key="language">
            <a href={translatePath(route, lang === 'en' ? 'es' : 'en')} className="icon">
              <IconWorld height={21} />
              {lang === 'en' ? 'Es' : 'En'}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavigationMobile;
