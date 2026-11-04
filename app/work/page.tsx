// app/work/page.tsx

"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft } from "lucide-react";
import Preview from "../components/Preview";
import {
  siReact,
  siTypescript,
  siJavascript,
  siTailwindcss,
  siNodedotjs,
  siPython,
  siCss,
  siHtml5,
  siMongodb,
  siElastic,
} from "simple-icons";
import type { SimpleIcon } from "simple-icons";
import { select } from "motion/react-client";

type Project = {
  title: string;
  description: string;
  video?: string;
};

const workItems = [
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
    techStack: [siReact, siTypescript, siJavascript, siCss, siHtml5],
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
    techStack: [
      siReact,
      siPython,
      siJavascript,
      siNodedotjs,
      siMongodb,
      siElastic,
    ],
  },
  {
    company: "CodeClan",
    role: "Junior Frontend Developer",
    dates: "2021 - 2022",
    summary:
      "Developing customer-facing experiences using React and TypeScript, running A/B experiments across PDPs, PLPs, cart and checkout for clients including Tractor Supply Company and AO.",
    description:
      "Built responsive web interfaces using HTML, CSS, JavaScript and React. Developed reusable components, implemented forms and client-side validation, and worked with React state management to create functional, user-friendly experiences.",
    techStack: [siReact, siJavascript, siCss, siHtml5],
  },
];

export default function Work() {
  const [selectedWork, setSelectedWork] = useState(null);

  const handleBack = () => setSelectedWork(null);

  return (
    <main className="px-8 py-4">
      {selectedWork && (
        <div className="flex gap-2">
          <motion.button
            type="button"
            onClick={handleBack}
            className="cursor-pointer"
          >
            <ArrowLeft size={24} />
          </motion.button>

          <div className="w-full">
            <h2 className="text-xl font-semibold">{selectedWork.company}</h2>
          </div>
        </div>
      )}

      <section className="mt-4">
        <AnimatePresence mode="wait">
          {!selectedWork ? (
            <RolesList selectWork={setSelectedWork} />
          ) : (
            <RoleDetailView selectedWork={selectedWork} />
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}

const RolesList = ({ selectWork }) => {
  return (
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
            onClick={() => selectWork(item)}
            className="w-full cursor-pointer text-left"
          >
            <h2 className="text-3xl font-semibold">{item.company}</h2>

            <div className="mt-2 space-y-1">
              <div className="flex justify-between gap-4 text-sm">
                <span>{item.role}</span>
                <span className="text-right text-secondary">{item.dates}</span>
              </div>

              {item.previousRole && (
                <div className="flex justify-between gap-4 text-sm">
                  <span>{item.previousRole.role}</span>
                  <span className="text-right text-secondary">
                    {item.previousRole.dates}
                  </span>
                </div>
              )}
            </div>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-secondary">
              {item.summary}
            </p>

            <div className="mt-4 flex items-center gap-3">
              {item.techStack.map((icon) => (
                <TechIcon key={icon.title} icon={icon} />
              ))}
            </div>
          </button>
        </motion.article>
      ))}
    </motion.div>
  );
};

const RoleDetailView = ({ selectedWork }) => {
  const [projectIndex, setProjectIndex] = useState(0);

  const projects = selectedWork.projects ?? [];
  const currentProject = projects[projectIndex];

  const nextProject = () => {
    setProjectIndex((index) => (index + 1) % projects.length);
  };

  const previousProject = () => {
    setProjectIndex((index) => (index - 1 + projects.length) % projects.length);
  };

  return (
    <motion.div
      key={`preview-${selectedWork.company}`}
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="flex flex-col items-center pb-20"
    >
      {projects.length > 0 ? (
        <>
          <Preview
            video={currentProject?.video}
            onNext={nextProject}
            onPrevious={previousProject}
            showArrows={projects.length > 1}
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
                <p className="mb-2 text-xs text-secondary">
                  {projectIndex + 1} / {projects.length}
                </p>

                <h3 className="text-xl font-semibold">
                  {currentProject?.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-text">
                  {currentProject?.description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </>
      ) : (
        <div className="w-full max-w-2xl">
          <p className="text-sm text-secondary">
            {selectedWork.role} · {selectedWork.dates}
          </p>
          {(selectedWork.company.toLowerCase().includes("source mogul") ||
            selectedWork.company.toLowerCase().includes("codeclan")) && (
            <div className="mt-4 flex items-center gap-3">
              {selectedWork.techStack.map((icon) => (
                <TechIcon key={icon.title} icon={icon} />
              ))}
            </div>
          )}
          <p className="mt-4 text-base leading-7 text-text">
            {selectedWork.description}
          </p>
        </div>
      )}
    </motion.div>
  );
};

type TechIconProps = {
  icon: SimpleIcon;
};

const TechIcon = ({ icon }: TechIconProps) => (
  <span title={icon.title}>
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill={`#${icon.hex}`}>
      <path d={icon.path} />
    </svg>
  </span>
);
