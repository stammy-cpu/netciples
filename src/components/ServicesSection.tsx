// src/components/ServicesSection.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ServerCog, Cloud, Headset, ShieldCheck } from "lucide-react";

type Service = {
  title: string;
  desc: string;
  href: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const services: Service[] = [
  {
    title: "Managed IT Services",
    desc:
      "We’ve done it carefully and simply. Combined with the ingredients makes for beautiful landings.",
    href: "/services",
    icon: ServerCog,
  },
  {
    title: "Azure cloud managed services",
    desc:
      "We’ve done it carefully and simply. Combined with the ingredients makes for beautiful landings.",
    href: "/services",
    icon: Cloud,
  },
  {
    title: "360 IT help desk",
    desc:
      "We’ve done it carefully and simply. Combined with the ingredients makes for beautiful landings.",
    href: "/services",
    icon: Headset,
  },
  {
    title: "Cybersecurity",
    desc:
      "We’ve done it carefully and simply. Combined with the ingredients makes for beautiful landings.",
    href: "/services",
    icon: ShieldCheck,
  },
];

// Parent stagger (typesafe)
const listVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

// Slide-in from left/right; second row starts a bit later
const makeItem = (dir: "left" | "right", delay = 0): Variants => ({
  hidden: { opacity: 0, x: dir === "left" ? -48 : 48 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.5, delay }, // simple for Motion v11 types
  },
});

export default function ServicesSection() {
  return (
    <section className="container py-20">
      {/* Heading like Figma */}
      <div className="mb-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black">
          Our Core Services
        </h2>
        <p className="mt-2 max-w-2xl text-neutral-600">
          Comprehensive IT solutions designed to optimize your business
          operations and security
        </p>
      </div>

      <motion.div
        variants={listVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="grid gap-8 md:grid-cols-2"
      >
        {services.map(({ title, desc, href, icon: Icon }, idx) => {
          const isLeftCol = idx % 2 === 0;
          const delay = idx < 2 ? 0 : 0.15; // first row, then second row
          const itemVariants = makeItem(isLeftCol ? "left" : "right", delay);

          return (
            <motion.article
              key={title}
              variants={itemVariants}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="group relative overflow-hidden rounded-[22px] border border-neutral-200 bg-white p-8 md:p-10 shadow-[0_1px_0_rgba(0,0,0,0.03)]"
            >
              {/* Taller black accent line on hover (almost full height) */}
              <div className="pointer-events-none absolute left-0 top-2 bottom-2 w-[4px] origin-top scale-y-0 bg-black opacity-0 transition duration-300 group-hover:scale-y-100 group-hover:opacity-100" />

              <div className="mb-5 flex items-center gap-3">
                {/* Icon wrapper: grey → black on hover */}
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-100 transition-colors duration-300 group-hover:bg-black">
                  {/* Icon: flips & turns white on hover */}
                  <Icon
                    className="h-5 w-5 text-neutral-700 transition-[transform,color] duration-300 group-hover:text-white group-hover:[transform:rotateY(180deg)]"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-black">{title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{desc}</p>

              <Link
                href={href}
                className="mt-4 inline-block text-sm font-medium text-black hover:underline"
              >
                Learn More...
              </Link>
            </motion.article>
          );
        })}
      </motion.div>
    </section>
  );
}
