interface Props {
  className?: string;
  size: number;
}

const CheckIcon = ({ className, size }: Props) => {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="currentColor"
    >
      <path d="M18.9 35.7 7.7 24.5l2.15-2.15 9.05 9.05 19.2-19.2 2.15 2.15Z" />
    </svg>
  );
};

export default CheckIcon;
