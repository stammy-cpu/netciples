// components/Footer.tsx
import Link from "next/link";

const linkCls =
  "text-white/75 hover:text-white underline underline-offset-4 decoration-white/40";

export default function Footer() {
  return (
    <footer className="bg-[#171717] text-white">
      <div className="mx-auto max-w-[1280px] px-4 sm:px-6 py-12 md:py-14">
        {/* top grid */}
        <div className="grid gap-10 md:gap-12 grid-cols-2 md:grid-cols-5">
          {/* Brand / Logo */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-semibold tracking-tight">
              Logo
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold">Quick Links</h4>
            <ul className="mt-5 space-y-3">
              <li><Link href="/" className={linkCls}>Home</Link></li>
              <li><Link href="/about" className={linkCls}>About</Link></li>
              <li><Link href="/services" className={linkCls}>Services</Link></li>
              <li><Link href="/blog" className={linkCls}>Blog</Link></li>
              <li><Link href="/contact" className={linkCls}>Contact Us</Link></li>
              <li><Link href="/privacy" className={linkCls}>Privacy Policy</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold">Services</h4>
            <ul className="mt-5 space-y-3">
              <li><Link href="/services#managed-it" className={linkCls}>Managed IT Services</Link></li>
              <li><Link href="/services#cloud" className={linkCls}>Cloud Solutions</Link></li>
              <li><Link href="/services#software" className={linkCls}>Software Development</Link></li>
              <li><Link href="/services#security" className={linkCls}>Cybersecurity</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold">Contact Us</h4>
            <ul className="mt-5 space-y-3 text-white/70">
              <li>Address</li>
              <li>Phone Number</li>
              <li>Email</li>
            </ul>
          </div>

          {/* Follow Us */}
          <div>
            <h4 className="text-white font-semibold">Follow Us</h4>
            <div className="mt-5 flex items-center gap-5">
              <Link aria-label="LinkedIn" href="#" className="group">
                <svg className="h-7 w-7 rounded-full bg-[#0A66C2] text-white p-1.5 transition-transform group-hover:scale-110"
                     viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM0 8.98h5V24H0zM8.98 8.98H14v2.05h.07c.7-1.33 2.42-2.73 4.98-2.73 5.33 0 6.32 3.5 6.32 8.04V24h-5v-6.98c0-1.66-.03-3.79-2.31-3.79-2.31 0-2.66 1.8-2.66 3.67V24h-5z"/>
                </svg>
              </Link>
              <Link aria-label="Twitter" href="#" className="group">
                <svg className="h-7 w-7 rounded-full bg-[#1DA1F2] text-white p-1.5 transition-transform group-hover:scale-110"
                     viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23 2.999a10.9 10.9 0 0 1-3.14.86A4.48 4.48 0 0 0 22.4.36a9.03 9.03 0 0 1-2.86 1.1A4.51 4.51 0 0 0 11.5 6.4a12.8 12.8 0 0 1-9.29-4.71 4.49 4.49 0 0 0 1.39 6.02A4.41 4.41 0 0 1 .96 7.2v.06A4.51 4.51 0 0 0 4.5 11.7a4.52 4.52 0 0 1-2.04.08 4.51 4.51 0 0 0 4.21 3.14A9.06 9.06 0 0 1 0 18.58a12.78 12.78 0 0 0 6.92 2.03c8.3 0 12.85-6.88 12.85-12.85l-.01-.59A9.2 9.2 0 0 0 23 2.999z"/>
                </svg>
              </Link>
              <Link aria-label="Facebook" href="#" className="group">
                <svg className="h-7 w-7 rounded-full bg-[#1877F2] text-white p-1.5 transition-transform group-hover:scale-110"
                     viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.675 0H1.325C.593 0 0 .592 0 1.324v21.352C0 23.407.593 24 1.325 24H12.82V14.706h-3.1v-3.61h3.1V8.41c0-3.066 1.874-4.737 4.612-4.737 1.312 0 2.438.097 2.766.141v3.207l-1.899.001c-1.49 0-1.777.708-1.777 1.747v2.289h3.555l-.463 3.61h-3.092V24h6.066C23.407 24 24 23.407 24 22.676V1.324C24 .592 23.407 0 22.675 0z"/>
                </svg>
              </Link>
            </div>
          </div>
        </div>

        {/* divider */}
        <div className="mt-12 border-t border-white/10" />

        {/* bottom copyright */}
        <div className="py-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} Netciples. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
