const getProduct = (searchQuery) => {
  return async (dispatch) => {
    const url = `https://my-json-server.typicode.com/JullienKim/musinsamall/products?q=${searchQuery}`;
    const response = await fetch(url);
    const data = await response.json();
    dispatch({type: "GET_PRODUCT_SUCCESS", payload:{data}})
    // console.log(data);
  };
};

export const productAction = { getProduct };
