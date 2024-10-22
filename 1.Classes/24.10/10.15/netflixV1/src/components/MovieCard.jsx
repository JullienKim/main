import React from "react";
import { useSelector } from "react-redux";
import { Badge } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 300px;
  height: 200px;
  /* border: 1px solid #f00; */
  position: relative;
  cursor: pointer;
`;

// const Overlay = styled.div`
//   width: 100%;
//   height: 100%;
//   background: rgba(0, 0, 0, 0.6);
//   position: absolute;
//   top: 0;
//   left: 0;
//   z-index: 3;
//   border: 1px solid #f00;
// `;

const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.h1`
  width: 100%;
  position: absolute;
  left: 10px;
  top: 22px;
  font-size: 20px;
  /* border: 1px solid #f00; */
`;

const Genre = styled.div`
  display: flex;
  gap: 6px;
`;

const InfoGroup = styled.div`
  width: 100%;
  position: absolute;
  left: 10px;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
`;

const Vote = styled.span``;

const Adult = styled.div`
  position: absolute;
  /* width: 100%; */
  top: 10px;
  right: 10px;
  background: rgba(220, 20, 60, 0.8);
  padding: 10px;
  width: 50px;
  height: 50px;
  line-height: 28px;
  border-radius: 50%;
  font-size: 14px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.7);
  /* transform: translateX(260px); */
`;

const MovieCard = ({ item }) => {
  // console.log(item.poster_path);
  const { genreList } = useSelector((state) => state.movie);
  console.log(genreList);
  return (
    <Wrapper>
      {/* <Overlay> */}
      <Img
        src={`https://media.themoviedb.org/t/p/original/${item.backdrop_path}`}
        // alt="thumbnail"
      />
      <Title>{item.title}</Title>
      <Adult>{item.adult ? "성인" : "전체"}</Adult>
      <InfoGroup>
        <Genre>
          {item.genre_ids.map((id, index) => (
            <Badge key={index} className="badge">
              {genreList.find((item) => item.id === id).name}
            </Badge>
          ))}
        </Genre>
        <Vote>{item.vote_average}</Vote>
      </InfoGroup>
      {/* </Overlay> */}
    </Wrapper>
  );
};

export default MovieCard;
