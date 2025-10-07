// app/page.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Typewriter from "@/components/Typewriter";
import ServicesSection from "@/components/ServicesSection";
import TestimonialSection from "@/components/TestimonialsSection";
import WhyChooseUsSection from "@/components/WhyChooseUsSection";

export default function HomePage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="border-b bg-neutral-50">
        <div className="container max-w-[1280px] grid grid-cols-1 items-center gap-10 pb-20 pt-10 md:grid-cols-12 md:gap-12 md:pt-14 md:pb-20">
          {/* Left column */}
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

          {/* Right column (hero image container) */}
          <div className="md:col-span-6">
            <div className="relative aspect-square w-[92%] ml-auto rounded-[32px] lg:rounded-[40px] overflow-hidden border border-neutral-300 shadow-sm">
              <img
                src="/images/hero-placeholder.png"
                alt="Professional businessman in suit"
                className="object-cover w-full h-full"
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
