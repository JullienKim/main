// import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useQuery } from "@tanstack/react-query";
import { fetchCoins } from "../api";
// import { StringLiteral } from "typescript";
// import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { isDarkAtom } from "../atoms";
import { useSetRecoilState } from "recoil";

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Header = styled.header`
  font-size: 32px;
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.accentColor};
`;

const CoinList = styled.ul`
  width: 740px;
`;

const Coin = styled.li`
  background: ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.bgColor};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 10px;
  font-size: 20px;
  cursor: pointer;
  a {
    display: flex;
    align-items: center;
    color: inherit;
    transition: color 0.3s;
    margin: 0 10px;
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const Loader = styled.span`
  color: ${(props) => props.theme.accentColor};
  font-size: 22px;
`;

const Img = styled.img`
  width: 35px;
  height: auto;
  margin: 0 10px;
`;

const Button = styled.button`
  background: ${(props) => props.theme.accentColor};
  color: ${(props) => props.theme.bgColor};
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

// const coins = [
//   {
//     id: "btc-bitcoin",
//     name: "Bitcoin",
//     symbol: "BTC",
//     rank: 1,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "eth-ethereum",
//     name: "Ethereum",
//     symbol: "ETH",
//     rank: 2,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
//   {
//     id: "hex-hex",
//     name: "Hex",
//     symbol: "Hex",
//     rank: 1,
//     is_new: false,
//     is_active: true,
//     type: "coin",
//   },
// ];

export interface CoinInterface {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

const Coins = () => {
  // const [coins, setCoins] = useState<CoinInterface[]>([]);
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   (async () => {
  //     const response = await fetch(
  //       "https://raw.githubusercontent.com/Divjason/coindata/refs/heads/main/coins.json"
  //     );
  //     const json = await response.json();
  //     // console.log(json);
  //     setCoins(json.slice(0, 101));
  //   })();
  //   // data();
  // }, []);
  // const params = useParams();
  // console.log(params);
  const { isLoading, data } = useQuery<CoinInterface[]>({
    queryKey: ["allCoins"],
    queryFn: fetchCoins,
  });
  // console.log(isLoading, data);
  const setterFn = useSetRecoilState(isDarkAtom);
  return (
    <Container>
      <Helmet>
        <Title>Coin List</Title>
      </Helmet>
      <Header>
        <Title>Coin List</Title>
        <Button onClick={() => setterFn((prev) => !prev)}>Mode</Button>
      </Header>
      {isLoading ? (
        <Loader>"Loading..."</Loader>
      ) : (
        <CoinList>
          {data?.slice(0, 100).map((coin) => (
            // <Coin key={coin.id}>{coin.name} &rarr</Coin>
            <Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={`${coin.name}`}>
                🎖Rank: {coin.rank}
                <Img
                  src={`https://cryptoicon-api.pages.dev/api/icon/${coin.symbol.toLowerCase()}`}
                />
                {coin.name} ({coin.symbol}) &rarr; {coin.name} Information
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
};

export default Coins;
