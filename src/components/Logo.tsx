type Props = { className?: string };

export default function Logo({ className = "h-8 w-auto" }: Props) {
  return (
    <svg
      viewBox="0 0 120 40"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Inner Drive"
      className={className}
    >
      <g fill="currentColor">
        <rect x="0" y="6" width="6" height="28" />
        <polygon points="12,34 36,6 42,6 42,34 36,34 36,15 24,28 24,34" />
      </g>
      <text
        x="50"
        y="26"
        fontFamily="var(--font-display), Impact, sans-serif"
        fontSize="14"
        letterSpacing="2"
        fill="currentColor"
      >
        INNER DRIVE
      </text>
    </svg>
  );
}
