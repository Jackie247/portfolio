// app/work/page.tsx

"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Preview from "../components/Preview";

type WorkItem = {
  company: string;
  role: string;
  dates: string;
  title: string;
  description: string;
  video?: string;
};

const workItems: WorkItem[] = [
  {
    company: "Good Growth",
    role: "Software Developer",
    dates: "2026 - Present",
    title: "E-commerce experimentation",
    description:
      "Building and testing customer-facing experiences across PDPs, PLPs, cart and checkout.",
    video: "/videos/good-growth.mp4",
  },
  {
    company: "Source Mogul",
    role: "Junior Developer",
    dates: "2022 - 2023",
    title: "Crawler infrastructure",
    description:
      "Worked across backend systems, APIs and web crawlers using JavaScript, TypeScript, Node, MongoDB and Python.",
  },
  {
    company: "CodeClan",
    role: "Junior Frontend Developer",
    dates: "2021 - 2022",
    title: "Frontend development",
    description:
      "Built responsive interfaces using HTML, CSS, JavaScript and React.",
  },
];

export default function Work() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);

  return (
    <main className="min-h-screen w-full max-w-3xl mx-auto px-8 py-16">
      <motion.h1 layoutId="work-title" className="text-3xl font-semibold">
        Work
      </motion.h1>

      <section className="mt-24">
        {workItems.map((item, index) => (
          <motion.article
            key={item.company}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * index }}
            className="mb-8"
          >
            <button
              onClick={() => setSelectedWork(item)}
              className="w-full text-left cursor-pointer"
            >
              <h2 className="text-3xl font-semibold">{item.company}</h2>

              <span className="flex justify-between w-full">
                <span>{item.role}</span>
                <span>{item.dates}</span>
              </span>
            </button>
          </motion.article>
        ))}
      </section>

      <AnimatePresence>
        {selectedWork && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedWork(null)}
            className="
              fixed
              inset-0
              z-50
              flex
              items-center
              justify-center
              bg-black/70
              px-6
              py-10
              backdrop-blur-sm
            "
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 30 }}
              transition={{
                type: "spring",
                stiffness: 260,
                damping: 24,
              }}
              onClick={(event) => event.stopPropagation()}
              className="w-full"
            >
              <Preview video={selectedWork.video}>
                <div className="flex h-full flex-col justify-end">
                  <p className="text-sm text-zinc-500">
                    {selectedWork.company}
                  </p>

                  <h2 className="mt-2 text-3xl font-semibold">
                    {selectedWork.title}
                  </h2>

                  <p className="mt-4 leading-7 text-zinc-600">
                    {selectedWork.description}
                  </p>
                </div>
              </Preview>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
