import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import Preview from "../components/Preview";

export default function RoleDetail({ role }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.25 }}
      className="pb-20"
    >
      <Projects role={role} />
    </motion.div>
  );
}

function Projects({ role }) {
  const [client, setClient] = useState(role.clients[0]);
  const [index, setIndex] = useState(0);

  const projects = role.projects.filter((project) => project.client === client);
  const project = projects[index];

  const selectClient = (name) => {
    setClient(name);
    setIndex(0);
  };
  const next = () => setIndex((i) => (i + 1) % projects.length);
  const previous = () =>
    setIndex((i) => (i - 1 + projects.length) % projects.length);

  return (
    <div className="mx-auto w-full max-w-7xl xl:flex xl:gap-6">
      <div className="xl:flex-1">
        <header className="text-center xl:text-left">
          <h1 className="text-4xl font-bold tracking-tighter md:text-5xl">
            {role.company}
          </h1>
          <p className="mt-2 text-muted md:text-lg">
            {role.role} · {role.dates}
          </p>
        </header>

        <div className="mx-auto mt-6 flex max-w-md rounded-[10px] bg-surface p-[3px] xl:max-w-none">
          {role.clients.map((name) => (
            <button
              key={name}
              type="button"
              onClick={() => selectClient(name)}
              className={`min-h-9 flex-1 cursor-pointer rounded-lg text-[13px] font-semibold transition md:text-sm ${
                name === client
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {project && (
          <ProjectList
            projects={projects}
            index={index}
            onSelect={setIndex}
            showDescription
            className="mt-6 hidden xl:block"
          />
        )}
      </div>

      <div className="mt-6 xl:mt-0 xl:flex-[1.5]">
        {!project ? (
          <p className="rounded-3xl bg-surface px-6 py-24 text-center text-xl font-semibold tracking-tight">
            {client} projects coming soon.
          </p>
        ) : (
          <>
            <div className="flex flex-col items-center gap-6 rounded-3xl bg-surface px-6 py-8 md:p-10 xl:px-12 xl:pb-9 xl:pt-14">
              <Preview videos={project.videos} title={project.title} />

              {projects.length > 1 && (
                <div className="flex items-center gap-4">
                  <ArrowButton label="Previous project" onClick={previous}>
                    ‹
                  </ArrowButton>
                  <span className="min-w-10 text-center tabular-nums text-muted">
                    {index + 1} / {projects.length}
                  </span>
                  <ArrowButton label="Next project" onClick={next}>
                    ›
                  </ArrowButton>
                </div>
              )}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="mt-6 px-1 xl:hidden"
              >
                <h2 className="text-2xl font-semibold tracking-tight">
                  {project.title}
                </h2>
                <p className="mt-2 leading-relaxed text-muted">
                  {project.description}
                </p>
              </motion.div>
            </AnimatePresence>

            <ProjectList
              projects={projects}
              index={index}
              onSelect={setIndex}
              className="mt-10 xl:hidden"
            />
          </>
        )}
      </div>
    </div>
  );
}

function ProjectList({
  projects,
  index,
  onSelect,
  showDescription,
  className,
}) {
  return (
    <ol className={`overflow-hidden rounded-2xl bg-surface ${className}`}>
      {projects.map((item, i) => {
        const active = i === index;

        return (
          <li key={item.title} className={i > 0 ? "border-t border-line" : ""}>
            <button
              type="button"
              onClick={() => onSelect(i)}
              className={`flex w-full cursor-pointer gap-3.5 px-5 py-4 text-left transition-colors ${
                active ? "bg-line/40" : "hover:bg-line/20"
              }`}
            >
              <span className="w-4 tabular-nums text-muted">{i + 1}</span>
              <span className="flex-1">
                <span className={`block ${active ? "font-semibold" : ""}`}>
                  {item.title}
                </span>
                {active && showDescription && (
                  <span className="mt-1.5 block leading-relaxed text-muted">
                    {item.description}
                  </span>
                )}
              </span>
            </button>
          </li>
        );
      })}
    </ol>
  );
}

function ArrowButton({ label, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-full bg-background text-xl transition-opacity hover:opacity-70"
    >
      {children}
    </button>
  );
}
