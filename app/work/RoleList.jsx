import { motion } from "motion/react";

export default function RoleList({ roles, onSelect }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="mx-auto w-full max-w-3xl"
    >
      <h1 className="mb-8 mt-10 text-5xl font-bold tracking-tighter">
        Experience
      </h1>

      <ul className="overflow-hidden rounded-2xl bg-surface">
        {roles.map((role, index) => (
          <motion.li
            key={role.company}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            {role.projects ? (
              <button
                type="button"
                onClick={() => onSelect(role)}
                className="group flex w-full cursor-pointer items-center gap-4 px-5 text-left transition-colors hover:bg-line/40"
              >
                <Role role={role} divider={index > 0} />
                <span
                  aria-hidden="true"
                  className="text-2xl text-muted transition-transform group-hover:translate-x-0.5"
                >
                  ›
                </span>
              </button>
            ) : (
              <div className="px-5">
                <Role role={role} divider={index > 0} />
              </div>
            )}
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}

function Role({ role, divider }) {
  return (
    <span
      className={`flex min-w-0 flex-1 flex-col gap-0.5 py-4 sm:gap-1.5 sm:py-6 ${
        divider ? "border-t border-line" : ""
      }`}
    >
      <span className="text-[17px] font-semibold tracking-tight sm:text-[22px]">
        {role.company}
      </span>
      <RoleLine role={role.role} dates={role.dates} />
      {role.previousRole && (
        <RoleLine
          role={role.previousRole.role}
          dates={role.previousRole.dates}
        />
      )}
      {role.description && (
        <span className="mt-1.5 text-[15px] leading-relaxed text-muted">
          {role.description}
        </span>
      )}
    </span>
  );
}

function RoleLine({ role, dates }) {
  return (
    <span className="flex justify-between gap-4 text-[15px] text-muted sm:text-foreground">
      <span>{role}</span>
      <span className="whitespace-nowrap tabular-nums text-muted">{dates}</span>
    </span>
  );
}
