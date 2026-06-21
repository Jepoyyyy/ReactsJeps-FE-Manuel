import { type Movie } from '@/service/Movies/type';
import { useMovieTrailer } from '@/container/movies/hooks/useMovieTrailer';

interface Genre {
  id: number;
  name: string;
}

interface MovieModalProps {
  movie: Movie;
  genres: Genre[];
  onClose: () => void;
}

const MovieModal = ({ movie, genres = [], onClose }: MovieModalProps) => {
  const { trailerKey } = useMovieTrailer(movie.id);

  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://placehold.co/500x750?text=No+Poster';

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-6 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-4xl bg-white border-2 border-black rounded-2xl overflow-hidden shadow-[4px_4px_0_0_#000] animate-scale-in max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Backdrop Banner (Always shown at the top) */}
        <div className="relative w-full h-[180px] md:h-[320px] bg-neutral-200 overflow-hidden">
          {movie.backdrop_path ? (
            <>
              <img
                src={`https://image.tmdb.org/t/p/original${movie.backdrop_path}`}
                alt={movie.title}
                className="w-full h-full object-cover opacity-25"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-white/40 to-transparent" />
            </>
          ) : (
            <div className="w-full h-full bg-gradient-to-r from-neutral-200 to-neutral-100" />
          )}

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white hover:bg-black hover:text-white text-black rounded-full p-2 border-2 border-black transition-all duration-200 cursor-pointer shadow-md z-20"
            aria-label="Close modal"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Content Body */}
        <div className="relative -mt-16 md:-mt-24 px-6 md:px-8 pb-6 flex flex-col md:flex-row gap-6 md:gap-8 z-10">
          {/* Poster */}
          <div className="w-36 md:w-52 shrink-0 mx-auto md:mx-0 rounded-xl overflow-hidden border-2 border-black shadow-[3px_3px_0_0_#000] bg-white aspect-[2/3]">
            <img
              src={posterUrl}
              alt={movie.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Info */}
          <div className="flex-grow flex flex-col justify-end pt-2 md:pt-12 text-left">
            <h2 className="text-2xl md:text-4xl font-extrabold text-black mb-2 leading-tight font-playfair">
              {movie.title}
            </h2>

            {/* Metadata Badges */}
            <div className="flex flex-wrap items-center gap-2.5 mb-4 text-xs">
              <span className="border border-neutral-200 bg-white text-neutral-800 px-2.5 py-1 rounded font-cascadia shadow-[1px_1px_0_0_rgba(0,0,0,0.05)]">
                Released: {movie.release_date}
              </span>
              <span className="border border-neutral-200 bg-white text-neutral-800 px-2.5 py-1 rounded font-cascadia flex items-center gap-1 shadow-[1px_1px_0_0_rgba(0,0,0,0.05)]">
                ⭐ {movie.vote_average ? movie.vote_average.toFixed(1) : '0.0'}{' '}
                <span className="text-neutral-500">({movie.vote_count || 0} votes)</span>
              </span>
              <span className="border border-neutral-200 bg-white text-neutral-800 px-2.5 py-1 rounded uppercase font-cascadia shadow-[1px_1px_0_0_rgba(0,0,0,0.05)]">
                Language: {movie.original_language}
              </span>
            </div>

            {/* Genres */}
            {movie.genre_ids && movie.genre_ids.length > 0 && (
              <div className="flex flex-wrap gap-1.5 mb-5">
                {movie.genre_ids.map((genreId) => (
                  <span
                    key={genreId}
                    className="border border-neutral-200 bg-white text-neutral-800 text-xs px-2.5 py-1 rounded font-cascadia shadow-[1px_1px_0_0_rgba(0,0,0,0.05)]"
                  >
                    {genres.find((g) => g.id === genreId)?.name || 'Other'}
                  </span>
                ))}
              </div>
            )}

            {/* Synopsis */}
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2 font-cascadia">
              Synopsis
            </h3>
            <p className="text-sm md:text-base text-neutral-800 leading-relaxed max-w-2xl font-playfair">
              {movie.overview || 'No overview available for this movie.'}
            </p>
          </div>
        </div>

        {/* Video Trailer Section (At the bottom of the modal content) */}
        {trailerKey && (
          <div className="px-6 md:px-8 pb-8 pt-4 border-t border-neutral-200">
            <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4 text-left font-cascadia">
              Official Trailer
            </h3>
            <div className="w-full aspect-video rounded-xl overflow-hidden border-2 border-black shadow-[3px_3px_0_0_#000] bg-white">
              <iframe
                src={`https://www.youtube.com/embed/${trailerKey}?autoplay=0&mute=0&controls=1`}
                title={`${movie.title} Trailer`}
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieModal;
