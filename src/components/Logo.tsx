type Props = { className?: string };

export default function Logo({ className = "" }: Props) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/logo-wordmark-cropped.png"
      alt="Inner Drive"
      className={className}
      style={{ height: 28, width: "auto" }}
    />
  );
}
