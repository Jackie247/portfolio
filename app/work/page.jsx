"use client";

import { useState } from "react";
import { AnimatePresence } from "motion/react";
import { roles } from "./roles";
import RoleList from "./RoleList";
import RoleDetail from "./RoleDetail";

export default function Work() {
  const [selected, setSelected] = useState(null);

  return (
    <main className="mx-auto w-full max-w-7xl px-6 py-4">
      {selected && (
        <button
          type="button"
          onClick={() => setSelected(null)}
          className="cursor-pointer text-sm text-muted hover:text-foreground"
        >
          ‹ Experience
        </button>
      )}

      <section className="mt-4">
        <AnimatePresence mode="wait">
          {selected ? (
            <RoleDetail key={selected.company} role={selected} />
          ) : (
            <RoleList key="list" roles={roles} onSelect={setSelected} />
          )}
        </AnimatePresence>
      </section>
    </main>
  );
}
