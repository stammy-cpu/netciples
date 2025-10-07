// components/Header.tsx
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type NavItem = { href: string; label: string };

const NAV: NavItem[] = [
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Lock background scroll when mobile menu is open (also prevents "text under overlay" feeling)
  useEffect(() => {
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    const prevOverscroll = document.body.style.overscrollBehavior;
    if (open) {
      root.style.overflow = "hidden";
      document.body.style.overscrollBehavior = "contain";
    } else {
      root.style.overflow = "";
      document.body.style.overscrollBehavior = "";
    }
    return () => {
      root.style.overflow = prevOverflow;
      document.body.style.overscrollBehavior = prevOverscroll;
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(href + "/");

  return (
    <header className="sticky top-0 z-[100] border-b bg-white/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1280px] items-center px-4">
        {/* Left: Logo */}
        <Link href="/" className="text-lg font-semibold tracking-tight">
          Netciples
        </Link>

        {/* Middle: Desktop nav */}
        <nav className="ml-8 hidden items-center gap-8 text-sm md:flex">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "transition-colors",
                "hover:underline underline-offset-[6px] decoration-2",
                isActive(item.href)
                  ? "underline decoration-neutral-900 text-neutral-900"
                  : "text-neutral-700 hover:text-neutral-900",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Right: Desktop CTA (pill with shine) */}
        <Link
          href="/contact"
          className="btn-cta relative ml-auto hidden h-10 items-center overflow-hidden rounded-full bg-black px-5 text-sm font-medium text-white shadow-[0_10px_22px_-12px_rgba(0,0,0,0.35)] md:inline-flex"
        >
          <span className="relative z-10">Request a Consultation</span>
          <span aria-hidden className="shine pointer-events-none absolute inset-0" />
        </Link>

        {/* Right: Mobile hamburger (far right) */}
        <button
          aria-label="Open menu"
          onClick={() => setOpen(true)}
          className="ml-auto inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-200 md:hidden"
        >
          <Menu className="h-5 w-5 text-neutral-900" />
        </button>
      </div>

      {/* Mobile drawer overlay (highest z to beat maps/cards) */}
      {open && (
        <div className="fixed inset-0 z-[9999] md:hidden">
          {/* Backdrop: darker, no blur (so bg text doesn’t show through) */}
          <div
            className="absolute inset-0 bg-black/70"
            onClick={() => setOpen(false)}
          />
          {/* Slide-in panel */}
          <div
            role="dialog"
            aria-modal="true"
            className="absolute right-0 top-0 h-full w-[82%] max-w-[380px] bg-white shadow-2xl"
          >
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

            <nav className="flex flex-col gap-1 p-2 text-[15px]">
              {NAV.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "rounded-md px-3 py-3",
                    "hover:bg-neutral-100",
                    isActive(item.href) ? "font-semibold text-neutral-900" : "text-neutral-800",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-black px-4 py-3 text-center text-sm font-medium text-white hover:bg-neutral-900"
              >
                Request a Consultation
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* CTA shine animation (scoped) */}
      <style jsx global>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .btn-cta .shine {
          background: linear-gradient(
            110deg,
            rgba(255, 255, 255, 0) 20%,
            rgba(255, 255, 255, 0.35) 45%,
            rgba(255, 255, 255, 0) 70%
          );
          transform: translateX(-100%);
        }
        .btn-cta:hover .shine {
          animation: shine 1.15s ease-in-out;
        }
      `}</style>
    </header>
  );
}
