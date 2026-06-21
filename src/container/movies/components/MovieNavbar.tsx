import { Loader2, Search, X } from "lucide-react";

interface MovieNavbarProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  searchLoading: boolean;
}

const categories = [
  { id: 'now-playing', label: 'Now Playing' },
  { id: 'popular', label: 'Popular' },
  { id: 'top-rated', label: 'Top Rated' },
  { id: 'upcoming', label: 'Upcoming' },
];

const MovieNavbar = ({
  activeCategory,
  onCategoryChange,
  searchQuery,
  setSearchQuery,
  searchLoading,
}: MovieNavbarProps) => {
  return (
    <div className="sticky top-16 z-40 bg-white/95 backdrop-blur border-b border-neutral-200">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 md:px-12 py-2 sm:py-0 gap-4 sm:gap-0">
        
        {/* Categories / Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto w-full sm:w-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                if (searchQuery) {
                  setSearchQuery('');
                }
                onCategoryChange(cat.id);
              }}
              className={`px-3 sm:px-4 py-3 text-xs sm:text-sm font-medium whitespace-nowrap transition-colors border-b-2 font-cascadia ${
                activeCategory === cat.id && !searchQuery
                  ? 'text-black border-black'
                  : 'text-neutral-400 border-transparent hover:text-black hover:border-neutral-300'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Search Bar Input */}
        <div className="relative w-full sm:w-64 flex items-center py-2 sm:py-0">
          <span className="absolute left-3 text-neutral-500">
            <Search className="w-4 h-4" />
          </span>
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white border border-neutral-200 focus:border-black rounded-md py-1.5 pl-9 pr-8 text-sm text-black placeholder-neutral-400 font-cascadia focus:outline-none transition-all duration-300"
          />
          <span className="absolute right-3 flex items-center gap-1.5">
            {searchLoading && (
              <Loader2 className="w-4 h-4 text-black animate-spin" />
            )}
            {!searchLoading && searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="text-neutral-400 hover:text-black transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </span>
        </div>

      </div>
    </div>
  );
};

export default MovieNavbar;
