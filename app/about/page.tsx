// app/about/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Star, Lightbulb, Users, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b bg-neutral-50">
        <div className="container max-w-[1280px] mx-auto px-4 py-14 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-black">
            About Netciples
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-neutral-600">
            Your trusted partner in delivering innovative IT managed services
            and cybersecurity solutions that drive business growth and
            operational excellence.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section>
        <div className="container max-w-[1280px] mx-auto grid gap-10 px-4 py-16 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-6">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-black">
              Our Story
            </h2>
            <div className="mt-5 space-y-4 text-neutral-600 leading-relaxed">
              <p>
                Founded in 2023, Netciples emerged from a vision to transform
                how businesses approach IT infrastructure and cybersecurity.
                Our founders, seasoned IT professionals with decades of
                combined experience, recognized the growing need for
                comprehensive, reliable IT managed services.
              </p>
              <p>
                Starting with a commitment to excellence and innovation, we&apos;ve
                quickly established ourselves as a trusted partner for
                businesses seeking to leverage technology for competitive
                advantage. Our approach combines cutting-edge solutions with
                personalized service.
              </p>
              <p>
                Today, we serve clients across multiple industries, helping them
                navigate the complex landscape of modern IT while ensuring
                security, efficiency, and scalability.
              </p>
            </div>
          </div>

          {/* Right-side image placeholder (as in Figma) */}
          <div className="md:col-span-6">
            <div className="relative aspect-[4/3] rounded-[28px] border border-neutral-200 bg-neutral-200/70 ring-1 ring-neutral-300/60 shadow-[0_24px_60px_-28px_rgba(0,0,0,0.25)]" />
          </div>
        </div>
      </section>

      {/* MISSION & VALUES */}
      <section className="bg-neutral-50">
        <div className="container max-w-[1280px] mx-auto px-4 py-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-black">
              Our Mission &amp; Values
            </h3>
            <div className="mt-3 text-sm font-semibold text-neutral-800">
              Mission Statement
            </div>
            <p className="mx-auto mt-3 max-w-3xl text-neutral-600">
              To empower businesses with innovative IT solutions that enhance
              productivity, ensure security, and drive sustainable growth
              through expert managed services and strategic technology
              partnerships.
            </p>
          </div>

          {/* 4 value cards */}
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Excellence",
                desc:
                  "We strive for the highest standards in every service we deliver.",
                Icon: Star,
              },
              {
                title: "Innovation",
                desc:
                  "We embrace cutting-edge technology to solve complex challenges.",
                Icon: Lightbulb,
              },
              {
                title: "Customer Focus",
                desc:
                  "Your success is our priority. We listen, adapt, and deliver your personalized service.",
                Icon: Users,
              },
              {
                title: "Integrity",
                desc:
                  "We build trust through transparency, honesty, and reliability.",
                Icon: Shield,
              },
            ].map(({ title, desc, Icon }) => (
              <div
                key={title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.12)]"
              >
                <div className="mb-4 flex items-center gap-2 text-neutral-800">
                  <Icon className="h-5 w-5" />
                  <span className="text-base font-semibold">{title}</span>
                </div>
                <p className="text-sm leading-relaxed text-neutral-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR APPROACH */}
      <section>
        <div className="container max-w-[1280px] mx-auto px-4 py-16">
          <div className="text-center">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-black">
              Our Approach
            </h3>
            <p className="mx-auto mt-3 max-w-2xl text-neutral-600">
              We believe in a personalized, security-first approach that
              delivers measurable results for our clients.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Personalization",
                desc:
                  "Every business is unique. We take time to understand your specific challenges, goals, and industry requirements.",
              },
              {
                title: "Security-First",
                desc:
                  "Protection is embedded from day one across infrastructure, applications, and processes.",
              },
              {
                title: "Measurable Results",
                desc:
                  "Clear KPIs, transparent reporting, and continuous improvement to sustain impact.",
              },
            ].map(({ title, desc }) => (
              <div
                key={title}
                className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.12)]"
              >
                <div className="mb-2 text-base font-semibold text-neutral-900">
                  {title}
                </div>
                <p className="text-sm leading-relaxed text-neutral-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP (above global footer) */}
      <section className="bg-black text-white">
        <div className="container max-w-[1280px] mx-auto px-4 py-16 text-center">
          <h4 className="text-xl md:text-2xl font-semibold">
            Ready to Work With Us?
          </h4>
          <p className="mx-auto mt-4 max-w-3xl text-white/80">
            Let’s discuss how Netciples can help transform your IT infrastructure
            and drive your business forward with our expert managed services.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button
              asChild
              className="h-12 rounded-full px-7 bg-white text-black hover:bg-white/90"
            >
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full px-7 border-white text-white hover:bg-white/10"
            >
              <Link href="/contact">Contact Our Team</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
