import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { movieAction } from "../redux/actions/movieAction";
import Banner from "../components/Banner";
import MovieSlide from "../components/MovieSlide";
import { ClipLoader } from "react-spinners";

const Wrapper = styled.main`
  width: 100%;
  height: 50vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 20px;
  margin: 20px 10px;
  border-radius: 8px;
  padding: 10px;
  padding-left: 10px;
  background: crimson;
  width: 180px;
`;

const Home = () => {
  // const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const { popularMovie, topRatedMovie, upcomingMovie, loading } = useSelector(
    (state) => state.movie
  );
  // console.log(popularMovie, topRatedMovie, upcomingMovie);

  useEffect(() => {
    dispatch(movieAction.getMovies());
  }, []);

  if (loading) {
    return (
      <Wrapper>
        <ClipLoader color="#fff" loading={loading} size={150} />
      </Wrapper>
    );
  } else {
    return (
      <div>
        <Banner movie={popularMovie.results[0]} />
        <Title>Popular Movie</Title>
        <MovieSlide movies={popularMovie} />
        <Title>TopRated Movie</Title>
        <MovieSlide movies={topRatedMovie} />
        <Title>Upcoming Movie</Title>
        <MovieSlide movies={upcomingMovie} />
      </div>
    );
    // return <div><Banner movie ={popularMovie.results &&popularMovie.results[0]/></div>;
  }
};

export default Home;
