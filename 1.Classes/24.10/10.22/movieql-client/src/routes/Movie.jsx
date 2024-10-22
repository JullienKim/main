import React from "react";
import { useParams } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background: linear-gradient(-45deg, #d754ab, #fd723a);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ItemGroup = styled.div`
  width: 50vw;
  display: flex;
  gap: 10px;
  /* border: 1px solid #f00; */
`;

const Column = styled.div`
  flex: 1;
  text-align: center;
`;

const Loading = styled.div`
  font-size: 18px;
  width: 100%;
  text-align: center;
  margin-top: 20vh;
`;

const Title = styled.h1`
  font-size: 60px;
  margin-bottom: 15px;
`;

const Subtitle = styled.h4`
  font-size: 32px;
  margin: 15px;
`;

const Button = styled.button`
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  cursor: pointer;
`;

const Description = styled.p`
  font-size: 22px;
  line-height: 30px;
`;

const Image = styled.div`
  flex: 1;
  width: 100%;
  /* height: 50vh; */
  height: 700px;
  background: url(${(props) => props.bg}) center top/cover no-repeat;
  border: 1px solid #f00;
`;

const GET_MOVIE = gql`
  query getMovie($movieId: string!) {
    movie(id: $movieId) {
      id
      title
      rating
      medium_cover_image
      isLiked @client
    }
  }
`;

const Movie = () => {
  // const params = useParams();
  // console.log(params);
  const { id } = useParams();
  const { data, loading, client } = useQuery(GET_MOVIE, {
    variables: {
      movieId: id,
    },
  });
  const onClick = () => {
    cache.writeFragment({
      id: `Movie: ${id}`,
      fragment: gql`
        fragment MovieFragment on Movie {
          title
          isLiked
        }
      `,
      data: {
        title: "신기하니?",
        isLiked: true,
      },
    });
  };

  if (loading) {
    return <Loading>Loading...</Loading>;
  }
  return (
    <Container>
      <ItemGroup>
        <Column>
          <Title>{data.movie.title}</Title>
          <Subtitle>⭐{data.movie.rating}</Subtitle>
          <Button onClick={onClick}>
            💘{data.movie.isLiked ? "Dislike" : "Like"}
          </Button>
          <Description>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
            corporis nulla, aperiam facilis aliquam magni ea dignissimos quis
            magnam totam in? Praesentium qui sequi tempora voluptatibus modi
            consequatur labore excepturi. Voluptates amet explicabo, ad quas
            sint quod perferendis assumenda animi voluptatem! Sed at, nemo
            molestias ducimus ab unde quis dicta modi? Accusamus maxime unde
            nemo dolore culpa vel, commodi placeat?
          </Description>
        </Column>
        <Image bg={data.movie.medium_cover_image} />
      </ItemGroup>
    </Container>
  );
};

export default Movie;
