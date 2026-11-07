"use client";

import { motion } from "motion/react";
import Image from "next/image";

const projects = [
  {
    title: "Budgeting App",
    status: "In development",
    images: null,
  },
  {
    title: "Dictionary",
    images: {
      mobile: "/images/dictionary-mobile.png",
      tablet: "/images/dictionary-tablet.png",
      desktop: "/images/dictionary.png",
    },
  },
];

export default function Page() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-3xl p-8">
      <motion.h1 layoutId="work-title" className="text-3xl font-semibold">
        Projects
      </motion.h1>

      <section className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.15 }}
            className="group overflow-hidden rounded-xl border border-line bg-card transition-colors duration-200 hover:border-link"
          >
            <div className="relative aspect-[9/16] overflow-hidden bg-page sm:aspect-[4/3] lg:aspect-video">
              {project.images ? (
                <>
                  <Image
                    src={project.images.mobile}
                    alt={`${project.title} mobile screenshot`}
                    fill
                    className="object-contain sm:hidden"
                  />

                  <Image
                    src={project.images.tablet}
                    alt={`${project.title} tablet screenshot`}
                    fill
                    className="hidden object-contain sm:block lg:hidden"
                  />

                  <Image
                    src={project.images.desktop}
                    alt={`${project.title} desktop screenshot`}
                    fill
                    className="hidden object-contain lg:block"
                  />
                </>
              ) : (
                <div className="flex h-full flex-col items-center justify-center gap-3 text-secondary">
                  <icon name="code-2" size="3xl" />
                  <span className="text-sm">Under development</span>
                </div>
              )}
            </div>

            <div className="border-t border-line px-4 py-3">
              <h2 className="font-semibold transition-colors group-hover:text-link">
                {project.title}
              </h2>
            </div>
          </motion.article>
        ))}
      </section>
    </main>
  );
}
