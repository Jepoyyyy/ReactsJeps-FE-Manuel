export interface Movie {
    id: number;
    title: string;
    overview: string;
    release_date: string;
    poster_path: string | null;
    backdrop_path: string | null;
    vote_average: number;
    vote_count: number;
    original_language: string;
    genre_ids: number[];
}

export interface ResponseData {
  total_results: number;
  total_pages: number;
  page: number;
  results: Movie[];
}

export interface Movies {
  id: number;
  overview: string;
  original_title: string;
  poster_path: string
}