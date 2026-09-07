import {
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
  FaArrowRight,
} from "react-icons/fa";

const reviews = [
  {
    name: "Rahul Sharma",
    location: "Meerut",
    service: "AC Repair",
    review:
      "The technician arrived on time and fixed my AC quickly. The service was professional and the pricing was explained clearly.",
    rating: 5,
  },
  {
    name: "Neha Singh",
    location: "Meerut",
    service: "Washing Machine Repair",
    review:
      "Very smooth experience. My washing machine problem was checked properly and repaired at home without any hassle.",
    rating: 5,
  },
  {
    name: "Aman Kumar",
    location: "Ghaziabad",
    service: "Refrigerator Repair",
    review:
      "Good service and polite technician. He explained the refrigerator issue and completed the repair properly.",
    rating: 5,
  },
];

export default function ReviewsSection() {
  return (
    <section className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">

        {/* Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-blue-600">
              Customer Reviews
            </span>

            <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Loved by our
              <span className="text-blue-600"> customers</span>
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-500 sm:text-base">
              Real experiences from customers who trusted us with their
              appliance and electrical repair needs.
            </p>
          </div>

          {/* Rating */}
          <div className="flex w-fit items-center gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm">
            <div>
              <p className="text-3xl font-bold text-slate-900">4.8</p>
              <p className="text-xs text-slate-400">out of 5</p>
            </div>

            <div>
              <div className="flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} size={14} />
                ))}
              </div>

              <p className="mt-1 text-xs text-slate-500">
                Average rating
              </p>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {reviews.map((review) => (
            <article
              key={review.name}
              className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/70"
            >
              {/* Quote icon */}
              <div className="absolute right-7 top-7 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-500">
                <FaQuoteLeft size={15} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-yellow-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FaStar key={star} size={14} />
                ))}
              </div>

              {/* Review */}
              <p className="mt-6 min-h-[120px] text-[15px] leading-7 text-slate-600">
                “{review.review}”
              </p>

              {/* Service */}
              <span className="inline-flex rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-600">
                {review.service}
              </span>

              {/* User */}
              <div className="mt-6 flex items-center justify-between border-t border-slate-100 pt-5">
                <div className="flex items-center gap-3">
                  {/* Initial */}
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-bold text-white">
                    {review.name.charAt(0)}
                  </div>

                  <div>
                    <div className="flex items-center gap-1">
                      <p className="text-sm font-semibold text-slate-900">
                        {review.name}
                      </p>

                      <FaCheckCircle
                        size={11}
                        className="text-blue-500"
                      />
                    </div>

                    <p className="mt-0.5 text-xs text-slate-400">
                      {review.location}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-medium text-slate-400">
                  Verified
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-white px-6 py-5 sm:flex-row">
          <div>
            <p className="font-semibold text-slate-900">
              Had a great experience with us?
            </p>
            <p className="mt-1 text-sm text-slate-500">
              Your feedback helps us serve you better.
            </p>
          </div>

          <button className="group flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700">
            Leave a Review
            <FaArrowRight
              size={12}
              className="transition-transform group-hover:translate-x-1"
            />
          </button>
        </div>

      </div>
    </section>
  );
}