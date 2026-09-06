import { IoHomeOutline } from "react-icons/io5";
import { MdElectricalServices } from "react-icons/md";
import { FaClipboardList, FaCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const items = [
  {
    name: "Home",
    path: "/",
    icon: IoHomeOutline,
  },
  {
    name: "Services",
    path: "/services",
    icon: MdElectricalServices,
  },
  {
    name: "Requests",
    path: "/requests",
    icon: FaClipboardList,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: FaCircleUser,
  },
];

function MobileNavigat() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 border-t border-gray-200 bg-white/95 px-3 pb-safe pt-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden">
      <div className="mx-auto flex max-w-md items-center justify-around">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex min-w-[65px] flex-col items-center gap-1 rounded-xl px-3 py-2 text-xs font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-500 hover:text-blue-600"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <Icon
                    className={`text-[22px] transition-transform duration-200 ${
                      isActive ? "scale-110" : ""
                    }`}
                  />

                  <span>{item.name}</span>
                </>
              )}
            </NavLink>
          );
        })}
      </div>
    </nav>
  );
}

export default MobileNavigat;