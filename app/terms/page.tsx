// app/terms/page.tsx
export default function TermsPage() {
  return (
    <main className="container max-w-[960px] mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
        Terms & Conditions
      </h1>

      <p className="mt-6 text-neutral-600 leading-relaxed">
        These Terms & Conditions outline the rules and regulations for using
        Netciples’ services and website. By accessing this site, you agree to
        comply with and be bound by these terms.
      </p>

      <p className="mt-4 text-neutral-600 leading-relaxed">
        We strive to maintain transparency, protect our users, and provide
        reliable IT solutions. Please review this page periodically as terms
        may be updated when necessary.
      </p>

      <p className="mt-4 text-neutral-600 leading-relaxed">
        For further clarification, contact us anytime at{" "}
        <span className="font-medium text-black">hello@netciples.com</span>.
      </p>
    </main>
  );
}
