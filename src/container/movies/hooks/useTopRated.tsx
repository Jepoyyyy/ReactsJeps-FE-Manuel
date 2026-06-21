import { useEffect, useState, useCallback } from 'react';
import { type Movie } from '@/service/Movies/type';
import { getTopratedmovie } from '@/service/Movies/api';

export const useTopRated = () => {
  const [topRatedMovies, setTopRatedMovies] = useState<Movie[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);
      try {
        const response = await getTopratedmovie(page);
        setTopRatedMovies(response.results);
        setTotalPages(Math.min(response.total_pages, 500));
      } catch (error) {
        console.error('Error fetching top rated movies:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchMovies();
  }, [page]);

  const goToPage = useCallback((newPage: number) => setPage(newPage), []);

  return { topRatedMovies, page, totalPages, goToPage, loading };
};
