"use client";

import Link from "next/link";
import { motion } from "motion/react";

export default function HomeNav() {
  return (
    <section>
      <nav>
        <ul className="flex flex-col gap-2 text-2xl">
          <li>
            <Link href="/work">
              <motion.span layoutId="work-title">Work</motion.span>
            </Link>
          </li>

          <li>
            <Link href="/projects">
              <motion.span layoutId="projects-title">Projects</motion.span>
            </Link>
          </li>

          <li>
            <a href="mailto:jhaitaoyu14@gmail.com">Email</a>
          </li>

          <li>
            <a
              href="https://www.linkedin.com/in/jackie-yu-1a1619203/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </section>
  );
}
