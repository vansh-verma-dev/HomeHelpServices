 
function MobileServices() {
  const services = [
    "All",
    "Installation",
    "Repair",
    "Wiring",
    "Fan",
    "Light",
    "Switch & Socket",
    "MCB",
    "Other",
  ];

  return (
    <section className="block md:hidden w-full mt-5">
      
      {/* Heading */}
      <div className="flex items-center justify-between px-4 mb-3">
        <div>
          <h2 className="text-lg font-bold text-gray-900">
            Our Services
          </h2>

          <p className="text-[11px] text-gray-400 mt-1">
            What do you need help with?
          </p>
        </div>

        <button className="text-xs font-semibold text-blue-600">
          View all
        </button>
      </div>

      {/* Service Categories */}
      <div className="flex gap-2 overflow-x-auto px-4 pb-2 scrollbar-hide">
        {services.map((service, index) => (
          <button
            key={service}
            className={`flex-shrink-0 whitespace-nowrap rounded-full px-4 py-2 text-[11px] font-semibold transition-all active:scale-95 ${
              index === 0
                ? "bg-blue-600 text-white shadow-sm shadow-blue-200"
                : "bg-white text-gray-600 border border-gray-200"
            }`}
          >
            {service}
          </button>
        ))}
      </div>

    </section>
  );
}

export default MobileServices;
 