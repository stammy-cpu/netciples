// src/components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Typewriter from "@/components/Typewriter";

const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About Us" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contacts" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
      <div className="container grid grid-cols-[1fr_auto_1fr] items-center gap-4 py-3 md:py-4">
        <Link href="/" className="text-xl font-bold tracking-tight text-black">
          Netciples
        </Link>

        <nav className="hidden md:flex items-center justify-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-neutral-700 transition-colors duration-200 hover:text-black hover:font-semibold"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        {/* Types once, no loop, no blinking cursor after */}
        <div className="hidden md:flex justify-end">
          <Button asChild className="h-11 rounded-full px-6 bg-black text-white hover:bg-neutral-900">
            <Link href="/contact" aria-label="Get a Free Consultation">
              <Typewriter
                words={["Get a Free Consultation"]}
                loop={false}
                showCursor={false}
                typingSpeed={50}
              />
            </Link>
          </Button>
        </div>

        <button
          className="md:hidden justify-self-end inline-flex h-9 w-9 items-center justify-center rounded-md border"
          onClick={() => setOpen((s) => !s)}
          aria-label="Toggle menu"
        >
          <Menu className="h-5 w-5" />
        </button>
      </div>

      {open && (
        <div className="border-t bg-white md:hidden">
          <div className="container flex flex-col gap-2 py-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="rounded-md px-2 py-2 text-sm text-neutral-900 transition-colors duration-200 hover:bg-neutral-50 hover:font-semibold"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Button asChild className="mt-2 h-11 rounded-full px-6 bg-black text-white hover:bg-neutral-900">
              <Link href="/contact" onClick={() => setOpen(false)}>
                <Typewriter words={["Get a Free Consultation"]} loop={false} showCursor={false} />
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
