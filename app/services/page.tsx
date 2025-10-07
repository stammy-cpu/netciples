// app/services/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ServerCog,
  LifeBuoy,
  ShieldCheck,
  Briefcase,
  Cloud,
  Database,
  Clock,
  Award,
  Expand
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Managed IT Services",
      desc:
        "Comprehensive network monitoring, proactive support, automated backups, and complete infrastructure management to keep your business running smoothly.",
      benefits: [
        "99.9% uptime guarantee",
        "24/7 proactive monitoring",
        "Reduced operational costs",
        "Predictable monthly pricing",
      ],
      cta: "Get a Free Consultation",
      href: "/contact",
      Icon: ServerCog,
    },
    {
      title: "360 IT help desk",
      desc:
        "Cloud migration, infrastructure management, virtual desktops, and hybrid cloud solutions designed for scalability and business continuity.",
      benefits: [
        "Unlimited scalability",
        "24/7 proactive monitoring",
        "Reduced operational costs",
        "Predictable monthly pricing",
      ],
      cta: "Discover How We Can Help",
      href: "/contact",
      Icon: LifeBuoy,
    },
    {
      title: "Cybersecurity",
      desc:
        "Risk assessments, security hardening, continuous threat monitoring, incident response, and compliance aligned to your industry.",
      benefits: [
        "99.9% uptime guarantee",
        "24/7 proactive monitoring",
        "Reduced operational costs",
        "Predictable monthly pricing",
      ],
      cta: "Secure Your Business Today",
      href: "/contact",
      Icon: ShieldCheck,
    },
    {
      title: "IT Consulting",
      desc:
        "Strategy, architecture reviews, and technology roadmaps to align your IT investments with business outcomes.",
      benefits: [
        "99.9% uptime guarantee",
        "24/7 proactive monitoring",
        "Reduced operational costs",
        "Predictable monthly pricing",
      ],
      cta: "Consult with an IT Expert",
      href: "/contact",
      Icon: Briefcase,
    },
    {
      title: "Azure cloud Managed Services",
      desc:
        "Migration, governance, cost control, and operations for Microsoft Azure — built for reliability and scale.",
      benefits: [
        "99.9% uptime guarantee",
        "24/7 proactive monitoring",
        "Reduced operational costs",
        "Predictable monthly pricing",
      ],
      cta: "Get Started with Custom Software",
      href: "/contact",
      Icon: Cloud,
    },
    {
      title: "Data Management & Analytics",
      desc:
        "Data pipelines, warehousing, reporting, and analytics to unlock insights and drive smarter decisions.",
      benefits: [
        "99.9% uptime guarantee",
        "24/7 proactive monitoring",
        "Reduced operational costs",
        "Predictable monthly pricing",
      ],
      cta: "Leverage Your Data",
      href: "/contact",
      Icon: Database,
    },
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b bg-neutral-50">
        <div className="container max-w-[1280px] mx-auto px-4 py-14 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-black">
            Our IT Services
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-neutral-600">
            Tailored technology solutions to fit your business needs. From managed IT to cybersecurity,
            we provide comprehensive services that drive growth and efficiency.
          </p>
        </div>
      </section>

      {/* SERVICES GRID (6) */}
      <section className="bg-white">
        <div className="container max-w-[1280px] mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {services.map(({ title, desc, benefits, cta, href, Icon }) => (
              <article
                key={title}
                className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-[0_6px_20px_-10px_rgba(0,0,0,0.12)]"
              >
                <div className="mb-5 flex justify-start">
                  <div className="grid h-12 w-12 place-items-center rounded-lg border border-neutral-300 bg-neutral-100 text-neutral-900">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                </div>

                <h2 className="text-lg font-semibold text-black">{title}</h2>
                <p className="mt-3 text-neutral-600 leading-relaxed">{desc}</p>

                <div className="mt-5">
                  <div className="text-sm font-semibold text-black">Key Benefits:</div>
                  <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-neutral-600">
                    {benefits.map((b) => (
                      <li key={b}>{b}</li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6">
                  <Button asChild className="h-11 rounded-full px-5 bg-black text-white hover:bg-neutral-900">
                    <Link href={href}>{cta}</Link>
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE OUR SERVICES? */}
      <section className="bg-neutral-50">
        <div className="container max-w-[1280px] mx-auto px-4 py-16">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
              Why Choose Our Services?
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-neutral-600">
              Our comprehensive approach ensures your technology works for you, not against you.
            </p>
          </div>

          <div className="mt-12 grid gap-10 text-center sm:grid-cols-3">
            {[
              {
                title: "24/7 Support",
                desc:
                  "Round-the-clock monitoring and support to ensure your systems are always running optimally.",
                Icon: Clock,
              },
              {
                title: "Expert Team",
                desc:
                  "Certified professionals with years of experience across all major technologies and platforms.",
                Icon: Award,
              },
              {
                title: "Scalable Solutions",
                desc:
                  "Services that grow with your business, from startup to enterprise-level requirements.",
                Icon: Expand,
              },
            ].map(({ title, desc, Icon }) => (
              <div key={title} className="flex flex-col items-center">
                <div className="mb-4 grid h-12 w-12 place-items-center rounded-full bg-white border border-neutral-300">
                  <Icon className="h-6 w-6 text-neutral-700" />
                </div>
                <div className="text-base font-semibold text-black">{title}</div>
                <p className="mt-2 max-w-[320px] text-sm leading-relaxed text-neutral-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-black text-white">
        <div className="container max-w-[1280px] mx-auto px-4 py-16 text-center">
          <h3 className="text-xl md:text-2xl font-semibold">Ready to Transform Your IT?</h3>
          <p className="mx-auto mt-4 max-w-3xl text-white/80">
            Take the first step towards more efficient, secure, and scalable IT infrastructure.
            Our experts are ready to assess your needs and recommend the perfect solution.
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
              {/* Replace with your actual PDF or route when ready */}
              <Link href="/service-guide.pdf">Download Service Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
