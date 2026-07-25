interface PlaceholderImageProps {
  label: string;
  aspect?: "square" | "video" | "wide";
  className?: string;
}

const aspectClass: Record<string, string> = {
  square: "aspect-square",
  video: "aspect-video",
  wide: "aspect-[21/9]",
};

/**
 * Temporary placeholder for real photography/illustrations.
 * Swap the inner markup for <Image /> once final assets are ready —
 * callers only depend on this component's props, not its internals.
 */
export default function PlaceholderImage({
  label,
  aspect = "video",
  className = "",
}: PlaceholderImageProps) {
  return (
    <div
      className={`relative flex ${aspectClass[aspect]} w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-navy-800 via-navy-700 to-accent-700 ${className}`}
    >
      <svg
        className="absolute -right-4 -bottom-4 h-28 w-28 text-white/10"
        fill="currentColor"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12 2 2 10h3v11h5v-6h4v6h5V10h3L12 2z" />
      </svg>
      <span className="relative z-10 px-4 text-center text-xs sm:text-sm font-medium text-white/85">
        {label}
      </span>
    </div>
  );
}
