// components/TestimonialSection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Typewriter from "@/components/Typewriter";

export default function TestimonialSection() {
  return (
    <section className="bg-neutral-200">
      <div className="container max-w-[1100px] mx-auto px-4 py-20 md:py-28">
        {/* faint avatars row */}
        <div className="flex items-center justify-center gap-6 opacity-70">
          <div className="h-14 w-14 rounded-full bg-white/50 shadow-sm" />
          {/* middle avatar — bigger */}
          <div className="h-20 w-20 rounded-full bg-white shadow-sm ring-1 ring-black/10" />
          <div className="h-14 w-14 rounded-full bg-white/50 shadow-sm" />
        </div>

        {/* quote */}
        <blockquote className="mt-10 text-center">
          <p className="mx-auto max-w-4xl text-2xl md:text-[40px] leading-[1.2] font-semibold text-[#0f0d24]">
            “Write is super–useful as we can see the actual text in the actual design.
            We can even adjust text length to make it look good!”
          </p>
          <footer className="mt-6">
            <div className="text-lg font-medium text-[#0f0d24]">Linh Nguyen</div>
            <div className="text-sm text-neutral-600">Founder at Carrot Labs</div>
          </footer>
        </blockquote>

        {/* CTA with the same animation settings as the hero */}
        <div className="mt-10 flex justify-center">
          <Button
            asChild
            variant="outline"
            className="h-14 rounded-full px-8 md:px-10 bg-white text-black border border-neutral-300 hover:bg-white/90"
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
        </div>
      </div>
    </section>
  );
}
