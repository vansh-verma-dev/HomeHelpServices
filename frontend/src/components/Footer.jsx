import { NavLink } from "react-router-dom";
import {
  FaTools,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaArrowRight,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-5 py-14 sm:px-8 lg:px-10">

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">

            <NavLink to="/" className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-600">
                <FaTools size={20} />
              </div>

              <div className="leading-tight">
                <h2 className="text-lg font-bold">
                  Home Help
                </h2>

                <p className="text-[10px] font-medium uppercase tracking-wider text-blue-400">
                  Appliance Services
                </p>
              </div>
            </NavLink>

            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-400">
              Reliable and professional home appliance repair services
              at your doorstep. Get your appliance problems fixed by
              skilled technicians.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex gap-3">

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition hover:bg-blue-600 hover:text-white"
              >
                <FaFacebookF size={14} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition hover:bg-pink-600 hover:text-white"
              >
                <FaInstagram size={15} />
              </a>

              <a
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-slate-300 transition hover:bg-green-600 hover:text-white"
              >
                <FaWhatsapp size={16} />
              </a>

            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <NavLink
                  to="/"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Home
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Services
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/how-it-works"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  How It Works
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/about"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  About Us
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/contact"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Contact
                </NavLink>
              </li>

            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Our Services
            </h3>

            <ul className="mt-5 space-y-3">

              <li>
                <NavLink
                  to="/services/ac-repair"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  AC Repair
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services/refrigerator-repair"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Refrigerator Repair
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services/tv-repair"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  TV Repair
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services/washing-machine-repair"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Washing Machine
                </NavLink>
              </li>

              <li>
                <NavLink
                  to="/services/electrical"
                  className="text-sm text-slate-400 transition hover:text-white"
                >
                  Electrical Services
                </NavLink>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact Us
            </h3>

            <div className="mt-5 space-y-4">

              {/* Phone */}
              <a
                href="tel:+919876543210"
                className="flex items-start gap-3 text-slate-400 transition hover:text-white"
              >
                <FaPhoneAlt className="mt-1 shrink-0 text-blue-500" size={14} />

                <div>
                  <p className="text-xs text-slate-500">
                    Call Us
                  </p>

                  <p className="mt-1 text-sm">
                    +91 XXXXXXXXXX
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:help@homehelpservice.com"
                className="flex items-start gap-3 text-slate-400 transition hover:text-white"
              >
                <FaEnvelope className="mt-1 shrink-0 text-blue-500" size={15} />

                <div>
                  <p className="text-xs text-slate-500">
                    Email
                  </p>

                  <p className="mt-1 text-sm">
                    help@homehelpservice.com
                  </p>
                </div>
              </a>

              {/* Address */}
              <div className="flex items-start gap-3 text-slate-400">
                <FaMapMarkerAlt className="mt-1 shrink-0 text-blue-500" size={15} />

                <div>
                  <p className="text-xs text-slate-500">
                    Service Area
                  </p>

                  <p className="mt-1 text-sm">
                    Your City & Nearby Areas
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-slate-800 bg-slate-900 p-5 sm:flex-row sm:items-center sm:p-6">

          <div>
            <h3 className="font-semibold">
              Need appliance repair?
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Book a professional technician today.
            </p>
          </div>

          <NavLink
            to="/book-repair"
            className="group flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold transition hover:bg-blue-700"
          >
            Book a Repair

            <FaArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-1"
            />
          </NavLink>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-slate-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:px-8 lg:px-10 sm:text-left">

          <p className="text-xs text-slate-500">
            © 2026 Home Help Service. All rights reserved.
          </p>

          <div className="flex gap-5">

            <NavLink
              to="/privacy-policy"
              className="text-xs text-slate-500 transition hover:text-white"
            >
              Privacy Policy
            </NavLink>

            <NavLink
              to="/terms"
              className="text-xs text-slate-500 transition hover:text-white"
            >
              Terms & Conditions
            </NavLink>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;