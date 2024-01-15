interface LogoProps {
  colorDetail?: string;
}

export function Logo({ colorDetail='black' }: LogoProps) {

  return (
    <svg width="80" height="81" viewBox="0 0 80 81" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="36.5544" y="27.15" width="6.4" height="27.2" fill={colorDetail}/>
      <rect x="42.9545" y="54.35" width="6.4" height="7.79287" transform="rotate(-90 42.9545 54.35)" fill="#FFB800"/>
      <path d="M31.5147 12.0637C36.201 7.37741 43.799 7.37742 48.4853 12.0637L68.6863 32.2647C73.3726 36.951 73.3726 44.549 68.6863 49.2353L48.4853 69.4363C43.799 74.1226 36.201 74.1226 31.5147 69.4363L11.3137 49.2353C6.62741 44.549 6.62742 36.951 11.3137 32.2647L31.5147 12.0637Z" stroke={colorDetail} stroke-width="4"/>
    </svg>

  )
}