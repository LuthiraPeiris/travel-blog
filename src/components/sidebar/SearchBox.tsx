import { Search } from "lucide-react";

export default function SearchBox() {
  return (
    <div className="mb-12">
      <div className="flex items-center border-b border-[#c8c1bb] pb-3">
        <input
          type="text"
          placeholder="Search"
          className="w-full bg-transparent text-sm text-[#302d2a] outline-none placeholder:text-[#8a847e]"
        />

        <button
          type="button"
          aria-label="Search"
          className="ml-3 text-[#302d2a]"
        >
          <Search size={18} strokeWidth={1.5} />
        </button>
      </div>
    </div>
  );
}