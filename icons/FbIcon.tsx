interface Props {
  className?: string;
  size: number;
}

const FbIcon = ({ className, size }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 64 64"
    width={size}
    height={size}
  >
    <g id="surface190946917">
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: 'rgb(45.490196%,45.490196%,45.490196%)',
          fillOpacity: 1,
        }}
        d="M 48 7 L 16 7 C 11.582031 7 8 10.582031 8 15 L 8 47 C 8 51.417969 11.582031 55 16 55 L 33 55 L 33 38 L 27 38 L 27 31 L 33 31 L 33 26 C 33 19 37 15 43 15 C 46.132812 15 48 16 48 16 L 48 22 L 44 22 C 41.140625 22 40 24.09375 40 26 L 40 31 L 47 31 L 46 38 L 40 38 L 40 55 L 48 55 C 52.417969 55 56 51.417969 56 47 L 56 15 C 56 10.582031 52.417969 7 48 7 Z M 48 7 "
      />
    </g>
  </svg>
);
export default FbIcon;
