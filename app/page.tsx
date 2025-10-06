// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Typewriter from "@/components/Typewriter";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

type BadgeProps = {
  label: string;
  className?: string;
  anim?: "float1" | "float2" | "float3";
};

// Floating badge (Folio-style)
function HeroBadge({ label, className = "", anim = "float1" }: BadgeProps) {
  return (
    <div
      className={`pointer-events-none select-none absolute hidden sm:block ${className}`}
      style={{
        animation:
          anim === "float1"
            ? "float1 7s ease-in-out infinite"
            : anim === "float2"
            ? "float2 8s ease-in-out infinite"
            : "float3 9s ease-in-out infinite",
      }}
    >
      <div className="rounded-xl border border-neutral-200 bg-white/95 backdrop-blur-[2px] px-4 py-2 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.35)] ring-1 ring-neutral-200/60">
        <span className="text-sm font-medium text-neutral-900">{label}</span>
      </div>
    </div>
  );
}

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b bg-neutral-50">
        <div className="container max-w-[1280px] grid grid-cols-1 items-center gap-10 pb-20 pt-10 md:grid-cols-12 md:gap-12 md:pt-14 md:pb-20">
          {/* Left copy */}
          <div className="md:col-span-6">
            <h1 className="text-balance text-3xl md:text-4xl lg:text-5xl font-semibold leading-[1.15] tracking-tight text-black">
              Reliable IT Solutions
              <span className="block">for Your Business</span>
              <span className="block">Growth</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-neutral-600">
              With a team of highly experienced designers, we have done it
              carefully and simply. The components work together to create a
              beautiful landing. It is essential template for designers.
            </p>

            <div className="mt-14 flex flex-wrap items-center gap-2">
              <Button
                asChild
                className="h-14 md:h-14 rounded-full px-8 md:px-9 bg-black text-white hover:bg-neutral-900 text-[15px] md:text-base"
              >
                <Link href="/contact">
                  <Typewriter
                    words={["Request a Consultation"]}
                    loop
                    pauseAfterWord={5000}
                    typingSpeed={65}
                    deletingSpeed={40}
                    initialDelay={200}
                    showCursor
                    className="align-middle"
                  />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-14 md:h-14 rounded-full px-8 md:px-9 border-neutral-900 text-neutral-900 hover:bg-neutral-100 text-[15px] md:text-base"
              >
                <Link href="/services">Learn more</Link>
              </Button>
            </div>
          </div>

          {/* Right image + badges */}
          <div className="md:col-span-6">
            <div className="relative w-[92%] ml-auto">
              {/* Image container with soft gray outer glow */}
              <div className="relative aspect-square rounded-[32px] lg:rounded-[40px] overflow-hidden border border-neutral-200 ring-1 ring-neutral-300/60 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.28),0_8px_24px_-12px_rgba(0,0,0,0.18)]">
                <img
                  src="/images/hero-placeholder.png"
                  alt="Professional businessman in suit"
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Azure (left-middle, was 'Code' in Folio) */}
              <HeroBadge
                label="Azure"
                anim="float1"
                className="left-[-34px] top-1/2 -translate-y-1/2"
              />

              {/* Cybersecurity (top-right corner, was 'Design') */}
              <HeroBadge
                label="Cybersecurity"
                anim="float2"
                className="right-[12px] -top-4 md:right-[18px] md:-top-5"
              />

              {/* Software Dev (bottom-right, was 'Ideas') */}
              <HeroBadge
                label="Software Dev"
                anim="float3"
                className="right-[14px] -bottom-6 md:right-[18px] md:-bottom-7"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <ServicesSection />

      {/* TESTIMONIALS */}
      <TestimonialSection />

      {/* WHY CHOOSE US */}
      <WhyChooseUsSection />
    </>
  );
}
