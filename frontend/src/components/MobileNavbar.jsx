import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaUser,
  FaClipboardList,
  FaShieldAlt,
  FaFileContract,
} from "react-icons/fa";

export default function MobileNavbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className=" z-50 border-b border-slate-100 bg-white lg:hidden  sticky top-0 left-0">
      <div className="flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2.5"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white shadow-sm">
            <FaUserCircle size={20} />
          </div>

          <div className="leading-none">
            <p className="text-[15px] font-bold tracking-tight text-slate-900">
              Home Help
            </p>
            <p className="mt-1 text-[10px] font-medium tracking-wide text-blue-600">
              SERVICES
            </p>
          </div>
        </Link>

        {/* Profile Button */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          className={`flex h-10 w-10 items-center justify-center rounded-full border transition-all ${
            open
              ? "border-blue-200 bg-blue-50 text-blue-600"
              : "border-slate-200 bg-white text-slate-600"
          }`}
          aria-label="Open profile menu"
        >
          <FaUser size={16} />
        </button>
      </div>

      {/* Dropdown */}
      {open && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 -z-10 bg-slate-900/10"
            onClick={() => setOpen(false)}
          />

          <div className="absolute right-4 top-[68px] w-[230px] overflow-hidden rounded-2xl border border-slate-200 bg-white p-2 shadow-xl shadow-slate-200/60">

            {/* Profile Header */}
            <div className="mb-1 flex items-center gap-3 rounded-xl bg-slate-50 px-3 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600">
                <FaUser size={15} />
              </div>

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  My Account
                </p>
                <p className="text-[11px] text-slate-400">
                  Manage your account
                </p>
              </div>
            </div>

            {/* Menu Items */}
            <Link
              to="/profile"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              <FaUser className="text-slate-400" />
              <span>Profile</span>
            </Link>

            <Link
              to="/my-requests"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              <FaClipboardList className="text-slate-400" />
              <span>My Requests</span>
            </Link>

            <div className="my-1 h-px bg-slate-100" />

            <Link
              to="/privacy-policy"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              <FaShieldAlt className="text-slate-400" />
              <span>Privacy Policy</span>
            </Link>

            <Link
              to="/terms"
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm text-slate-600 transition-colors hover:bg-blue-50 hover:text-blue-600"
            >
              <FaFileContract className="text-slate-400" />
              <span>Terms & Conditions</span>
            </Link>
          </div>
        </>
      )}
    </header>
  );
}