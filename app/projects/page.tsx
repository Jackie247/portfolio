"use client";

import { motion } from "motion/react";
import Image from "next/image";

const projects = [
  {
    title: "Budgeting App",
    type: "In development",
    images: null,
  },
  {
    title: "Dictionary",
    type: "Personal project · 2024",
    url: "https://jyu-dictionary.netlify.app/",
    images: {
      mobile: "/images/dictionary-mobile.png",
      desktop: "/images/dictionary.png",
    },
  },
];

export default function Projects() {
  return (
    <main className="mx-auto w-full max-w-5xl px-5 pb-16 md:px-8">
      <h1 className="mb-5 mt-7 text-4xl font-bold tracking-tighter md:mb-8 md:mt-10 md:text-5xl">
        Projects
      </h1>

      <section className="grid gap-3 md:grid-cols-2 md:gap-4">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl bg-surface"
          >
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Open ${project.title}`}
                className="absolute inset-0 z-10"
              />
            )}

            <div className="p-2.5 pb-0 md:p-3 md:pb-0">
              <div className="relative aspect-[2/1] overflow-hidden rounded-[10px] bg-background md:aspect-[16/10]">
                {project.images && (
                  <>
                    <Image
                      src={project.images.mobile}
                      alt={`${project.title} on mobile`}
                      fill
                      sizes="100vw"
                      className="object-cover object-top md:hidden"
                    />
                    <Image
                      src={project.images.desktop}
                      alt={`${project.title} on desktop`}
                      fill
                      sizes="50vw"
                      className="hidden object-cover object-left-top transition-transform duration-500 group-hover:scale-[1.015] md:block"
                    />
                  </>
                )}
              </div>
            </div>

            <div className="flex items-baseline justify-between gap-3 px-4 pb-3.5 pt-3 md:px-5 md:pb-4.5 md:pt-4">
              <h2 className="text-[17px] font-semibold tracking-tight md:text-xl">
                {project.title}
                {project.url && <span className="ml-1 text-muted">↗</span>}
              </h2>
              <span className="text-muted">{project.type}</span>
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
