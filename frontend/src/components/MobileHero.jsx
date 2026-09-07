 
function MobileHero() {
  return (
    <section className="block md:hidden w-full px-3 mt-3">
      <div className="relative w-full min-h-[220px] overflow-hidden rounded-3xl bg-white border border-gray-100 shadow-sm">

        {/* Content */}
        <div className="relative z-10 w-[58%] p-5">

          {/* Popular Badge */}
          <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-[11px] font-semibold text-blue-600">
            ✦ Popular Service
          </span>

          {/* Heading */}
          <h1 className="mt-3 text-[22px] leading-[1.15] font-bold tracking-tight text-gray-900">
            Hire a
            <span className="block text-blue-600">
              Service Man
            </span>
          </h1>

          {/* Description */}
          <p className="mt-2 max-w-[180px] text-[11px] leading-4 text-gray-500">
            Need help with wiring, repairs or installations?
          </p>

          {/* Button */}
          <button
            className="mt-4 rounded-full bg-blue-600 px-4 py-2 text-[11px] font-semibold text-white shadow-md shadow-blue-200 active:scale-95 transition-transform"
          >
            Book Now →
          </button>
        </div>

        {/* Image */}
        <div className="absolute right-0 top-0 h-full w-[45%] overflow-hidden">
          <img
            src="https://i.pinimg.com/1200x/f6/b4/f5/f6b4f5f50dd3cf7574c0d089f66bdddf.jpg"
            alt="Home service professional"
            className="h-full w-full object-cover"
          />

          {/* Image Gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent" />
        </div>

        {/* Small Decorative Circle */}
        <div className="absolute -bottom-8 -right-8 h-24 w-24 rounded-full bg-blue-50" />

      </div>
    </section>
  );
}

export default MobileHero;
 