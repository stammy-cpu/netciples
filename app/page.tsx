// app/page.tsx
import Link from "next/link";
import Image from "next/image";
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

// Floating badge (hidden on mobile)
function HeroBadge({ label, className = "", anim = "float1" }: BadgeProps) {
  return (
    <div
      className={`pointer-events-none select-none absolute hidden sm:block ${className}`}
      // animations only apply on sm+ because the badge itself is hidden on mobile
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
        <div className="container mx-auto max-w-[1280px] px-4 sm:px-6">
          <div className="grid grid-cols-1 items-center gap-8 pb-12 pt-8 md:grid-cols-12 md:gap-12 md:pb-20 md:pt-14">
            {/* Left copy */}
            <div className="md:col-span-6">
              <h1 className="text-balance font-semibold leading-[1.12] tracking-tight text-black text-[clamp(28px,6vw,48px)]">
                Reliable IT Solutions
                <span className="block">for Your Business</span>
                <span className="block">Growth</span>
              </h1>

              <p className="mt-4 max-w-xl text-[15.5px] leading-7 text-neutral-600 md:mt-6 md:text-lg">
                With a team of highly experienced designers, we have done it
                carefully and simply. The components work together to create a
                beautiful landing. It is essential template for designers.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center md:mt-14">
                <Button
                  asChild
                  className="h-12 w-full rounded-full px-6 text-[15px] bg-black text-white hover:bg-neutral-900 sm:h-14 sm:w-auto sm:px-9 sm:text-base"
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
                  className="h-12 w-full rounded-full border-neutral-900 px-6 text-[15px] text-neutral-900 hover:bg-neutral-100 sm:h-14 sm:w-auto sm:px-9 sm:text-base"
                >
                  <Link href="/services">Learn more</Link>
                </Button>
              </div>
            </div>

            {/* Right image + badges */}
            <div className="md:col-span-6">
              <div className="relative ml-auto w-full sm:w-[92%]">
                {/* Image container */}
                <div className="relative overflow-hidden rounded-[28px] border border-neutral-200 ring-1 ring-neutral-300/60 shadow-[0_20px_60px_-28px_rgba(0,0,0,0.26),0_8px_22px_-12px_rgba(0,0,0,0.16)] sm:rounded-[32px] lg:rounded-[40px]">
                  {/* aspect ratio: taller on mobile, square on md+ */}
                  <div className="relative aspect-[4/3] sm:aspect-square">
                    <Image
                      src="/images/hero-placeholder.png"
                      alt="Professional businessman in suit"
                      fill
                      priority
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 46vw"
                    />
                  </div>
                </div>

                {/* Azure (left-middle) */}
                <HeroBadge
                  label="Azure"
                  anim="float1"
                  className="left-[-26px] top-1/2 -translate-y-1/2 sm:left-[-34px]"
                />

                {/* Cybersecurity (top-right) */}
                <HeroBadge
                  label="Cybersecurity"
                  anim="float2"
                  className="right-[10px] -top-4 sm:right-[18px] sm:-top-5"
                />

                {/* Software Dev (bottom-right) */}
                <HeroBadge
                  label="Software Dev"
                  anim="float3"
                  className="right-[12px] -bottom-6 sm:right-[18px] sm:-bottom-7"
                />
              </div>
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
