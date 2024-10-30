export const fetchCoins = () => {
  return fetch(
    "https://raw.githubusercontent.com/Divjason/coindata/refs/heads/main/coins.json"
  ).then((response) => response.json());
};

export const fetchCoinInfo = (coinId: string | undefined) => {
  return fetch(
    `https://my-json-server.typicode.com/Divjason/coinList/coins/${coinId}`
  ).then((response) => response.json());
};

export const fetchCoinPrice = (coinId: string | undefined) => {
  return fetch(
    `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  ).then((response) => response.json());
};
export const fetchCoinhistory = (coinId: string | undefined) => {
  return fetch(
    `https://my-json-server.typicode.com/Divjason/coinprice/coinprice/${coinId}`
  ).then((response) => response.json());
};
