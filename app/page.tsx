import HomeNav from "./components/HomeNav";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-start justify-between p-8 bg-background">
      <section className="flex flex-col gap-6">
        <h1 className="text-5xl font-semibold leading-none tracking-tighter text-foreground md:text-6xl">
          Jackie Yu
        </h1>
        <span className="text-2xl font-medium tracking-tight text-muted md:text-3xl">
          Software Developer
        </span>
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
  );
}
