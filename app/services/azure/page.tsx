export default function AzurePage() {
  return (
    <main className="bg-white">
      <section className="border-b bg-neutral-50">
        <div className="container max-w-[1280px] mx-auto px-4 py-14 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-black">
            Azure cloud managed services
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-neutral-600">
            Cloud migration, cost control, virtual desktops, and hybrid solutions designed for
            scalability and business continuity on Microsoft Azure.
          </p>
        </div>
      </section>

      <section>
        <div className="container max-w-[960px] mx-auto px-4 py-16">
          <h2 className="text-xl font-semibold text-black">Overview</h2>
          <p className="mt-4 text-neutral-600">
            This page will cover our Azure reference architectures, governance, and operations model.
          </p>
        </div>
      </section>
    </main>
  );
}
