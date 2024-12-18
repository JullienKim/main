import { useLocation } from "react-router-dom";
import { GetMoviesResult, searchContents, searchGenres } from "../api";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import { makeImagePath } from "../utils";

const Container = styled.div`
  width: 100%;
  margin-top: 60px;
`;

const SearchBox = styled.div``;

const MovieSection = styled.div`
  display: flex;
  width: 100%;
  margin: 10px;
  gap: 10px;
`;
const MovieImg = styled.img`
  width: 50%;
  height: auto;
  object-fit: cover;
`;
const MovieInfo = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
`;
const MovieTitle = styled.h4`
  font-size: 40px;
  background: ${(props) => [props.theme.red]};
  color: ${(props) => [props.theme.white.darker]};
  border-radius: 8px;
  padding: 0 10px;
`;
const MovieOverView = styled.p`
  font-size: 24px;
  line-height: 1.6;
  border-top: 1px solid ${(props) => [props.theme.black.lighter]};
  border-bottom: 1px solid ${(props) => [props.theme.black.lighter]};
  padding: 20px 0;
`;
const MovieDate = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 8px;
  }
`;
const MovieValue = styled.div`
  font-size: 18px;
  width: 50px;
  height: 50px;
  text-align: center;
  background: ${(props) => props.theme.black.lighter};
  color: ${(props) => props.theme.white.darker};
`;

const MovieRate = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 8px;
  }
`;

const RateNumbers = styled.div`
  font-size: 18px;
  span {
    display: block;
    background: #ffa300;
    padding: 10px;
    border-radius: 8px;
    margin-bottom: 8px;
  }
`;

const Search = () => {
  const { search } = useLocation();
  // const key = search.split("=")[1];
  // console.log(search);
  // console.log(key);
  const keyword = new URLSearchParams(search).get("keyword");
  // const contents = searchContents(word);

  const { data: movieData, isLoading: movieLoading } =
    useQuery<GetMoviesResult>({
      queryKey: ["multiContents", keyword],
      queryFn: () => searchContents(keyword),
    });

  const { data: genreData, isLoading: genreLoading } = useQuery({
    queryKey: ["getGenres"],
    queryFn: () => searchGenres,
  });

  return (
    <Container>
      {movieLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          {/* <img
            src={makeImagePath(data?.results[0].backdrop_path || "", "w500")}
            alt=""
          /> */}
          {movieData?.results.map((movie, index) => (
            <SearchBox key={index}>
              <MovieSection>
                <MovieImg src={makeImagePath(movie.backdrop_path)} />
                <MovieInfo>
                  <MovieTitle>{movie.original_title}</MovieTitle>
                  <MovieOverView>{movie.overview}</MovieOverView>
                  <MovieDate>
                    <span>Release : {movie.release_date}</span>
                  </MovieDate>
                  <MovieRate>
                    <span>Rate : {movie.vote_average?.toFixed(2)}</span>
                    <RateNumbers>
                      <span>
                        Members : {movie.vote_count?.toLocaleString("ko-kr")}
                      </span>
                    </RateNumbers>
                  </MovieRate>
                  <MovieValue>{movie.adult ? "18+" : "ALL"}</MovieValue>
                </MovieInfo>
              </MovieSection>
            </SearchBox>
          ))}
        </>
      )}
    </Container>
  );
};

export default Search;
