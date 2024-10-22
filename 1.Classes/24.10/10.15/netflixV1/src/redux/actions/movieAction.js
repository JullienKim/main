// const getMovies = () => {
//   return (dispatch) => {
//     let url =``
//   }
// };

// export const movies = {getMovies};

import api from "../api";

const API_KEY = import.meta.env.VITE_API_KEYS;

const getMovies = () => {
  return async (dispatch) => {
    try {
      dispatch({
        type: "GET_MOVIES_REQUEST",
        loading: true,
      });
      const popularMovieApi = api.get(
        `movie/popular?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const topRatedMovieApi = api.get(
        `movie/top_rated?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const upcomingMovieApi = api.get(
        `movie/upcoming?api_key=${API_KEY}&language=ko-KR&page=1`
      );
      const genreApi = api.get(
        `genre/movie/list?api_key=${API_KEY}&language=ko`
      );

      const [popularMovie, topRatedMovie, upcomingMovie, genreList] =
        await Promise.all([
          popularMovieApi,
          topRatedMovieApi,
          upcomingMovieApi,
          genreApi,
        ]);
      console.log(genreList.data.genreList);
      // console.log(popularMovie);
      dispatch({
        type: "GET_MOVIES_SUCCESS",
        payload: {
          popularMovie: popularMovie.data,
          topRatedMovie: topRatedMovie.data,
          upcomingMovie: upcomingMovie.data,
          genreList: genreList.data.genres,
          loading: true,
        },
      });
    } catch (error) {
      dispatch({ type: "GET_MOVIES_FAILURE" });
    }
    // console.log(popularMovie, topRatedMovie, upcomingMovie);
  };
};

export const movieAction = { getMovies };
