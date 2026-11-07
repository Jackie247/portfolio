import HomeNav from "./components/HomeNav";
import Link from "next/link";
import { Desktop } from "./components/Preview";

const featured = {
  client: "Tractor Supply Company",
  title: "Checkout Login Optimisation",
  video: undefined,
};

export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-7xl flex-1 gap-6 px-6 py-8 lg:py-6">
      <div className="flex flex-1 flex-col items-start justify-between gap-14 lg:py-4">
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
      </div>

      <Link
        href="/work"
        className="group hidden flex-[1.5] flex-col justify-center gap-9 rounded-3xl bg-surface px-12 pb-10 pt-14 lg:flex"
      >
        <div className="mx-auto w-full max-w-180">
          <Desktop src={featured.video} title={featured.title} />
        </div>

        <div className="text-center">
          <p className="text-sm text-muted">Latest work - {featured.client}</p>
          <p className="mt-1 text-xl font-semibold tracking-tight">
            {featured.title}
          </p>
        </div>
      </Link>
    </main>
  );
}
