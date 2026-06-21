import { useState, useEffect } from 'react';
import { searchMovies } from '@/service/Movies/searchApi';
import type { Movie } from '@/service/Movies/type';

export const useMovieSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [debouncedQuery, setDebouncedQuery] = useState('');

  // Show spinner immediately when user starts typing
  useEffect(() => {
    if (!query.trim()) {
      setDebouncedQuery('');
      setLoading(false);
      return;
    }

    setLoading(true);
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 1000);

    return () => {
      clearTimeout(handler);
    };
  }, [query]);

  // Perform API call when the debounced query or page changes
  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      setPage(1);
      setTotalPages(1);
      return;
    }

    let isMounted = true;
    const fetchResults = async () => {
      setLoading(true);
      try {
        const data = await searchMovies(debouncedQuery, page);
        if (isMounted) {
          setResults(data.results || []);
          setTotalPages(data.total_pages || 1);
        }
      } catch (error) {
        console.error('Error searching movies:', error);
        if (isMounted) {
          setResults([]);
          setTotalPages(1);
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchResults();

    return () => {
      isMounted = false;
    };
  }, [debouncedQuery, page]);

  // Reset to page 1 on new query searches
  useEffect(() => {
    setPage(1);
  }, [debouncedQuery]);

  return {
    query,
    setQuery,
    results,
    loading,
    page,
    setPage,
    totalPages,
  };
};
