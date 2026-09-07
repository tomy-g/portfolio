/**
 * Single source of truth for every piece of copy on the site.
 * The page is one document, so the content lives in one file.
 */

export const site = {
  name: 'Tomás Goizueta',
  role: 'Software Engineer',
  location: 'Málaga, Spain',
  locationUrl: 'https://maps.app.goo.gl/98ggs2Xvfz3kNJxKA',
  email: 'tomasgoizuetadp@gmail.com',
  cv: '/files/CV EN.pdf',
  description:
    'Software Engineer based in Málaga, building for the web. Portfolio of Tomás Goizueta.',
} as const

export const socials = [
  { label: 'GitHub', url: 'https://github.com/tomy-g' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/tomas-goizueta/' },
  { label: 'Email', url: `mailto:${site.email}` },
] as const

export type Role = {
  company: string
  companyUrl: string
  title: string
  start: string
  end: string | null // null renders as "Present"
  summary: string
  details: string[]
  stack: string[]
}

export const experience: Role[] = [
  {
    company: 'Ebury',
    companyUrl: 'https://ebury.com/',
    title: 'Software Engineer',
    start: '2026-03',
    end: null,
    // TODO(tomy): replace with what you actually work on at Ebury.
    summary: '',
    details: [],
    stack: [],
  },
  {
    company: 'Babel',
    companyUrl: 'https://www.babelgroup.com/',
    title: 'Front-End Software Engineer',
    start: '2023-02',
    end: '2024-02',
    summary:
      'Front-end developer working externally on a project for Banco Santander.',
    details: [
      'Worked primarily on the front-end of the application, building and maintaining features against a large existing Angular codebase.',
      'Maintained the shared web component catalogue built with Stencil, used across several teams.',
      'Contributed to the Node.js back-end supporting the application.',
    ],
    stack: ['Angular', 'TypeScript', 'Sass', 'Stencil', 'Node.js'],
  },
]

export const education = [
  {
    institution: 'University of Málaga',
    institutionUrl: 'https://www.uma.es/',
    title: 'BSc Software Engineering',
    start: '2020',
    end: '2025',
  },
] as const

export type Project = {
  name: string
  tagline: string
  year: string
  stack: string[]
  links: { label: string; url: string }[]
  /** Rendered inside a <details> block. Each string is a paragraph. */
  body: string[]
  features?: string[]
}

export const projects: Project[] = [
  {
    name: 'Class Folder',
    tagline: 'A collaborative platform for students.',
    year: '2025',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL'],
    links: [
      { label: 'Source', url: 'https://github.com/tomy-g/classfolder-front' },
    ],
    body: [
      "My Bachelor's thesis. Students end up relying on WhatsApp or Telegram groups to share notes, resolve doubts and coordinate deadlines — platforms that were never built for any of it. Class Folder is the alternative: small, private, invitation-only groups with tools shaped around how a class actually works.",
      'I built it end to end — authentication, file uploads, threaded discussions, filtering, group creation and moderation — following a requirements-first process through technical design, implementation and testing.',
      'The part I took most from was not technical. It was deciding what to build, thinking from the user’s side, and keeping a codebase this size maintainable on my own.',
    ],
    features: [
      'File sharing with filters and quick search',
      'Event calendar for exams, deadlines and study sessions',
      'Threaded discussion forums',
      'Private messaging between group members',
      'Participation ranking to encourage contributions',
      'Roles, permissions and moderation tools',
    ],
  },
  {
    name: 'NextFive',
    tagline: 'Tell it five films you like, it finds you five more.',
    year: '2024',
    stack: ['Next.js', 'React', 'OpenAI API'],
    links: [
      { label: 'Live', url: 'https://nextfive.vercel.app' },
      { label: 'Source', url: 'https://github.com/tomy-g/NextFive' },
    ],
    body: [
      'A film and series recommendation app. You give it five titles you already like and it returns five you probably will, using the ChatGPT API to do the reasoning rather than a similarity table.',
    ],
  },
]

/** Formats an ISO-ish "YYYY-MM" or "YYYY" as "Mar 2026" / "2026". */
export function formatDate(value: string | null): string {
  if (value === null) return 'Present'
  const [year, month] = value.split('-')
  if (month === undefined) return year!
  const name = new Date(`${value}-01T00:00:00Z`).toLocaleString('en', {
    month: 'short',
    timeZone: 'UTC',
  })
  return `${name} ${year}`
}
