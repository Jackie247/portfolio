export default function Preview({ videos, title }) {
  const { mobile, tablet, desktop } = videos;
  const phone = <Phone src={mobile} title={title} />;

  return (
    <div className="w-full">
      <div className="flex justify-center md:hidden">{phone}</div>

      <div className="hidden justify-center md:flex xl:hidden">
        <Tablet src={tablet ?? desktop} title={title} />
      </div>

      <div className="hidden justify-center xl:flex">
        {desktop ? <Desktop src={desktop} title={title} /> : phone}
      </div>
    </div>
  );
}

function Video({ src, title }) {
  if (!src) return null;

  return (
    <video
      key={src}
      src={src}
      aria-label={title}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      className="h-full w-full object-cover"
    />
  );
}

function Phone({ src, title }) {
  return (
    <div className="relative aspect-[380/822] w-[260px] shrink-0 rounded-[3.25rem] bg-device p-[5px] shadow-2xl ring-1 ring-device-edge">
      {/* Mute Button */}
      <span className="absolute -left-[3px] top-[104px] h-7 w-[3px] rounded-l bg-device-button" />
      {/* Increase Volume Button */}
      <span className="absolute -left-[3px] top-[150px] h-13 w-[3px] rounded-l bg-device-button" />
      {/* Decrease Volume Button */}
      <span className="absolute -left-[3px] top-[212px] h-13 w-[3px] rounded-l bg-device-button" />
      {/* Power Button */}
      <span className="absolute -right-[3px] top-[170px] h-19 w-[3px] rounded-r bg-device-button" />
      <div className="relative h-full w-full overflow-hidden rounded-[2.9rem] border-[5px] border-black bg-black">
        {/* Dynamic island */}
        <div className="absolute left-1/2 top-2 z-20 h-6 w-21 -translate-x-1/2 rounded-full bg-black" />
        <Video src={src} title={title} />
      </div>
    </div>
  );
}

function Tablet({ src, title }) {
  return (
    <div className="relative aspect-[1180/820] w-full max-w-[680px] rounded-[2.25rem] bg-device p-[4px] shadow-2xl ring-1 ring-device-edge">
      {/* Top Button */}
      <span className="absolute -top-[3px] right-16 h-[3px] w-10 rounded-t bg-device-button" />
      {/* Increase Volume Button */}
      <span className="absolute -right-[3px] top-14 h-9 w-[3px] rounded-r bg-device-button" />
      {/* Decrease Volume Button */}
      <span className="absolute -right-[3px] top-25 h-9 w-[3px] rounded-r bg-device-button" />
      {/* Front Camera */}
      <span className="absolute left-1/2 top-[8px] z-10 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-neutral-700" />
      <div className="relative h-full w-full overflow-hidden rounded-[2rem] border-[14px] border-black bg-black">
        <div className="h-full w-full overflow-hidden rounded-[1.1rem]">
          <Video src={src} title={title} />
        </div>
      </div>
    </div>
  );
}

function Desktop({ src, title }) {
  return (
    <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-surface">
      <Video src={src} title={title} />
    </div>
  );
}
