import '../styles/navigationDesktop.css'
import { IconFileFilled, IconWorld } from '@tabler/icons-react'
import { getLangFromUrl, useTranslatedPath } from '../i18n/utils'
import { defaultLang } from '../i18n/ui'

interface Props {
  pages: string[]
  lang: string
  pathname?: string
}

const NavigationDesktop = ({ pages, lang, pathname }: Props) => {
  const route = pathname ? (lang === defaultLang ? pathname.split('/')[1] : pathname.split('/')[2]) : '/'
  const translatePath = useTranslatedPath(lang as 'en' | 'es')

  const handleDownload = () => {
    const link = document.createElement('a')
    if (lang === 'es') {
      link.href = '/files/CV ES.pdf'
      link.download = 'CV ES.pdf'
    } else {
      link.href = '/files/CV EN.pdf'
      link.download = 'CV EN.pdf'
    }
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <nav className='desktop-nav'>
      <ul className='pages'>
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
              <a href={`/${lang === 'es' ? 'es/' : ''}#${translatedPage}`}>
                {page}
              </a>
            </li>
          )
        })}
      </ul>
      <ul className='icons'>
        <li>
          <a
            className='translate'
            href={translatePath(route, lang === 'en' ? 'es' : 'en')}
          >
            <IconWorld color='var(--light-gray)' stroke={1.5} />
            {lang === 'en' ? 'Es' : 'En'}
          </a>
        </li>
        <li>
          <button onClick={handleDownload} className='resume'>
            <IconFileFilled color='var(--light-gray)' height={21} />
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default NavigationDesktop
