// app/work/page.tsx

"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Preview from "../components/Preview";

type Project = {
  title: string;
  description: string;
  video?: string;
};

type WorkItem = {
  company: string;
  role: string;
  dates: string;
  previousRole?: {
    role: string;
    dates: string;
  };
  summary: string;
  description?: string;
  projects?: Project[];
};

const workItems: WorkItem[] = [
  {
    company: "Good Growth",
    role: "Software Developer",
    dates: "2025 - Present",
    summary:
      "Developing customer-facing experiences using React and TypeScript, running A/B experiments across PDPs, PLPs, cart and checkout for clients including Tractor Supply Company and AO.",
    projects: [
      {
        title: "Checkout Login Optimisation",
        description:
          "Redesigned the checkout login experience for Tractor Supply Company, bringing sign-in directly into the checkout flow. Users can clearly choose to continue as a guest or sign in to sync their cart, making the available options more visible and accessible.",
        video: "/videos/gg_vid1.mp4",
      },
      {
        title: "Product Listing Page Redesign",
        description:
          "Redesigned the product listing page experience by introducing a hero banner and additional product banners, improving content visibility and creating a more engaging shopping experience.",
        video: "/videos/gg_vid2.mp4",
      },
      {
        title: "E-commerce Experimentation",
        description:
          "Developed and tested customer-facing UI experiments using React and TypeScript, working across product detail pages, product listings, cart and checkout for major e-commerce clients including Tractor Supply Company and AO.",
        video: "/videos/gg_vid3.mp4",
      },
    ],
  },
  {
    company: "Source Mogul",
    role: "Software Developer",
    dates: "2023 - 2025",
    previousRole: {
      role: "Junior Developer",
      dates: "2022 - 2023",
    },
    summary:
      "Backend development, APIs, web crawling and infrastructure optimisation using TypeScript, Node.js, MongoDB and Python.",
    description:
      "Developed and maintained backend systems, REST APIs and web crawlers using JavaScript, TypeScript, Node.js, Express, MongoDB and Python. Managed production crawler jobs through PM2, debugged issues, reviewed code and coordinated outsourced developers. Led the migration from Apify to Scrapy, saving approximately $3,000 per month, while optimising proxy usage to reduce costs by a further $1,000 per month.",
  },
  {
    company: "CodeClan",
    role: "Junior Frontend Developer",
    dates: "2021 - 2022",
    summary:
      "Developing customer-facing experiences using React and TypeScript, running A/B experiments across PDPs, PLPs, cart and checkout for clients including Tractor Supply Company and AO.",
    description:
      "Built responsive web interfaces using HTML, CSS, JavaScript and React. Developed reusable components, implemented forms and client-side validation, and worked with React state management to create functional, user-friendly experiences.",
  },
];

export default function Work() {
  const [selectedWork, setSelectedWork] = useState<WorkItem | null>(null);
  const [projectIndex, setProjectIndex] = useState(0);

  const currentProject = selectedWork?.projects?.[projectIndex];

  const nextProject = () => {
    if (!selectedWork?.projects?.length) return;

    setProjectIndex((prev) => (prev + 1) % selectedWork.projects!.length);
  };

  const previousProject = () => {
    if (!selectedWork?.projects?.length) return;

    setProjectIndex(
      (prev) =>
        (prev - 1 + selectedWork.projects!.length) %
        selectedWork.projects!.length,
    );
  };

  return (
    <main className="px-8 py-4">
      <motion.button
        type="button"
        onClick={() => {
          if (selectedWork) {
            setSelectedWork(null);
            setProjectIndex(0);
          } else {
            window.location.href = "/";
          }
        }}
        className="cursor-pointer"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="currentColor"
          className="mi-solid mi-arrow-back"
          viewBox="0 0 24 24"
        >
          <path d="M19 11H7.83l4.88-4.88c.39-.39.39-1.03 0-1.42a.996.996 0 0 0-1.41 0l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.996.996 0 1 0 1.41-1.41L7.83 13H19c.55 0 1-.45 1-1s-.45-1-1-1" />
        </svg>
      </motion.button>

      <section className="mt-4">
        <AnimatePresence mode="wait">
          {!selectedWork ? (
            // WORK LIST
            <motion.div
              key="work-list"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {workItems.map((item, index) => (
                <motion.article
                  key={item.company}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="mb-4"
                >
                  <button
                    type="button"
                    onClick={() => {
                      setSelectedWork(item);
                      setProjectIndex(0);
                    }}
                    className="w-full cursor-pointer text-left"
                  >
                    <h2 className="text-3xl font-semibold">{item.company}</h2>

                    <div className="mt-2 space-y-1">
                      <div className="flex justify-between gap-4 text-sm">
                        <span>{item.role}</span>
                        <span className="text-right text-zinc-500">
                          {item.dates}
                        </span>
                      </div>

                      {item.previousRole && (
                        <div className="flex justify-between gap-4 text-sm">
                          <span>{item.previousRole.role}</span>
                          <span className="text-right text-zinc-500">
                            {item.previousRole.dates}
                          </span>
                        </div>
                      )}
                    </div>

                    <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-500">
                      {item.summary}
                    </p>
                  </button>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            // SELECTED WORK PREVIEW
            <motion.div
              key={`preview-${selectedWork.company}`}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="flex flex-col items-center pb-20"
            >
              <div className="mb-3 w-full">
                <h2 className="text-xl font-semibold">
                  {selectedWork.company}
                </h2>
              </div>
              {selectedWork.projects?.length ? (
                <>
                  <Preview
                    video={currentProject?.video}
                    onNext={nextProject}
                    onPrevious={previousProject}
                    showArrows={selectedWork.projects.length > 1}
                  />

                  <div className="mt-16 w-full max-w-4xl">
                    <AnimatePresence mode="wait">
                      <motion.div
                        key={`${selectedWork.company}-${projectIndex}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                      >
                        <p className="mb-2 text-xs text-zinc-500">
                          {projectIndex + 1} / {selectedWork.projects.length}
                        </p>

                        <h3 className="text-xl font-semibold">
                          {currentProject?.title}
                        </h3>

                        <p className="mt-2 text-sm leading-6 text-zinc-600">
                          {currentProject?.description}
                        </p>
                      </motion.div>
                    </AnimatePresence>
                  </div>
                </>
              ) : (
                <div className="w-full max-w-2xl">
                  <p className="text-sm text-zinc-500">
                    {selectedWork.role} · {selectedWork.dates}
                  </p>

                  <p className="mt-4 text-base leading-7 text-zinc-600">
                    {selectedWork.description}
                  </p>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
