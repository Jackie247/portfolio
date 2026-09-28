// components/Preview.tsx

interface PreviewProps {
  video?: string;
  children?: React.ReactNode;
}

export default function Preview({ video, children }: PreviewProps) {
  return (
    <div
      className="relative mx-auto 
    w-[280px] aspect-[393/852] 
    rounded-[3.5rem] bg-zinc-950 p-[10px] shadow-2xl 
    md:w-full md:max-w-4xl md:aspect-[16/10] md:rounded-3xl md:bg-transparent md:p-0 md:shadow-none"
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
        className="relative h-full w-full overflow-hidden rounded-[2.9rem] bg-white
          md:rounded-3xl"
      >
        {/* Dynamic Island */}
        <div
          className="absolute left-1/2 top-3 z-20 h-[26px] w-[90px] -translate-x-1/2 rounded-full bg-black
            md:hidden"
        />

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
    </div>
  );
}
