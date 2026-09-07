import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import Bg from "../assets/background.png";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 60);
    return () => clearTimeout(t);
  }, []);

  return (
    <section className="relative flex min-h-[60vh] w-full items-center overflow-hidden bg-[#07111F] sm:min-h-[65vh] lg:min-h-[68vh]">
      <style>{`
        @keyframes heroDrift {
          0% {
            transform: scale(1) translate(0, 0);
          }

          50% {
            transform: scale(1.05) translate(-1%, 0.5%);
          }

          100% {
            transform: scale(1) translate(0, 0);
          }
        }

        @keyframes heroRise {
          from {
            opacity: 0;
            transform: translateY(16px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes scrollTick {
          0% {
            transform: translateY(0);
            opacity: 0;
          }

          30% {
            opacity: 1;
          }

          80% {
            opacity: 0;
          }

          100% {
            transform: translateY(14px);
            opacity: 0;
          }
        }

        .hero-photo {
          animation: heroDrift 22s ease-in-out infinite;
        }

        .rise {
          opacity: 0;
        }

        .rise.in {
          animation: heroRise 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0">
        <div className="hero-photo absolute inset-0">
          <img
            src={Bg}
            alt=""
            className="h-full w-full object-cover"
          />
        </div>

        {/* Dark blue overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(4,12,24,0.98) 0%, rgba(5,18,35,0.94) 32%, rgba(5,18,35,0.68) 55%, rgba(5,18,35,0.18) 82%, rgba(5,18,35,0) 100%)",
          }}
        />

        {/* Blue atmospheric glow */}
        <div className="absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="max-w-2xl py-14 sm:py-16 lg:py-20">

          {/* Heading */}
          <h1 className="text-[38px] font-semibold leading-[1.06] tracking-[-0.025em] text-white sm:text-[52px] lg:text-[60px]">

            <span
              className={`block rise ${mounted ? "in" : ""}`}
              style={{ animationDelay: "0.05s" }}
            >
              Appliance trouble
            </span>

            <span
              className={`block rise ${mounted ? "in" : ""}`}
              style={{ animationDelay: "0.2s" }}
            >
              at home?
            </span>

            <span
              className={`block rise ${mounted ? "in" : ""} text-blue-500`}
              style={{ animationDelay: "0.35s" }}
            >
              We're there in 60 minutes.
            </span>
          </h1>

          {/* Description */}
          <p
            className={`rise ${
              mounted ? "in" : ""
            } mt-5 max-w-xl text-[15px] leading-7 text-white/65 sm:mt-6 sm:text-[16px]`}
            style={{ animationDelay: "0.5s" }}
          >
            From a flickering fan to a fridge that won't cool — a verified
            technician arrives at your door, gives you a clear price before
            starting, and you pay only once the job's done.
          </p>

          {/* Buttons */}
          <div
            className={`rise ${
              mounted ? "in" : ""
            } mt-7 flex flex-wrap items-center gap-6`}
            style={{ animationDelay: "0.65s" }}
          >
            <NavLink
              to="/book-repair"
              className="rounded-lg bg-blue-600 px-7 py-3.5 text-[14px] font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-blue-600/30"
            >
              Book a Repair
            </NavLink>

            <NavLink
              to="/services"
              className="border-b border-white/30 pb-1 text-[14px] font-medium text-white/80 transition-all hover:border-blue-400 hover:text-blue-400"
            >
              Browse Services
            </NavLink>
          </div>

          {/* Stats */}
          <div
            className={`rise ${
              mounted ? "in" : ""
            } mt-9 flex divide-x divide-white/15`}
            style={{ animationDelay: "0.8s" }}
          >
            {[
              ["48,000+", "Repairs completed"],
              ["4.8 / 5", "Average rating"],
              ["30 days", "Repair warranty"],
            ].map(([number, label]) => (
              <div
                key={label}
                className="px-5 first:pl-0 sm:px-7"
              >
                <p className="text-lg font-semibold text-white sm:text-xl">
                  {number}
                </p>

                <p className="mt-1 text-[11px] text-white/45 sm:text-[12px]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 sm:block">
        <div className="relative h-7 w-[1.5px] overflow-hidden bg-white/15">
          <div
            className="absolute left-0 top-0 h-2.5 w-full bg-blue-400"
            style={{
              animation: "scrollTick 2.2s ease-in-out infinite",
            }}
          />
        </div>
      </div>
    </section>
  );
}