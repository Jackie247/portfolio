import HomeNav from "./components/HomeNav";
import Link from "next/link";
// import ThemeToggle from "./components/ThemeToggle";

export default function Home() {
  return (
    // <div className="flex flex-col min-h-screen items-center justify-center m-auto">
    <main className="flex flex-1 flex-col items-start justify-between p-8 dark:bg-[#22272E] text-[#ADBAC7]">
      {/* <div className="absolute right-6 top-6 z-10">
        <ThemeToggle />
      </div> */}

      <section className="flex flex-col gap-6">
        <h1 className="text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-200">
          Jackie Yu
        </h1>
        <span>Software Developer</span>
      </section>

      <HomeNav />

      <section>
        <h3>Teams</h3>
        <ul>
          <li>Good Growth 2026-Present</li>
          <li>Source Mogul 2022-2025</li>
          <li>CodeClan 2021-2022</li>
        </ul>
      </section>
    </main>
    // </div>
  );
}
