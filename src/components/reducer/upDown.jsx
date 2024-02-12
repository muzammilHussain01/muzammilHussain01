const initialState = {
  count: 0,
  info: {
    pName: "pName",
    price: 0,
    discount: 0,
  },
};

const changeTheNumber = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        ...state,
        count: state.count - 1,
      };
    case "productInfo":
      return {
        ...state,
        info: action.payload,
      };
    default:
      return state;
  }
};

export default changeTheNumber;
