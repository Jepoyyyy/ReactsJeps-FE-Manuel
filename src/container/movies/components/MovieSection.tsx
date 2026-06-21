import { type Movie } from '@/service/Movies/type';
import MovieCard from './MovieCard';

interface MovieSectionProps {
  title: string;
  movies: Movie[];
  emptyMessage?: string;
  onMovieClick: (movie: Movie) => void;
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  loading?: boolean;
}

const MovieSection = ({
  title,
  movies = [],
  emptyMessage = 'No movies found.',
  onMovieClick,
  page,
  totalPages,
  onPageChange,
  loading = false,
}: MovieSectionProps) => {
  // Show up to 5 page buttons, centered around current page
  const maxButtons = 5;
  const startPage = Math.max(1, Math.min(page - Math.floor(maxButtons / 2), totalPages - maxButtons + 1));
  const endPage = Math.min(totalPages, startPage + maxButtons - 1);
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <div className="movies-section mb-12">
      <h2 className="text-2xl font-bold mb-6 text-black border-b border-neutral-200 pb-2 flex items-center gap-2 font-playfair">
        <span className="w-1.5 h-6 bg-black"></span>
        {title}
      </h2>
      
      <div className="movies-grid grid grid-cols-[repeat(auto-fill,minmax(160px,1fr))] gap-6">
        {loading ? (
          Array.from({ length: 12 }).map((_, idx) => (
            <div
              key={idx}
              className="relative aspect-[2/3] w-full bg-neutral-200 rounded-lg overflow-hidden border border-neutral-300 animate-pulse"
            >
              <div className="w-full h-full bg-gradient-to-r from-neutral-300 via-neutral-200 to-neutral-300" />
            </div>
          ))
        ) : movies.length > 0 ? (
          movies.map((movie) => (
            <MovieCard
              key={movie.id}
              movie={movie}
              onClick={() => onMovieClick(movie)}
            />
          ))
        ) : (
          <p className="text-neutral-500">{emptyMessage}</p>
        )}
      </div>

      {/* Pagination */}
      {!loading && totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          {/* Previous */}
          <button
            onClick={() => onPageChange(page - 1)}
            disabled={page === 1}
            className="px-3 py-1.5 rounded text-sm font-medium bg-white text-black hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-neutral-200 font-cascadia shadow-[1px_1px_0_0_rgba(0,0,0,0.05)]"
          >
            Prev
          </button>

          {/* Page numbers */}
          {pageNumbers.map((p) => (
            <button
              key={p}
              onClick={() => onPageChange(p)}
              className={`px-3.5 py-1.5 rounded text-sm font-medium transition-all font-cascadia ${
                page === p
                  ? 'bg-black text-white shadow-[2px_2px_0_0_#000]'
                  : 'bg-white text-black hover:bg-neutral-100 border border-neutral-200 shadow-[1px_1px_0_0_rgba(0,0,0,0.05)]'
              }`}
            >
              {p}
            </button>
          ))}

          {/* Next */}
          <button
            onClick={() => onPageChange(page + 1)}
            disabled={page === totalPages}
            className="px-3 py-1.5 rounded text-sm font-medium bg-white text-black hover:bg-neutral-100 disabled:opacity-30 disabled:cursor-not-allowed transition-all border border-neutral-200 font-cascadia shadow-[1px_1px_0_0_rgba(0,0,0,0.05)]"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default MovieSection;
