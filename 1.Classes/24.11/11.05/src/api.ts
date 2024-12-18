const API_KEY = "d878618220401154ace7cc7ae142b60a";
const BASE_PATH = "https://api.themoviedb.org/3";

export interface Movie {
  id: number;
  backdrop_path: string;
  poster_path: string;
  title: string;
  original_title: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  release_date: string;
  adult: boolean;
}

export interface GetMoviesResult {
  dates: {
    maximum: string;
    minimum: string;
  };
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export const getMovies = () => {
  return fetch(
    // `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}&language=ko-kr`
    `${BASE_PATH}/movie/now_playing?api_key=${API_KEY}`
  ).then((response) => response.json());
};

export const searchContents = (keyword: string | null) => {
  return fetch(
    `${BASE_PATH}/search/multi?api_key=${API_KEY}&query=${keyword}`
  ).then((response) => response.json());
};


export const searchGenres = () => {
  return fetch(
    `${BASE_PATH}/genre/movie/list?api_key=${API_KEY}`
  ).then((response) => response.json());
}