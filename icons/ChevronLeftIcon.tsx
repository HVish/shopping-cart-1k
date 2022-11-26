interface Props {
  className?: string;
  size: number;
}

const ChevronLeftIcon = ({ className, size }: Props) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 48 48"
    height={size}
    width={size}
    fill="currentColor"
  >
    <path d="M28.05 36 16 23.95 28.05 11.9l2.15 2.15-9.9 9.9 9.9 9.9Z" />
  </svg>
);

export default ChevronLeftIcon;
