// app/case-studies/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Study = {
  id: string;
  title: string;
  summary: string;
  tags: string[];
  metric: string;
  href: string;
};

const studies: Study[] = Array.from({ length: 6 }).map((_, i) => ({
  id: `mpcm-${i + 1}`,
  title: "Medical Practice Cloud Migration",
  summary:
    "Cloud migration, infrastructure management, virtual desktops, and hybrid cloud solutions designed for scalability and business continuity.",
  tags: ["Healthcare", "Cloud Solutions"],
  metric: "35% reduction in IT costs",
  href: "#medical-practice-cloud-migration", // smooth-scroll to detail below
}));

export default function CaseStudiesPage() {
  return (
    <main className="bg-white">
      {/* HERO (centered; light grey background like the mock) */}
      <section className="border-b bg-neutral-50">
        <div className="container max-w-[1280px] mx-auto px-4 pt-14 pb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-black">
            Case Studies
          </h1>
          <p className="mx-auto mt-5 max-w-4xl text-lg text-neutral-600">
            Real-world IT solutions that empower businesses across industries.
            Discover how we&apos;ve helped organizations transform their technology
            infrastructure and achieve measurable results.
          </p>
        </div>
      </section>

      {/* TOGGLES + SERVICE PILLS */}
      <section className="bg-white">
        <div className="container max-w-[1280px] mx-auto px-4 py-8">
          {/* Segmented control: Industry | Service (Service active) */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-full border border-neutral-200 bg-white p-1">
              <span className="rounded-full px-4 py-2 text-xs font-semibold text-neutral-600">
                Industry
              </span>
              <span className="rounded-full bg-neutral-900 px-4 py-2 text-xs font-semibold text-white">
                Service
              </span>
            </div>
          </div>

          {/* Services row: All Services (active) + others */}
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <button className="rounded-full bg-black px-5 py-2 text-sm font-semibold text-white">
              All Services
            </button>
            {["Managed IT", "Azure Cloud", "Cyber Security", "IT Consulting", "360 IT"].map(
              (t) => (
                <button
                  key={t}
                  className="rounded-full border border-neutral-300 bg-white px-5 py-2 text-sm text-neutral-800"
                >
                  {t}
                </button>
              )
            )}
          </div>
        </div>
      </section>

      {/* GRID: 3 × 2 cards */}
      <section>
        <div className="container max-w-[1280px] mx-auto px-4 pb-12">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {studies.map((s) => (
              <article
                key={s.id}
                className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0_6px_20px_-10px_rgba(0,0,0,0.12)]"
              >
                {/* image placeholder */}
                <div className="aspect-[16/10] bg-neutral-200" />
                <div className="p-6">
                  {/* tags */}
                  <div className="flex flex-wrap gap-2">
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-neutral-200 bg-neutral-100 px-2 py-1 text-[11px] text-neutral-700"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <h2 className="mt-3 text-lg font-semibold text-black">{s.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-600">{s.summary}</p>

                  <div className="mt-4 text-sm text-neutral-700">{s.metric}</div>

                  <div className="mt-4">
                    <a
                      href={s.href}
                      className="text-sm font-semibold underline underline-offset-4 decoration-neutral-400 hover:text-black"
                    >
                      Read full story →
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* DETAIL CARD BELOW THE GRID (centered, narrower, like the wireframe) */}
      <section id="medical-practice-cloud-migration" className="scroll-mt-24">
        <div className="container mx-auto px-4 pb-16">
          <article className="mx-auto max-w-[860px] rounded-xl border border-neutral-200 bg-white p-6 md:p-8 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.12)]">
            {/* top tags */}
            <div className="flex flex-wrap gap-2">
              {["Healthcare", "Cloud Solutions"].map((t) => (
                <span
                  key={t}
                  className="rounded-md border border-neutral-200 bg-neutral-100 px-2 py-1 text-[11px] text-neutral-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <h2 className="mt-3 text-2xl md:text-3xl font-semibold tracking-tight text-black">
              Medical Practice Cloud Migration
            </h2>
            <p className="mt-3 text-neutral-600">
              Cloud migration, infrastructure management, virtual desktops, and hybrid cloud solutions
              designed for scalability and business continuity.
            </p>

            {/* The Problem */}
            <section className="mt-7">
              <h3 className="flex items-center gap-2 text-base font-semibold text-neutral-900">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 text-[11px] text-neutral-700">
                  1
                </span>
                The Problem
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-neutral-700">
                The medical practice was operating with outdated on-premise servers that were becoming
                increasingly unreliable. They faced frequent downtime, high maintenance costs, and struggled
                to maintain HIPAA compliance. The existing infrastructure couldn’t scale with their growing
                patient base, and staff productivity was suffering due to slow system performance.
              </p>
            </section>

            {/* Our Solution */}
            <section className="mt-7">
              <h3 className="flex items-center gap-2 text-base font-semibold text-neutral-900">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 text-[11px] text-neutral-700">
                  2
                </span>
                Our Solution
              </h3>
              <ul className="mt-3 list-disc pl-5 text-sm leading-7 text-neutral-700">
                <li>Migration to HIPAA-compliant cloud infrastructure</li>
                <li>Implementation of secure electronic health records system</li>
                <li>24/7 monitoring and backup solutions</li>
                <li>Staff training on new systems and security protocols</li>
                <li>Phased migration approach to ensure zero downtime</li>
              </ul>
            </section>

            {/* The Results */}
            <section className="mt-7">
              <h3 className="flex items-center gap-2 text-base font-semibold text-neutral-900">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 text-[11px] text-neutral-700">
                  3
                </span>
                The Results
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-3">
                {[
                  { k: "35%", v: "Reduction in IT Costs" },
                  { k: "99.9%", v: "System Uptime" },
                  { k: "60%", v: "Faster Data Access" },
                ].map((s) => (
                  <div
                    key={s.k}
                    className="rounded-lg border border-neutral-200 bg-neutral-50 p-4 text-center"
                  >
                    <div className="text-2xl font-semibold text-black">{s.k}</div>
                    <div className="text-xs text-neutral-600">{s.v}</div>
                  </div>
                ))}
              </div>
            </section>

            {/* Client Testimonial */}
            <section className="mt-7">
              <h3 className="flex items-center gap-2 text-base font-semibold text-neutral-900">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full border border-neutral-300 bg-neutral-100 text-[11px] text-neutral-700">
                  4
                </span>
                Client Testimonial
              </h3>
              <div className="mt-3 rounded-lg border border-neutral-200 bg-neutral-50 p-4">
                <blockquote className="italic text-sm text-neutral-700">
                  “Netciples transformed our practice operations completely. The cloud migration
                  was seamless, and we’ve seen dramatic improvements in performance and reliability.
                  Our staff can now focus on patient care instead of dealing with IT issues.”
                </blockquote>
                <div className="mt-4 flex items-center gap-3">
                  <span className="inline-grid h-8 w-8 place-items-center rounded-full border border-neutral-300 bg-neutral-200">
                    👤
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-neutral-900">Dr. Sarah Johnson</div>
                    <div className="text-xs text-neutral-600">
                      Practice Owner, Johnson Medical Group
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </section>

      {/* BLACK CTA */}
      <section className="bg-black text-white">
        <div className="container max-w-[1280px] mx-auto px-4 py-16 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">Want Results Like These?</h3>
          <p className="mx-auto mt-4 max-w-3xl text-white/80">
            Every business has unique challenges. Let us show you how our proven methodologies and
            industry expertise can deliver similar transformational results for your organization.
          </p>
          <div className="mt-8 flex justify-center gap-3">
            <Button asChild className="h-12 rounded-full px-7 bg-white text-black hover:bg-white/90">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="h-12 rounded-full px-7 border-white text-white hover:bg-white/10"
            >
              <Link href="/case-study.pdf">Download Case Study PDF</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
