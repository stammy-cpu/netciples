// components/WhyChooseUsSection.tsx
import { FC } from "react";
import { UserCheck, Cpu, Headphones, Users } from "lucide-react";

const items = [
  {
    title: "Personalized Service",
    desc:
      "We understand your business goals and tailor solutions that fit like a glove.",
    Icon: UserCheck,
  },
  {
    title: "Cutting-Edge Technology",
    desc:
      "Build with modern stacks and best practices that keep you ahead.",
    Icon: Cpu,
  },
  {
    title: "24/7 Support",
    desc:
      "Always-on monitoring and fast response when you need help most.",
    Icon: Headphones,
  },
  {
    title: "Experienced Team",
    desc:
      "Seasoned engineers and PMs delivering reliable outcomes.",
    Icon: Users,
  },
];

const WhyChooseUsSection: FC = () => {
  return (
    <section className="bg-white">
      <div className="container max-w-[1280px] mx-auto px-4 py-20 md:py-24">
        <div className="text-center mb-14 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f0d24]">
            Why Choose Netciples?
          </h2>
          <p className="mt-4 text-lg text-neutral-500">
            Excellence in delivery, communication, and results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map(({ title, desc, Icon }) => (
            <div
              key={title}
              className="group relative overflow-hidden rounded-2xl border-[3px] border-neutral-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Single black vertical line (slim + full height) */}
              <span
                className="pointer-events-none absolute left-0 top-0 h-full w-[2px] scale-y-0 bg-black opacity-0 transition-all duration-300 group-hover:scale-y-100 group-hover:opacity-100"
                aria-hidden="true"
              />

              {/* icon badge */}
              <div className="mb-6 flex justify-center">
                <div className="grid h-16 w-16 place-items-center rounded-xl border-2 border-neutral-300 bg-neutral-100 text-neutral-900 transition-all duration-300 group-hover:border-black group-hover:bg-black group-hover:text-white">
                  <Icon
                    className="h-7 w-7 transition-transform duration-300 group-hover:-scale-x-100"
                    aria-hidden="true"
                  />
                </div>
              </div>

              <h3 className="text-xl font-semibold text-[#0f0d24]">{title}</h3>
              <p className="mt-4 text-neutral-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
