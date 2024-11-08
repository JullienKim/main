import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useMatch, PathMatch } from "react-router-dom";
import styled from "styled-components";
import {
  AnimatePresence,
  motion,
  useAnimation,
  useScroll,
} from "framer-motion";
import { getMovies, GetMoviesResult } from "../api";
import { makeImagePath } from "../utils";

const Container = styled.div`
  width: 100%;
  height: 2000px;
  margin-top: 60px;
  background: ${(props) => props.theme.black.veryDark};
`;

const Loader = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  color: ${(props) => [props.theme.red]};
`;

// interface BgPhote {
//   title|undefined;
// }

const Banner = styled.div<{ bgPhoto: string | undefined }>`
  color: ${(props) => props.theme.white.darker};
  width: 100%;
  height: calc(100vh - 60px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 60px;
  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)),
    url(${(props) => props.bgPhoto}) center/cover no-repeat;
`;

const Title = styled.h2`
  font-size: 68px;
  margin-bottom: 10px;
`;

const Overview = styled.p`
  font-size: 30px;
  width: 50%;
`;

const Slider = styled.div`
  position: relative;
  width: 100%;
  top: -100px;
`;

const Row = styled(motion.div)`
  position: absolute;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  margin-bottom: 10px;
`;

const Box = styled(motion.div)<{ bgPhoto: string | undefined }>`
  width: auto;
  height: 200px;
  background: url(${(props) => props.bgPhoto}) center/cover no-repeat;
  font-size: 22px;
  cursor: pointer;
  &:first-child {
    transform-origin: center left;
  }
  &:last-child {
    transform-origin: center right;
  }
`;

const Info = styled(motion.div)`
  width: 100%;
  height: 100%;
  padding: 20px;
  background: ${(props) => props.theme.black.darker};
  opacity: 0;
  h4 {
    color: ${(props) => props.theme.white.lighter};
    text-align: center;
    font-size: 16px;
  }
`;

const ModalBox = styled(motion.div)`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 40vw;
  height: 80vh;
  /* transform: translate(-50%, -50%); */
  background: ${(props) => props.theme.black.lighter};
  color: ${(props) => props.theme.white.darker};
  border-radius: 8px;
  overflow: hidden;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  cursor: pointer;
`;

const MovieCover = styled.div`
  width: 100%;
  height: 400px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  /* object-fit: cover; */
  /* background: linear-gradient(); */
`;

const MovieTitle = styled.h3`
  position: relative;
  top: -80px;
  color: ${(props) => props.theme.red};
  font-size: 28px;
  margin: 20px;
  margin-bottom: 0px;
`;

const MovieOverview = styled.p`
  position: relative;
  top: -30px;
  margin: 0 16px;
  line-height: 30px;
  font-size: 20px;
`;

const rowVariants = {
  hidden: {
    x: window.innerWidth + 10,
  },
  visible: {
    x: 0,
  },
  exit: {
    x: -window.innerWidth - 10,
  },
};

const boxVariants = {
  normal: { scale: 1 },
  hover: { scale: 1.3, y: -50, transition: { delay: 0.3, type: "tween" } },
};

const infoVariants = {
  hover: { opacity: 0.7, transition: { delay: 0.3, type: "tween" } },
};

// const mockData = [1, 2, 3, 4, 5, 6];
const offset = 6;

const Home = () => {
  const history = useNavigate();
  const movieMatch: PathMatch<string> | null = useMatch("/movies/:movieId");
  console.log(movieMatch);
  const { data, isLoading } = useQuery<GetMoviesResult>({
    queryKey: ["nowPlaying"],
    queryFn: getMovies,
  });
  console.log(data);
  // console.log(test);
  // console.log(data, isLoading);
  const [index, setIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const { scrollY } = useScroll();

  const increaseIndex = () => {
    if (data) {
      if (leaving) return;
      setLeaving(true);
      const totalMovies = data?.results.length - 2;
      const maxIndex = Math.ceil(totalMovies / offset) - 1;
      setIndex((prev) => (prev === maxIndex ? 0 : prev + 1));
    }
  };

  const toggleLeaving = () => setLeaving((prev) => !prev);

  const onBoxClick = (movieId: number) => {
    history(`/movies/${movieId}`);
  };

  const onOverlayClick = () => {
    history(`/`);
  };

  const clickedMovie =
    movieMatch?.params.movieId &&
    data?.results.find((movie) => movie.id === +movieMatch.params.movieId!);
  console.log(clickedMovie);

  return (
    <Container>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Banner
            onClick={increaseIndex}
            bgPhoto={makeImagePath(data?.results[4].backdrop_path || "")}
          >
            <Title>{data?.results[4].original_title}</Title>
            <Overview>{data?.results[4].overview}</Overview>
          </Banner>
          <Slider>
            <AnimatePresence initial={false} onExitComplete={toggleLeaving}>
              <Row
                variants={rowVariants}
                key={index}
                initial="hidden"
                animate="visible"
                exit="exit"
                transition={{ type: "tween", duration: 1 }}
              >
                {/* {mockData.map((item, idx) => (
                  <Box key={idx}>{item}</Box>
                ))} */}
                {data?.results
                  .slice(2)
                  .slice(index * offset, index * offset + offset)
                  .map((movie) => (
                    <Box
                      onClick={() => onBoxClick(movie.id)}
                      key={movie.id}
                      layoutId={movie.id + ""}
                      variants={boxVariants}
                      bgPhoto={makeImagePath(movie.backdrop_path || "")}
                      initial="normal"
                      whileHover="hover"
                    >
                      {/* <img src="" alt="" /> */}
                      <Info variants={infoVariants}>
                        <h4>{movie.title}</h4>
                      </Info>
                    </Box>
                  ))}
              </Row>
            </AnimatePresence>
          </Slider>
          <AnimatePresence>
            {movieMatch ? (
              <>
                <Overlay
                  onClick={onOverlayClick}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                />
                <ModalBox
                  style={{ top: scrollY.get() + 60 }}
                  layoutId={movieMatch.params.movieId}
                >
                  {clickedMovie && (
                    <>
                      <MovieCover
                        style={{
                          backgroundImage: `linear-gradient(to top, #000, transparent),url(${makeImagePath(
                            clickedMovie.backdrop_path,
                            "w500"
                          )})`,
                        }}
                      />
                      <MovieTitle>{clickedMovie.title}</MovieTitle>
                      <MovieOverview>{clickedMovie.overview}</MovieOverview>
                    </>
                  )}
                </ModalBox>
              </>
            ) : null}
          </AnimatePresence>
        </>
      )}
    </Container>
  );
};

export default Home;
