import { useEffect, useState } from 'react';
import { getMovieVideos } from '@/service/Movies/videoApi';

export const useMovieTrailer = (movieId: number | null | undefined) => {
  const [trailerKey, setTrailerKey] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    if (!movieId) {
      setTrailerKey(null);
      setLoading(false);
      return;
    }

    let isMounted = true;
    const fetchTrailer = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getMovieVideos(movieId);
        if (isMounted) {
          const videos = data.results || [];
          // Look for YouTube trailer
          const trailer = videos.find(
            (vid: any) =>
              vid.site === 'YouTube' &&
              vid.type === 'Trailer'
          ) || videos.find((vid: any) => vid.site === 'YouTube'); // fallback to any YouTube video if trailer not found
          
          setTrailerKey(trailer ? trailer.key : null);
        }
      } catch (err) {
        if (isMounted) {
          setError(err);
          setTrailerKey(null);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchTrailer();

    return () => {
      isMounted = false;
    };
  }, [movieId]);

  return { trailerKey, loading, error };
};
