import React, { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "@mui/material";

import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";

import { decNumber } from "../../components/action/index.jsx";
const ProductPage = () => {
  const dispatch = useDispatch("none");

  const hidePage = useRef();
  const showCartPage = () => {
    if (hidePage.current.style.display === "block") {
      hidePage.current.style.display = "none";
    } else {
      hidePage.current.style.display = "block";
    }
  };
  const myState = useSelector((state) => state.changeTheNumber);

  return (
    <>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon onClick={showCartPage} />
        <h6>{myState}</h6>
      </IconButton>

      <div ref={hidePage} style={{ display: "none" }}>
        <h1>Total Items: {myState}</h1>
        Product Details
        <IconButton
          color="error"
          aria-label="remove from shopping cart"
          onClick={() => dispatch(decNumber())}
        >
          Remove: <RemoveShoppingCartIcon />
        </IconButton>
      </div>
    </>
  );
};

export default ProductPage;
