import HomeNav from "./components/HomeNav";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center font-sans m-auto">
      <main className="flex flex-1 max-w-3xl mx-auto flex-col items-start justify-between px-8 py-16">
        <section className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="text-4xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
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
            <li>CodeClan 2021</li>
          </ul>
        </section>
      </main>
    </div>
  );
}
