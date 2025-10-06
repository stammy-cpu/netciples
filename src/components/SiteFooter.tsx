// components/SiteFooter.tsx
import Link from "next/link";

const linkClass =
  "text-neutral-300 hover:text-white underline underline-offset-4 decoration-neutral-500";

function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8h5v15H0zM8 8h4.8v2.2h.1c.7-1.3 2.5-2.7 5.1-2.7 5.5 0 6.5 3.6 6.5 8.3V23H19V16c0-1.7 0-3.8-2.3-3.8-2.3 0-2.7 1.8-2.7 3.7V23H8z" />
    </svg>
  );
}
function IconTwitter() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M19.633 7.997c.013.176.013.353.013.53 0 5.396-4.109 11.62-11.62 11.62-2.309 0-4.457-.676-6.262-1.843.322.038.63.051.965.051a8.21 8.21 0 0 0 5.086-1.75 4.104 4.104 0 0 1-3.834-2.844c.25.038.5.063.763.063.366 0 .732-.05 1.073-.139A4.097 4.097 0 0 1 1.6 9.22v-.051c.551.304 1.186.49 1.862.514A4.09 4.09 0 0 1 1.4 6.67c0-.765.203-1.47.558-2.082a11.65 11.65 0 0 0 8.457 4.29 4.62 4.62 0 0 1-.102-.94 4.09 4.09 0 0 1 7.08-2.8 8.06 8.06 0 0 0 2.598-.989 4.1 4.1 0 0 1-1.798 2.26 8.24 8.24 0 0 0 2.36-.64 8.8 8.8 0 0 1-2.02 2.027z" />
    </svg>
  );
}
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
      <path d="M22.675 0H1.325C.593 0 0 .593 0 1.326V22.67c0 .732.593 1.326 1.325 1.326h11.495V14.71h-3.13v-3.62h3.13V8.41c0-3.1 1.893-4.79 4.66-4.79 1.325 0 2.463.098 2.793.142v3.24h-1.918c-1.504 0-1.795.715-1.795 1.763v2.313h3.59l-.468 3.62h-3.122V24h6.116c.73 0 1.324-.594 1.324-1.326V1.326C24 .593 23.406 0 22.675 0z" />
    </svg>
  );
}

export default function SiteFooter() {
  return (
    <footer className="bg-[#0f0f10] text-neutral-300">
      <div className="container max-w-[1280px] mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Logo */}
          <div className="flex items-start">
            <div className="h-8 w-8 rounded-full bg-white mr-3" />
            <span className="text-xl font-semibold text-white">Logo</span>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className={linkClass}>Home</Link></li>
              <li><Link href="/about" className={linkClass}>About</Link></li>
              <li><Link href="/services" className={linkClass}>Services</Link></li>
              <li><Link href="/blog" className={linkClass}>Blog</Link></li>
              <li><Link href="/contact" className={linkClass}>Contact Us</Link></li>
              <li><Link href="/privacy" className={linkClass}>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/services/managed-it" className={linkClass}>Managed IT Services</Link></li>
              <li><Link href="/services/cloud" className={linkClass}>Cloud Solutions</Link></li>
              <li><Link href="/services/software-dev" className={linkClass}>Software Development</Link></li>
              <li><Link href="/services/cybersecurity" className={linkClass}>Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="text-neutral-400">Address</li>
              <li className="text-neutral-400">Phone Number</li>
              <li className="text-neutral-400">Email</li>
            </ul>

            <h4 className="text-white font-semibold mt-8 mb-4">Follow Us</h4>
            <div className="flex items-center gap-4">
              <Link href="#" aria-label="LinkedIn" className="rounded-full bg-[#1f2937] p-2 hover:bg-[#2a3342] text-[#9ec1ff]">
                <IconLinkedIn />
              </Link>
              <Link href="#" aria-label="Twitter" className="rounded-full bg-[#1f2937] p-2 hover:bg-[#2a3342] text-[#9ec1ff]">
                <IconTwitter />
              </Link>
              <Link href="#" aria-label="Facebook" className="rounded-full bg-[#1f2937] p-2 hover:bg-[#2a3342] text-[#9ec1ff]">
                <IconFacebook />
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-neutral-700/60" />

        {/* Copyright */}
        <div className="py-6 text-center text-sm text-neutral-400">
          © 2025 Netciple. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
