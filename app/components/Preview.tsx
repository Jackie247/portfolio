// components/Preview.tsx

interface PreviewProps {
  video?: string;
  children?: React.ReactNode;
  onNext?: () => void;
  onPrevious?: () => void;
  showArrows?: boolean;
}

export default function Preview({
  video,
  children,
  onNext,
  onPrevious,
  showArrows = false,
}: PreviewProps) {
  return (
    <div
      className="relative mx-auto
  w-[280px] aspect-[8/16]
  rounded-[3.5rem] bg-zinc-950 p-[8px] shadow-2xl
  md:w-[600px] md:aspect-[4/3] md:rounded-[2rem] md:p-[10px]
  lg:w-full lg:max-w-4xl lg:aspect-[16/10] lg:rounded-2xl lg:bg-transparent lg:p-0 lg:shadow-none"
    >
      {/* Left side buttons */}
      <span
        className="absolute -left-[3px] top-[110px] h-8 w-[3px] rounded-l bg-zinc-800
          md:hidden"
      />
      <span
        className="absolute -left-[3px] top-[155px] h-14 w-[3px] rounded-l bg-zinc-800
          md:hidden"
      />
      <span
        className="absolute -left-[3px] top-[220px] h-14 w-[3px] rounded-l bg-zinc-800
          md:hidden"
      />

      {/* Right side button */}
      <span
        className="absolute -right-[3px] top-[175px] h-20 w-[3px] rounded-r bg-zinc-800
          md:hidden"
      />

      {/* Screen */}
      <div
        className="relative h-full w-full overflow-hidden
  rounded-[3rem] bg-black
  md:rounded-[1.5rem]
  lg:rounded-2xl"
      >
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-3 z-20 h-[26px] w-[90px] -translate-x-1/2 rounded-full bg-black md:hidden" />

        {video ? (
          <video
            src={video}
            autoPlay
            muted
            loop
            playsInline
            preload="metadata"
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="h-full w-full p-8">{children}</div>
        )}
      </div>
      {showArrows && (
        <div className="absolute -bottom-14 left-1/2 flex -translate-x-1/2 items-center gap-4">
          <button
            type="button"
            onClick={onPrevious}
            aria-label="Previous project"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-zinc-300 transition-colors hover:bg-zinc-100"
          >
            ←
          </button>

          <button
            type="button"
            onClick={onNext}
            aria-label="Next project"
            className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border border-zinc-300 transition-colors hover:bg-zinc-100"
          >
            →
          </button>
        </div>
      )}
    </div>
  );
}
