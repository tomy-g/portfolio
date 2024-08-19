import '../styles/icon.css'

interface Props{
  width?: number
  height?: number
}

export default function HtmlIcon ({width, height}: Props) {
  return (
    <svg
      className='logo'
      width={width ?? 41}
      height={height ?? 41}
      viewBox='0 0 41 41'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M2.42412 0L5.71437 36.9L20.4795 41L35.2831 36.8949L38.5784 0H2.42668H2.42412ZM31.4162 12.0694H14.0989L14.5114 16.7049H31.0062L29.7634 30.5988L20.4795 33.1716L11.2084 30.5988L10.5754 23.4904H15.1187L15.4416 27.1036L20.4821 28.4617L20.4923 28.4591L25.5353 27.0984L26.0581 21.2303H10.373L9.15324 7.544H31.8237L31.4162 12.0694Z' />
    </svg>
  )
}
