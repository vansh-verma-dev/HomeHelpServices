import React, { useState } from "react";
import { FaPlus, FaQuestionCircle } from "react-icons/fa";

const faqs = [
  {
    question: "How do I book a home service?",
    answer:
      "Booking a home service is simple. Choose the service you need, select a preferred date and time, provide your details, and confirm your booking.",
  },
  {
    question: "Are your service professionals verified?",
    answer:
      "Yes. We connect you with reliable professionals and take care to provide trusted and quality home service providers.",
  },
  {
    question: "What home services do you provide?",
    answer:
      "We provide a wide range of services including AC repair, refrigerator repair, washing machine repair, TV repair, cooler repair, fan repair, electrical work, plumbing, cleaning, painting and other home services.",
  },
  {
    question: "How much does a home service cost?",
    answer:
      "The service cost depends on the type of service and the work required. Our professionals provide pricing based on the actual service requirement.",
  },
  {
    question: "Can I reschedule my service booking?",
    answer:
      "Yes. If you need to change your booking date or time, you can contact our support team. Rescheduling depends on professional availability.",
  },
  {
    question: "What if I am not satisfied with the service?",
    answer:
      "Your satisfaction is important to us. If you are not satisfied with the service, please contact our support team and we will help you resolve the issue.",
  },
  {
    question: "How can I contact customer support?",
    answer:
      "You can contact our support team through the Contact Us section. Our team will help you with booking, service-related questions and other concerns.",
  },
];

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-gray-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Main Layout */}
        <div className="grid items-center gap-12 lg:grid-cols-[0.8fr_1.2fr]">
          
          {/* ================= LEFT CHARACTER ================= */}
          <div className="hidden lg:flex justify-center">
            <div className="relative flex min-h-[620px] w-full max-w-md items-center justify-center overflow-hidden rounded-3xl bg-blue-50">
              
              {/* Decorative Circles */}
              <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-blue-100" />

              <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-white/70" />

              {/* Character Image */}
              <img
                src="https://i.pinimg.com/736x/e6/16/9e/e6169e786d8783c34eda4bae0ffddf70.jpg"
                alt="Home service support"
                className="relative z-10 h-[450px] w-auto object-contain transition duration-500 hover:-translate-y-3"
              />

              {/* Floating Text */}
              <div className="absolute bottom-8 left-1/2 z-20 w-[80%] -translate-x-1/2 rounded-2xl bg-white/95 p-4 text-center shadow-lg backdrop-blur">
                <p className="text-sm font-bold text-gray-900">
                  Need Help?
                </p>

                <p className="mt-1 text-xs text-gray-500">
                  Find answers to your common questions.
                </p>
              </div>
            </div>
          </div>

          {/* ================= RIGHT FAQ ================= */}
          <div>
            {/* Heading */}
            <div>
              <div className="mb-4 flex items-center gap-2 text-blue-600">
                <FaQuestionCircle className="text-lg" />

                <span className="text-sm font-semibold uppercase tracking-wider">
                  FAQ
                </span>
              </div>

              <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                Frequently Asked Questions
              </h2>

              <p className="mt-4 max-w-xl text-sm leading-6 text-gray-500 sm:text-base">
                Find quick answers to common questions about our home
                services, booking process and professionals.
              </p>
            </div>

            {/* FAQ List */}
            <div className="mt-10 space-y-4">
              {faqs.map((faq, index) => {
                const isOpen = activeIndex === index;

                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
                      isOpen
                        ? "border-blue-200 shadow-lg shadow-blue-100/50"
                        : "border-gray-100 shadow-sm hover:border-blue-100 hover:shadow-md"
                    }`}
                  >
                    {/* Question Button */}
                    <button
                      type="button"
                      onClick={() => toggleFAQ(index)}
                      aria-expanded={isOpen}
                      className="flex w-full items-center gap-4 px-5 py-5 text-left sm:px-6"
                    >
                      {/* Number */}
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                          isOpen
                            ? "bg-blue-600 text-white"
                            : "bg-blue-50 text-blue-600"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      {/* Question */}
                      <span
                        className={`flex-1 text-sm font-bold transition-colors sm:text-base ${
                          isOpen ? "text-blue-700" : "text-gray-800"
                        }`}
                      >
                        {faq.question}
                      </span>

                      {/* Plus Icon */}
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                          isOpen
                            ? "rotate-45 bg-blue-600 text-white"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        <FaPlus className="text-sm" />
                      </span>
                    </button>

                    {/* Answer */}
                    <div
                      className={`grid transition-all duration-500 ease-in-out ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }`}
                    >
                      <div className="overflow-hidden">
                        <div className="border-t border-gray-100 px-5 pb-6 pt-4 pl-[68px] sm:px-6 sm:pl-[76px]">
                          <p className="text-sm leading-7 text-gray-600 sm:text-base">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 flex flex-wrap items-center gap-2 text-sm">
              <span className="text-gray-500">
                Still have questions?
              </span>

              <button
                type="button"
                className="font-semibold text-blue-600 transition hover:text-blue-800"
              >
                Contact us →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
 