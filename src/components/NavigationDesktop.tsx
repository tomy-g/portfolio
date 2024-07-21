import "../styles/navigationDesktop.css";
import { IconFileFilled, IconWorld } from "@tabler/icons-react";
import LanguagePicker from "./LanguagePicker.astro";
import { languages } from '../i18n/ui';
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
            <a>{page}</a>
          </li>
        ))}
      </ul>
      <ul className="icons">
        <li>
          <a className="translate" href={translatePath('/', lang)}>
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
