import "../styles/navigationDesktop.css";
import { IconFileFilled, IconWorld } from "@tabler/icons-react";
import { getLangFromUrl, useTranslatedPath } from '../i18n/utils';

interface Props {
  pages: string[],
  lang: string
}

const NavigationDesktop = ({pages, lang}: Props) => {
  const translatePath = useTranslatedPath(lang as "en" | "es");
  
  return (
    <nav className="desktop-nav">
      <ul className="pages">
        {pages.map((page) => (
          <li key={page}>
            <a href={`/#${page.toLowerCase()}`}>{page}</a>
          </li>
        ))}
      </ul>
      <ul className="icons">
        <li>
          <a className="translate" href={translatePath('/', lang === 'en' ? 'es' : 'en')}>
            <IconWorld color="var(--light-gray)" stroke={1.5} />
            Es
          </a>
        </li>
        <li>
          <button className="resume" >
            <IconFileFilled color="var(--light-gray)" height={21} />
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationDesktop;
