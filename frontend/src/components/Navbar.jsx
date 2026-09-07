import { NavLink } from "react-router-dom";
import {
  FaTools,
  FaPhoneAlt,
  FaClipboardList,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "About Us", path: "/about" },
  { name: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 hidden border-b border-slate-100 bg-white/95 backdrop-blur-md lg:block">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* ================= LOGO ================= */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white shadow-md shadow-blue-600/20">
            <FaTools size={18} />
          </div>

          <div className="leading-tight">
            <h1 className="text-[17px] font-bold tracking-tight text-slate-900">
              Home Help
            </h1>

            <p className="mt-0.5 text-[9px] font-semibold uppercase tracking-[0.12em] text-blue-600">
              Appliance Services
            </p>
          </div>
        </NavLink>

        {/* ================= NAVIGATION ================= */}
        <nav className="flex items-center gap-7">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 text-[13px] font-medium transition-colors duration-200 ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-600 hover:text-blue-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  {/* Active Line */}
                  <span
                    className={`absolute -bottom-1 left-1/2 h-[2px] -translate-x-1/2 rounded-full bg-blue-600 transition-all duration-300 ${
                      isActive ? "w-5" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* ================= RIGHT SIDE ================= */}
        <div className="flex items-center gap-2.5">

          {/* Call Us */}
          <a
            href="tel:+919876543210"
            className="group flex items-center gap-2 rounded-xl px-3 py-2.5 text-[13px] font-medium text-slate-600 transition-all hover:bg-blue-50 hover:text-blue-600"
          >
            <FaPhoneAlt
              size={13}
              className="transition-transform group-hover:scale-110"
            />
            <span>Call Us</span>
          </a>

          {/* My Requests */}
          <NavLink
            to="/requests"
            className={({ isActive }) =>
              `flex items-center gap-2 rounded-xl border px-4 py-2.5 text-[13px] font-semibold transition-all ${
                isActive
                  ? "border-blue-200 bg-blue-50 text-blue-600"
                  : "border-slate-200 bg-white text-slate-700 hover:border-blue-200 hover:text-blue-600"
              }`
            }
          >
            <FaClipboardList size={14} />
            My Requests
          </NavLink>

          {/* Book Repair */}
          <NavLink
            to="/book-repair"
            className="rounded-xl bg-blue-600 px-5 py-2.5 text-[13px] font-semibold text-white shadow-md shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-600/25"
          >
            Book a Repair
          </NavLink>

        </div>
      </div>
    </header>
  );
}

export default Navbar;