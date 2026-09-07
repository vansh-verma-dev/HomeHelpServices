import React, { useRef } from "react";
import {
  FaStar,
  FaCheckCircle,
  FaQuoteLeft,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";

const reviews = [
  {
    name: "Rahul Sharma",
    role: "Homeowner",
    review:
      "HomeHelpServices made my home cleaning experience so easy. The professional arrived on time and did an excellent job.",
  },
  {
    name: "Priya Verma",
    role: "Customer",
    review:
      "I booked a plumber through HomeHelpServices and the service was quick and professional. Highly recommended!",
  },
  {
    name: "Amit Kumar",
    role: "Customer",
    review:
      "Very reliable service. The technician was experienced, polite and completed the repair perfectly.",
  },
  {
    name: "Neha Singh",
    role: "Homeowner",
    review:
      "The booking process was simple and the service quality was really good. I will definitely use HomeHelpServices again.",
  },
];

const Reviews = () => {
  const sliderRef = useRef(null);

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -400,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 400,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">
          <div className="mx-auto mb-4 h-1 w-12 rounded-full bg-blue-600" />

          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            What Our Customers Are Saying
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-500 sm:text-base">
            Real experiences from customers who trust HomeHelpServices
            for their everyday home needs.
          </p>
        </div>

        {/* Slider */}
        <div className="relative mt-12">

          {/* Left Button */}
          <button
            onClick={scrollLeft}
            aria-label="Previous reviews"
            className="absolute -left-5 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-blue-600 shadow-md transition duration-300 hover:-translate-x-1 hover:bg-blue-600 hover:text-white lg:flex"
          >
            <FaChevronLeft />
          </button>

          {/* Reviews Container */}
          <div
            ref={sliderRef}
            className="flex gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {reviews.map((item, index) => (
              <div
                key={index}
                className="group w-[300px] shrink-0 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl sm:w-[350px] lg:w-[390px]"
              >

                {/* Rating */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-1 text-yellow-400">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar key={star} size={16} />
                    ))}
                  </div>

                  <div className="flex items-center gap-1 text-xs font-medium text-green-600">
                    <FaCheckCircle />
                    Verified
                  </div>
                </div>

                {/* Quote */}
                <div className="mt-6">
                  <FaQuoteLeft className="mb-2 text-2xl text-gray-200" />

                  <p className="text-sm leading-6 text-gray-700 sm:text-base">
                    {item.review}
                  </p>
                </div>

                {/* Divider */}
                <div className="my-6 h-px bg-gray-100" />

                {/* User */}
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">
                    {item.name.charAt(0)}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      {item.name}
                    </h3>

                    <p className="text-xs text-gray-500">
                      {item.role}
                    </p>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            aria-label="Next reviews"
            className="absolute -right-5 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-gray-200 bg-white text-blue-600 shadow-md transition duration-300 hover:translate-x-1 hover:bg-blue-600 hover:text-white lg:flex"
          >
            <FaChevronRight />
          </button>

        </div>

        {/* Mobile Navigation */}
        <div className="mt-6 flex justify-center gap-3 lg:hidden">
          <button
            onClick={scrollLeft}
            aria-label="Previous reviews"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm transition hover:bg-blue-600 hover:text-white"
          >
            <FaChevronLeft />
          </button>

          <button
            onClick={scrollRight}
            aria-label="Next reviews"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 bg-white text-blue-600 shadow-sm transition hover:bg-blue-600 hover:text-white"
          >
            <FaChevronRight />
          </button>
        </div>

      </div>
    </section>
  );
};

export default Reviews;
 
