// app/industries/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  HeartPulse,
  Building2,
  Store,
  Factory,
  Users,
  GraduationCap,
  ShieldCheck,
  SlidersHorizontal,
  Medal,
} from "lucide-react";

export default function IndustriesPage() {
  const industries = [
    {
      title: "Healthcare",
      desc:
        "Comprehensive network monitoring, proactive support, automated backups, and complete infrastructure management to keep your business running smoothly.",
      benefits: [
        "99.9% uptime guarantee",
        "24/7 proactive monitoring",
        "Reduced operational costs",
        "Predictable monthly pricing",
      ],
      cta: "About Healthcare IT Solutions",
      href: "/industries/healthcare",
      Icon: HeartPulse,
    },
    {
      title: "Finance & Banking",
      desc:
        "Cloud migration, infrastructure management, virtual desktops, and hybrid cloud solutions designed for scalability and business continuity.",
      benefits: [
        "Unlimited scalability",
        "24/7 proactive monitoring",
        "Reduced operational costs",
        "Predictable monthly pricing",
      ],
      cta: "How We Help Financial Institutions",
      href: "/industries/finance",
      Icon: Building2,
    },
    {
      title: "Retail & E-commerce",
      desc:
        "Comprehensive network monitoring, proactive support, automated backups, and complete infrastructure management to keep your business running smoothly.",
      benefits: [
        "99.9% uptime guarantee",
        "24/7 proactive monitoring",
        "Reduced operational costs",
        "Predictable monthly pricing",
      ],
      cta: "Explore Our Retail IT Solutions",
      href: "/industries/retail",
      Icon: Store,
    },
    {
      title: "Manufacturing",
      desc:
        "Comprehensive network monitoring, proactive support, automated backups, and complete infrastructure management to keep your business running smoothly.",
      benefits: [
        "99.9% uptime guarantee",
        "24/7 proactive monitoring",
        "Reduced operational costs",
        "Predictable monthly pricing",
      ],
      cta: "IT Solutions for Manufacturing",
      href: "/industries/manufacturing",
      Icon: Factory,
    },
    {
      title: "Small & Medium Businesses",
      desc:
        "Comprehensive network monitoring, proactive support, automated backups, and complete infrastructure management to keep your business running smoothly.",
      benefits: [
        "99.9% uptime guarantee",
        "24/7 proactive monitoring",
        "Reduced operational costs",
        "Predictable monthly pricing",
      ],
      cta: "Explore IT Solutions for SMBs",
      href: "/industries/smb",
      Icon: Users,
    },
    {
      title: "Education",
      desc:
        "Comprehensive network monitoring, proactive support, automated backups, and complete infrastructure management to keep your business running smoothly.",
      benefits: [
        "99.9% uptime guarantee",
        "24/7 proactive monitoring",
        "Reduced operational costs",
        "Predictable monthly pricing",
      ],
      cta: "Learn About Education IT Solutions",
      href: "/industries/education",
      Icon: GraduationCap,
    },
  ];

  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="border-b bg-neutral-50">
        <div className="container max-w-[1280px] mx-auto px-4 py-14 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-black">
            Industries We Serve
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-neutral-600">
            Tailored IT solutions built for the unique challenges of your sector. We understand that every
            industry has specific requirements, compliance needs, and operational demands.
          </p>
        </div>
      </section>

      {/* INDUSTRY GRID (6) */}
      <section>
        <div className="container max-w-[1280px] mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {industries.map(({ title, desc, benefits, cta, href, Icon }) => (
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

      {/* WHY INDUSTRY EXPERTISE MATTERS */}
      <section className="bg-neutral-50">
        <div className="container max-w-[1280px] mx-auto px-4 py-16">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
              Why Industry Expertise Matters
            </h3>
            <p className="mx-auto mt-4 max-w-3xl text-neutral-600">
              Every industry has unique challenges, regulations, and operational requirements. Our
              specialized approach ensures your IT solutions align perfectly with your sector&apos;s needs.
            </p>
          </div>

          <div className="mt-12 grid gap-10 text-center sm:grid-cols-3">
            {[
              {
                title: "Compliance Ready",
                desc:
                  "Our solutions are designed to meet industry-specific regulations and compliance requirements from day one.",
                Icon: ShieldCheck,
              },
              {
                title: "Tailored Solutions",
                desc:
                  "We customize our services to address the specific operational challenges and workflows of your industry.",
                Icon: SlidersHorizontal,
              },
              {
                title: "Proven Experience",
                desc:
                  "Our team has extensive experience working with businesses across multiple industries and understands best practices.",
                Icon: Medal,
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
          <h3 className="text-xl md:text-2xl font-semibold">
            Ready to Empower Your Industry with IT Solutions?
          </h3>
          <p className="mx-auto mt-4 max-w-3xl text-white/80">
            Let us show you how our industry-specific expertise can transform your business operations
            and drive growth in your sector.
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
              {/* Replace with the real asset when ready */}
              <Link href="/service-guide.pdf">Download Service Guide</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
