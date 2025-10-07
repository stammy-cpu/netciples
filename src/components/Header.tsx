// components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center px-4">
        {/* Left: Logo */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Netciples
        </Link>

        {/* Desktop nav */}
        <nav className="ml-8 hidden items-center gap-8 text-sm text-neutral-700 md:flex">
          <Link href="/services">Services</Link>
          <Link href="/industries">Industries</Link>
          <Link href="/case-studies">Case Studies</Link>
          <Link href="/contact">Contact</Link>
        </nav>

        {/* Mobile hamburger — pushed to far right */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 md:hidden"
        >
          <Menu className="h-5 w-5 text-neutral-900" />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* backdrop */}
          <button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/40"
          />
          {/* panel */}
          <div className="absolute right-0 top-0 h-full w-[78%] max-w-[360px] bg-white shadow-xl">
            <div className="flex items-center justify-between border-b px-4 py-3">
              <span className="text-base font-semibold">Menu</span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-col gap-2 p-4 text-[15px]">
              <Link href="/services" onClick={() => setOpen(false)} className="rounded-md px-2 py-2 hover:bg-neutral-100">Services</Link>
              <Link href="/industries" onClick={() => setOpen(false)} className="rounded-md px-2 py-2 hover:bg-neutral-100">Industries</Link>
              <Link href="/case-studies" onClick={() => setOpen(false)} className="rounded-md px-2 py-2 hover:bg-neutral-100">Case Studies</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="rounded-md px-2 py-2 hover:bg-neutral-100">Contact</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
