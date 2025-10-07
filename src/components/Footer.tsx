// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-black text-white">
      <div className="mx-auto max-w-[1280px] px-4 py-8 sm:px-6">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <div className="text-base font-semibold">Netciples</div>
            <p className="text-sm text-white/70">
              Reliable IT solutions for your business growth.
            </p>
          </div>
          <nav className="flex flex-wrap gap-5 text-sm text-white/80">
            <Link href="/services" className="hover:text-white">Services</Link>
            <Link href="/industries" className="hover:text-white">Industries</Link>
            <Link href="/case-studies" className="hover:text-white">Case Studies</Link>
            <Link href="/contact" className="hover:text-white">Contact</Link>
          </nav>
        </div>
        <div className="mt-6 text-xs text-white/60">
          © {new Date().getFullYear()} Netciples. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
