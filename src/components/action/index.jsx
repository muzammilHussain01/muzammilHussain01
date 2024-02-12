const incNumber = () => {
  return {
    type: "INCREMENT",
  };
};

const decNumber = () => {
  return {
    type: "DECREMENT",
  };
};

const productInfo = (pName, price, discount) => {
  return {
    type: "productInfo",
    payload: {
      pName: pName,
      price: price,
      discount: discount,
    },
  };
};

export { incNumber, decNumber, productInfo };
