import { FaSearch } from "react-icons/fa";
import { TbAdjustmentsHorizontal } from "react-icons/tb";

function SearchBar() {
  return (
    <div className="px-4 py-3 lg:hidden">
      <div className="flex h-12 items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 shadow-sm">
        
        {/* Search Icon */}
        <FaSearch className="shrink-0 text-sm text-slate-400" />

        {/* Input */}
        <input
          type="text"
          placeholder="What service do you need?"
          className="min-w-0 flex-1 bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
        />

        {/* Filter */}
        <button
          type="button"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-colors hover:bg-blue-100"
        >
          <TbAdjustmentsHorizontal size={20} />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;