import { useState } from 'react';
import MovieNavbar from './components/MovieNavbar';
import MovieSection from './components/MovieSection';
import MovieModal from './components/MovieModal';
import { usePopular } from './hooks/usePopular';
import { useNowPlaying } from './hooks/useNowPlaying';
import { useMovieModal } from './hooks/useMovieModal';
import { useTopRated } from './hooks/useTopRated';
import { useUpcoming } from './hooks/useUpcoming';
import { useMovieSearch } from './hooks/useMovieSearch';
import useGenre from './hooks/useGenre';

const Movies = () => {
  const [activeCategory, setActiveCategory] = useState('now-playing');

  const { popularMovies, page: popularPage, totalPages: popularTotal, goToPage: goPopularPage, loading: popularLoading } = usePopular();
  const { nowPlayingMovies, page: nowPlayingPage, totalPages: nowPlayingTotal, goToPage: goNowPlayingPage, loading: nowPlayingLoading } = useNowPlaying();
  const { topRatedMovies, page: topRatedPage, totalPages: topRatedTotal, goToPage: goTopRatedPage, loading: topRatedLoading } = useTopRated();
  const { upcomingMovie, page: upcomingPage, totalPages: upcomingTotal, goToPage: goUpcomingPage, loading: upcomingLoading } = useUpcoming();
  
  const {
    query,
    setQuery,
    results: searchResults,
    loading: searchLoading,
    page: searchPage,
    setPage: setSearchPage,
    totalPages: searchTotalPages,
  } = useMovieSearch();

  const { selectedMovie, openModal, closeModal } = useMovieModal();
  const { genres } = useGenre();

  const renderSection = () => {
    if (query.trim() !== '') {
      return (
        <MovieSection
          title={`Search Results for "${query}"`}
          movies={searchResults}
          emptyMessage={searchLoading ? "Searching..." : "No movies found matching your search."}
          onMovieClick={openModal}
          page={searchPage}
          totalPages={searchTotalPages}
          onPageChange={setSearchPage}
          loading={searchLoading}
        />
      );
    }

    switch (activeCategory) {
      case 'now-playing':
        return (
          <MovieSection
            title="Now Playing"
            movies={nowPlayingMovies}
            emptyMessage="No now playing movies found."
            onMovieClick={openModal}
            page={nowPlayingPage}
            totalPages={nowPlayingTotal}
            onPageChange={goNowPlayingPage}
            loading={nowPlayingLoading}
          />
        );
      case 'popular':
        return (
          <MovieSection
            title="Popular Movies"
            movies={popularMovies}
            emptyMessage="No popular movies found."
            onMovieClick={openModal}
            page={popularPage}
            totalPages={popularTotal}
            onPageChange={goPopularPage}
            loading={popularLoading}
          />
        );
      case 'top-rated':
        return (
          <MovieSection
            title="Top Rated"
            movies={topRatedMovies}
            emptyMessage="No top rated movies found."
            onMovieClick={openModal}
            page={topRatedPage}
            totalPages={topRatedTotal}
            onPageChange={goTopRatedPage}
            loading={topRatedLoading}
          />
        );
      case 'upcoming':
        return (
          <MovieSection
            title="Upcoming"
            movies={upcomingMovie}
            emptyMessage="No upcoming movies found."
            onMovieClick={openModal}
            page={upcomingPage}
            totalPages={upcomingTotal}
            onPageChange={goUpcomingPage}
            loading={upcomingLoading}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="movies-page text-left max-w-7xl mx-auto">
      <MovieNavbar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        searchQuery={query}
        setSearchQuery={setQuery}
        searchLoading={searchLoading}
      />

      <div className="p-4 sm:p-6 md:p-12">
        {renderSection()}
      </div>

      {selectedMovie && (
        <MovieModal movie={selectedMovie} genres={genres} onClose={closeModal} />
      )}
    </div>
  );
};

export default Movies;
