let initialState = { productList: [] };
const productReducer = (state = initialState, action) => {
  const { type, payload } = action;
  // console.log(type, payload);
  switch (type) {
    case "GET_PRODUCT_SUCCESS":
      return { ...state, productList: payload.data };
    default:
      return { ...state };
  }
};

export default productReducer;
