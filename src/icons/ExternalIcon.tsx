import '../styles/icon.css'

interface Props {
  width?: number
  height?: number
}

export default function ExternalIcon ({ width, height }: Props) {
  return (
    <svg
      className='logo'
      width={width ?? 29}
      height={height ?? 29}
      viewBox='0 0 29 29'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M16.1111 0L21.4164 5.30539L10.1387 16.5832L12.4168 18.8613L23.6946 7.5835L28.9999 12.8889V0H16.1111Z'
        fill='#EBEAF3'
      />
      <path
        d='M25.7778 25.7778H3.22222V3.22222H14.5L11.2778 0H3.22222C1.44517 0 0 1.44517 0 3.22222V25.7778C0 27.5548 1.44517 29 3.22222 29H25.7778C27.5548 29 29 27.5548 29 25.7778V17.7222L25.7778 14.5V25.7778Z'
        fill='#EBEAF3'
      />
    </svg>
  )
}
