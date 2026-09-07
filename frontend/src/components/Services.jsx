import React, { useState } from "react";
import {
  FaStar,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
  FaCommentDots,
  FaCheck,
  FaChevronDown,
  FaSlidersH,
} from "react-icons/fa";

import services from "../data/servicesData";

const ServicesSection = () => {
  const [sortBy, setSortBy] = useState("Recommended");
  const [verifiedOnly, setVerifiedOnly] = useState(false);
  const [ratingFilter, setRatingFilter] = useState("All");

  const filteredServices = services
    .filter((service) => {
      if (verifiedOnly && !service.verified) {
        return false;
      }

      if (
        ratingFilter !== "All" &&
        Number(service.rating) < Number(ratingFilter)
      ) {
        return false;
      }

      return true;
    })
    .sort((a, b) => {
      if (sortBy === "Rating") {
        return Number(b.rating) - Number(a.rating);
      }

      if (sortBy === "Reviews") {
        return b.reviews - a.reviews;
      }

      return 0;
    });

  return (
    <main className="min-h-screen bg-gray-50">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <section className="border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

          <div className="flex flex-col gap-2">
            <p className="text-sm font-semibold text-blue-600">
              HomeHelpServices
            </p>

            <h1 className="text-2xl font-bold text-gray-900 sm:text-3xl">
              Home Appliance Repair Services
            </h1>

            <p className="text-sm text-gray-500">
              Find trusted professionals for AC, Fan, Cooler, TV,
              Fridge and other appliance repairs.
            </p>
          </div>

        </div>
      </section>


      {/* =====================================================
          FILTER BAR
      ===================================================== */}

      <section className="sticky top-0 z-20 border-b border-gray-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6 lg:px-8">

          <div className="flex gap-3 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">

            {/* Sort */}
            <div className="relative shrink-0">

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="cursor-pointer appearance-none rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-3 pr-9 text-sm font-medium text-gray-800 outline-none transition hover:border-gray-400"
              >
                <option value="Recommended">
                  Sort by
                </option>

                <option value="Rating">
                  Rating
                </option>

                <option value="Reviews">
                  Reviews
                </option>
              </select>

              <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500" />

            </div>


            {/* Verified */}
            <button
              onClick={() => setVerifiedOnly(!verifiedOnly)}
              className={`flex shrink-0 items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition ${
                verifiedOnly
                  ? "border-blue-600 bg-blue-50 text-blue-600"
                  : "border-gray-200 bg-gray-50 text-gray-700 hover:border-gray-400"
              }`}
            >
              <span
                className={`flex h-4 w-4 items-center justify-center rounded-full ${
                  verifiedOnly
                    ? "bg-blue-600 text-white"
                    : "bg-gray-300 text-white"
                }`}
              >
                <FaCheck className="text-[9px]" />
              </span>

              Verified
            </button>


            {/* Rating */}
            <div className="relative shrink-0">

              <select
                value={ratingFilter}
                onChange={(e) => setRatingFilter(e.target.value)}
                className="cursor-pointer appearance-none rounded-lg border border-gray-200 bg-gray-50 py-2.5 pl-3 pr-9 text-sm font-medium text-gray-800 outline-none transition hover:border-gray-400"
              >
                <option value="All">
                  Ratings
                </option>

                <option value="4.5">
                  4.5+ Rating
                </option>

                <option value="4">
                  4+ Rating
                </option>

                <option value="3">
                  3+ Rating
                </option>
              </select>

              <FaChevronDown className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-500" />

            </div>


            {/* All Filters */}
            <button className="flex shrink-0 items-center gap-2 rounded-lg border border-gray-800 bg-white px-4 py-2.5 text-sm font-semibold text-gray-800 transition hover:bg-gray-900 hover:text-white">
              <FaSlidersH />
              All Filters
            </button>

          </div>

        </div>
      </section>


      {/* =====================================================
          LISTING
      ===================================================== */}

      <section className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

        <div className="mb-5 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-gray-900">
              Repair Services
            </h2>

            <p className="mt-1 text-xs text-gray-500">
              {filteredServices.length} service providers found
            </p>
          </div>
        </div>


        {/* =================================================
            CARDS
        ================================================= */}

        <div className="space-y-5">

          {filteredServices.map((service) => (
            <article
              key={service.id}
              className="group relative overflow-hidden rounded-xl border border-gray-200 bg-white p-4 shadow-sm transition duration-300 hover:border-blue-200 hover:shadow-md sm:p-5"
            >

              {/* Recently Viewed */}
              {service.recentlyViewed && (
                <div className="absolute right-3 top-0 rounded-b-lg border border-green-100 bg-green-50 px-3 py-1 text-[11px] font-medium text-gray-600">
                  Viewed Recently ⓘ
                </div>
              )}


              <div className="flex flex-col gap-5 sm:flex-row">

                {/* =========================================
                    IMAGE
                ========================================= */}

                <div className="relative h-52 w-full shrink-0 overflow-hidden rounded-lg bg-gray-100 sm:h-44 sm:w-44 lg:h-48 lg:w-48">

                  <img
                    src={service.image}
                    alt={service.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {/* Image Arrow */}
                  <button className="absolute right-0 top-1/2 flex h-10 w-7 -translate-y-1/2 items-center justify-center rounded-l-md bg-black/70 text-xl text-white">
                    ›
                  </button>

                </div>


                {/* =========================================
                    CONTENT
                ========================================= */}

                <div className="flex flex-1 flex-col">

                  {/* Name */}
                  <div className="flex items-start justify-between gap-3">

                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">
                        {service.name}
                      </h3>

                      {/* Rating */}
                      <div className="mt-2 flex items-center gap-2">

                        <span className="flex items-center gap-1 rounded bg-green-700 px-1.5 py-0.5 text-sm font-bold text-white">
                          {service.rating}
                          <FaStar className="text-[11px]" />
                        </span>

                        <span className="text-sm text-gray-500">
                          {service.reviews} Ratings
                        </span>

                      </div>
                    </div>

                  </div>


                  {/* Location */}
                  <div className="mt-3 flex items-center gap-2 text-sm text-gray-700">
                    <FaMapMarkerAlt className="text-gray-700" />
                    {service.location}
                  </div>


                  {/* Tags */}
                  <div className="mt-2 flex flex-wrap gap-2">

                    {service.services.map((tag, index) => (
                      <span
                        key={index}
                        className="rounded-md border border-gray-200 bg-gray-50 px-2.5 py-1 text-xs font-medium text-gray-700"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>


                  {/* Buttons */}
                  <div className="mt-auto flex flex-wrap gap-3 pt-6">

                    {/* Phone */}
                    <button className="flex items-center justify-center gap-2 rounded-md bg-green-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-green-800">
                      <FaPhoneAlt />
                      Show Number
                    </button>


                    {/* WhatsApp */}
                    <button className="flex items-center justify-center gap-2 rounded-md border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-800 transition hover:border-green-500 hover:text-green-600">
                      <FaWhatsapp className="text-lg text-green-600" />
                      WhatsApp
                    </button>


                    {/* Best Price */}
                    <button className="flex items-center justify-center gap-2 rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                      <FaCommentDots />
                      Get Best Price
                    </button>

                  </div>

                </div>

              </div>

            </article>
          ))}

        </div>


        {/* Empty State */}
        {filteredServices.length === 0 && (
          <div className="rounded-xl border border-gray-200 bg-white py-20 text-center">

            <h3 className="text-lg font-bold text-gray-900">
              No service providers found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try changing your filters.
            </p>

          </div>
        )}

      </section>

    </main>
  );
};

export default ServicesSection;