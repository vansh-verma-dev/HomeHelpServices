import React from "react";
import {
  FaClock,
  FaUserCheck,
  FaShieldAlt,
} from "react-icons/fa";

const reasons = [
  {
    icon: <FaClock />,
    title: "Quick & Reliable Service",
    description:
      "Get your home service done quickly by trusted professionals without unnecessary delays.",
  },
  {
    icon: <FaUserCheck />,
    title: "Verified Professionals",
    description:
      "Our skilled and verified professionals are trained to provide safe and quality home services.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality Guaranteed",
    description:
      "We focus on quality, transparent pricing and reliable service to give you complete peace of mind.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-blue-600" />

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Why Choose Us?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            We make home services simple, reliable and stress-free for you.
          </p>
        </div>

        {/* Horizontal Scroll */}
        <div className="mt-14 overflow-x-auto pb-6 scrollbar-hide">
          <div className="flex min-w-max gap-8">

            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group w-[300px] shrink-0 text-center sm:w-[350px] lg:w-[380px]"
              >
                {/* Illustration Box */}
                <div className="mx-auto flex h-56 w-56 items-center justify-center rounded-2xl bg-gray-50 transition duration-300 group-hover:-translate-y-2 group-hover:shadow-lg sm:h-60 sm:w-60">

                  <div className="flex h-32 w-32 items-center justify-center rounded-full bg-blue-50 text-6xl text-blue-600 transition duration-300 group-hover:scale-110">
                    {reason.icon}
                  </div>

                </div>

                {/* Title */}
                <h3 className="mt-7 text-lg font-bold tracking-wide text-blue-900">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-blue-900/80 sm:text-base">
                  {reason.description}
                </p>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;