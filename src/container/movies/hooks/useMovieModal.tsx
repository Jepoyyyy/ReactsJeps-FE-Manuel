import { useEffect, useState, useCallback } from 'react';
import { type Movie } from '@/service/Movies/type';

export const useMovieModal = () => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const openModal = useCallback((movie: Movie) => {
    setSelectedMovie(movie);
  }, []);

  const closeModal = useCallback(() => {
    setSelectedMovie(null);
  }, []);


  useEffect(() => {
    if (selectedMovie) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedMovie]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedMovie(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return { selectedMovie, openModal, closeModal };
};
