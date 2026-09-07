import {
  FaSnowflake,
  FaTv,
  FaFan,
  FaTools,
} from "react-icons/fa";
import { MdKitchen, MdLocalLaundryService } from "react-icons/md";

const services = [
  {
    name: "AC Repair",
    icon: FaSnowflake,
  },
  {
    name: "Refrigerator Repair",
    icon: MdKitchen,
  },
  {
    name: "TV Repair",
    icon: FaTv,
  },
  {
    name: "Washing Machine Repair",
    icon: MdLocalLaundryService,
  },
  {
    name: "Fan Repair",
    icon: FaFan,
  },
  {
    name: "Electrical Services",
    icon: FaTools,
  },
];

function ServiceMarquee() {
  return (
    <section className="overflow-hidden border-y border-slate-200 bg-white py-4">
      <div className="flex w-max animate-marquee">

        {/* First Set */}
        <div className="flex items-center">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={`first-${index}`}
                className="mx-6 flex items-center gap-3 whitespace-nowrap"
              >
                <Icon className="text-blue-600" size={18} />

                <span className="text-sm font-semibold text-slate-700">
                  {service.name}
                </span>

                <span className="ml-6 text-slate-300">
                  •
                </span>
              </div>
            );
          })}
        </div>

        {/* Duplicate Set for Continuous Loop */}
        <div className="flex items-center">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <div
                key={`second-${index}`}
                className="mx-6 flex items-center gap-3 whitespace-nowrap"
              >
                <Icon className="text-blue-600" size={18} />

                <span className="text-sm font-semibold text-slate-700">
                  {service.name}
                </span>

                <span className="ml-6 text-slate-300">
                  •
                </span>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

export default ServiceMarquee;