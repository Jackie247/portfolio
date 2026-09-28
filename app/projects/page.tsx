// app/work/page.tsx

"use client";

import { motion } from "motion/react";

export default function Page() {
  return (
    <main className="min-h-screen w-full max-w-3xl mx-auto px-8 py-16">
      <motion.h1 layoutId="work-title" className="text-3xl font-semibold">
        Projects
      </motion.h1>

      <section className="mt-24">
        <motion.article
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl">Budget Tracker</h2>
        </motion.article>
      </section>
    </main>
  );
}
