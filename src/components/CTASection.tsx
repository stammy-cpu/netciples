// src/components/CTASection.tsx
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="container my-16 rounded-2xl bg-neutral-50 px-6 py-12 text-center md:py-16">
      <h3 className="text-2xl font-semibold tracking-tight md:text-3xl text-black">
        Ready to Transform Your IT?
      </h3>
      <p className="mx-auto mt-2 max-w-2xl text-neutral-600">
        Take the first step toward reliable, secure, and scalable infrastructure.
      </p>
      <div className="mt-6 flex items-center justify-center gap-3">
        <Button asChild className="h-11 rounded-full px-6 bg-black text-white hover:bg-neutral-900">
          <Link href="/contact">Get a Free Consultation</Link>
        </Button>
        <Button asChild variant="outline" className="h-11 rounded-full px-6 border-neutral-900 text-neutral-900 hover:bg-neutral-100">
          <Link href="/services">Learn More</Link>
        </Button>
      </div>
    </section>
  );
}
