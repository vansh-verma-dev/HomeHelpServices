import {
  FaUserCheck,
  FaBolt,
  FaShieldAlt,
  FaRupeeSign,
  FaTools,
  FaHeadset,
} from "react-icons/fa";

const features = [
  {
    icon: FaUserCheck,
    title: "Verified Technicians",
    description:
      "Skilled and experienced technicians who understand your appliance problems.",
  },
  {
    icon: FaBolt,
    title: "Quick Response",
    description:
      "Get fast assistance and convenient doorstep service when you need it.",
  },
  {
    icon: FaRupeeSign,
    title: "Transparent Pricing",
    description:
      "Know the service cost clearly before the repair work begins.",
  },
  {
    icon: FaShieldAlt,
    title: "Reliable Service",
    description:
      "Professional repairs with a focus on quality, safety and customer satisfaction.",
  },
  {
    icon: FaTools,
    title: "Quality Repairs",
    description:
      "We focus on finding the actual problem and providing the right solution.",
  },
  {
    icon: FaHeadset,
    title: "Customer Support",
    description:
      "Our support team is available to help you before and after your service.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24">
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 bottom-0 h-72 w-72 rounded-full bg-blue-50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
            Why Choose Us
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Service You Can
            <span className="text-blue-600"> Count On</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
            From booking to repair, we make the entire service experience
            simple, transparent and reliable.
          </p>
        </div>

        {/* Features */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-100/40"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
                  <Icon size={21} />
                </div>

                <h3 className="mt-5 text-lg font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom strip */}
        <div className="mt-10 flex flex-col gap-5 rounded-2xl bg-slate-900 px-6 py-6 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <div>
            <p className="text-lg font-semibold text-white">
              Your home deserves reliable service.
            </p>
            <p className="mt-1 text-sm text-white/50">
              Book a professional technician at your convenience.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div>
              <p className="text-xl font-bold text-white">4.8/5</p>
              <p className="text-[11px] text-white/40">Customer rating</p>
            </div>

            <div className="h-10 w-px bg-white/10" />

            <div>
              <p className="text-xl font-bold text-white">30 Days</p>
              <p className="text-[11px] text-white/40">Service warranty</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}