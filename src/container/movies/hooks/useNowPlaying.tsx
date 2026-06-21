import { useEffect, useState, useCallback } from 'react';
import { type Movie } from '@/service/Movies/type';
import { getNowplayingmovies } from '@/service/Movies/api';

export const useNowPlaying = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await getNowplayingmovies(page);
        setNowPlayingMovies(response.results);
        setTotalPages(Math.min(response.total_pages, 500));
      } catch (error) {
        console.error('Error fetching now playing movies:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [page]);

  const goToPage = useCallback((newPage: number) => setPage(newPage), []);

  return { nowPlayingMovies, page, totalPages, goToPage, loading };
};
