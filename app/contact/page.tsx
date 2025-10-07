// app/contact/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b bg-neutral-50">
        <div className="container max-w-[1280px] mx-auto px-4 py-14 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-black">
            Contact Us
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-neutral-600">
            Ready to transform your business with expert IT solutions? Get in
            touch with our team for a free consultation and discover how we can
            help your business thrive.
          </p>
        </div>
      </section>

      {/* BLACK INFO STRIP */}
      <section className="bg-black text-white">
        <div className="container max-w-[1280px] mx-auto px-4 py-10">
          <div className="grid gap-8 md:grid-cols-12 md:items-start">
            <div className="md:col-span-5">
              <h2 className="text-xl font-semibold">
                Need IT Solutions? Contact Us for a Free Consultation
              </h2>
              <div className="mt-6 text-lg font-medium">info@netciples.com</div>
            </div>
            <div className="hidden md:block md:col-span-1">
              <div className="mx-auto h-full w-px bg-white/30" />
            </div>
            <div className="md:col-span-3">
              <div className="text-xs tracking-[0.18em] text-white/70">OFFICES</div>
              <div className="mt-4">
                <div className="font-semibold">Washington, D.C</div>
                <p className="mt-1 text-sm text-white/80">
                  2400 6th St NW, <br /> Washington, DC 20059
                </p>
              </div>
            </div>
            <div className="md:col-span-3">
              <div className="text-xs tracking-[0.18em] text-white/70">CONTACT US</div>
              <div className="mt-4">
                <div className="font-semibold">info@netciples.com</div>
                <div className="mt-2 font-semibold">(885) 761-6327</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GET IN TOUCH FORM */}
      <section className="bg-neutral-50">
        <div className="container max-w-[1280px] mx-auto px-4 py-16">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black">
              Get in Touch with Us
            </h2>
            <p className="mx-auto mt-3 max-w-3xl text-neutral-600">
              Please submit your business information and a Netciples
              representative will follow up with you within 24 hours.
            </p>
          </div>

          <form
            className="mx-auto mt-10 max-w-[880px] space-y-4"
            action="#"
            method="post"
          >
            <div className="grid gap-4 md:grid-cols-2">
              <input
                required
                name="fullName"
                placeholder="Full Name *"
                className="h-12 rounded-full border border-neutral-300 bg-white px-5 text-[15px] outline-none placeholder:text-neutral-400"
              />
              <input
                required
                type="email"
                name="email"
                placeholder="Email Address *"
                className="h-12 rounded-full border border-neutral-300 bg-white px-5 text-[15px] outline-none placeholder:text-neutral-400"
              />
              <input
                name="phone"
                placeholder="Phone Number"
                className="h-12 rounded-full border border-neutral-300 bg-white px-5 text-[15px] outline-none placeholder:text-neutral-400"
              />
              <input
                name="company"
                placeholder="Company Name"
                className="h-12 rounded-full border border-neutral-300 bg-white px-5 text-[15px] outline-none placeholder:text-neutral-400"
              />
              <select
                required
                name="inquiryType"
                className="h-12 rounded-full border border-neutral-300 bg-white px-5 text-[15px] outline-none text-neutral-700"
                defaultValue=""
              >
                <option value="" disabled>
                  Inquiry Type *
                </option>
                <option>Managed IT</option>
                <option>Azure Cloud</option>
                <option>Cybersecurity</option>
                <option>Help Desk</option>
                <option>General</option>
              </select>
              <div />
            </div>

            <textarea
              name="message"
              rows={6}
              placeholder="Your message"
              className="w-full rounded-2xl border border-neutral-300 bg-white p-5 text-[15px] outline-none placeholder:text-neutral-400"
            />

            <div className="pt-2">
              <Button
                type="submit"
                className="h-12 w-full rounded-full bg-black text-white hover:bg-neutral-900"
              >
                Send a Message
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* VISIT OUR OFFICE */}
      <section className="relative h-[700px] md:h-[760px]">
        {/* Map Background */}
        <iframe
          title="Map"
          className="absolute inset-0 h-full w-full grayscale-[10%] contrast-105 saturate-105"
          loading="lazy"
          style={{ border: 0 }}
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.914523896841!2d-74.237!3d40.735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c254ab78e22f03%3A0x9e5c47c1f4a3fcd2!2sSeton%20Hall%20University!5e0!3m2!1sen!2sus!4v1710000000000"
        />

        {/* Right Panel */}
        <div className="absolute inset-y-0 right-0 w-full md:w-[52%] lg:w-[46%] xl:w-[44%] bg-white/95 backdrop-blur-md border-l border-neutral-200 md:rounded-l-[30px] shadow-[0_10px_35px_-10px_rgba(0,0,0,0.25)]">
          <div className="flex h-full flex-col px-6 py-8 md:px-12 md:py-10">
            {/* Header */}
            <div>
              <h3 className="text-[28px] md:text-[34px] leading-tight font-extrabold tracking-tight text-black">
                Visit Our Office
              </h3>
              <p className="mt-2 text-[15px] text-neutral-600">
                Or come and drink coffee in comfy place and chill
              </p>
            </div>

            {/* OFFICES & CONTACT */}
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              {/* OFFICES */}
              <div>
                <div className="text-[11px] font-semibold tracking-[0.24em] text-neutral-500 uppercase">
                  Offices
                </div>

                <div className="mt-5">
                  <div className="font-bold text-[17px]">Washington, D.C</div>
                  <p className="mt-1 text-[14px] leading-6 text-neutral-600">
                    2400 6th St NW, <br /> Washington, DC 20059
                  </p>
                </div>

                <div className="mt-8">
                  <div className="font-bold text-[17px]">New York, NY</div>
                  <p className="mt-1 text-[14px] leading-6 text-neutral-600">
                    4500 Parsons Blvd, <br /> Queens, NY 11355
                  </p>
                </div>
              </div>

              {/* CONTACT US */}
              <div>
                <div className="text-[11px] font-semibold tracking-[0.24em] text-neutral-500 uppercase">
                  Contact Us
                </div>

                <div className="mt-5 space-y-3">
                  <div className="font-bold text-[16px]">info@netciples.com</div>
                  <div className="font-bold text-[16px]">(885) 761–6327</div>
                </div>
              </div>
            </div>

            {/* EMAIL ROW */}
            <div className="mt-12">
              <div className="flex items-center gap-4">
                <div className="relative flex-1">
                  <svg
                    className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-neutral-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="5" width="18" height="14" rx="3" />
                    <path d="M3 7l9 6 9-6" />
                  </svg>
                  <input
                    type="email"
                    placeholder="Your email"
                    className="h-12 w-full rounded-full border border-neutral-300 bg-neutral-50 pl-11 pr-4 text-[15px] outline-none placeholder:text-neutral-400"
                  />
                </div>

                <button
                  className="h-12 shrink-0 rounded-full bg-black px-7 text-sm font-medium text-white hover:bg-neutral-900"
                  type="button"
                >
                  Get Started
                </button>
              </div>
            </div>

            {/* SOCIALS */}
            <div className="mt-8">
              <div className="flex items-center gap-6 text-[14px]">
                <Link href="#" className="underline underline-offset-4">
                  LinkedIn
                </Link>
                <Link href="#" className="underline underline-offset-4">
                  Twitter
                </Link>
                <Link href="#" className="underline underline-offset-4">
                  Facebook
                </Link>
                <span className="text-neutral-500">— follow us</span>
              </div>
            </div>

            <div className="mt-auto pb-1" />
          </div>
        </div>
      </section>
    </main>
  );
}
