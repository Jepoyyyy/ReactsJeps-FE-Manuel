import { type Movie } from '@/service/Movies/type';

interface MovieCardProps {
  movie: Movie;
  onClick: () => void;
}

const MovieCard = ({ movie, onClick }: MovieCardProps) => {
  const releaseYear = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : '0.0';
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://placehold.co/500x750?text=No+Poster';

  return (
    <div
      onClick={onClick}
      className="movie-card group relative aspect-[2/3] w-full bg-white rounded-lg overflow-hidden border border-neutral-200 hover:border-black hover:shadow-[3px_3px_0_0_#000] transition-all duration-300 cursor-pointer"
    >
      {/* Poster Image */}
      <img
        src={posterUrl}
        alt={movie.title}
        className="w-full h-full object-cover grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
        loading="lazy"
      />

      {/* Floating Rating Badge (Top Right) */}
      <div className="absolute top-2 right-2 bg-white/95 border border-neutral-200 text-black px-2 py-0.5 rounded text-[10px] sm:text-xs font-bold flex items-center gap-1 font-cascadia z-10 shadow-sm">
        ⭐ {rating}
      </div>

      {/* Bottom Info Overlay (Fade in on hover) */}
      <div className="absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-3 text-left">
        <h3 className="font-extrabold text-sm sm:text-base text-black mb-0.5 line-clamp-2 leading-tight font-playfair">
          {movie.title}
        </h3>
        <div className="flex items-center gap-2 text-[10px] sm:text-xs text-neutral-600">
          <span className="font-cascadia">{releaseYear}</span>
          <span className="bg-neutral-100 px-1 py-0.2 rounded font-cascadia uppercase text-[9px] text-neutral-500">
            {movie.original_language || 'EN'}
          </span>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
