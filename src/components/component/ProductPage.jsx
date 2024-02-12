import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { decNumber } from "../../components/action/index.jsx";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import "./ProductPage.css";

const ProductPage = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  return (
    <>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
        <h6>{myState.count}</h6>
      </IconButton>

      <div className="cartContainer">
        <h1>Total Items: {myState.count}</h1>
        <h1>Product Details</h1>
        <p>Product Name: {myState.info.pName}</p>

        <p>Price: {myState.info.price * myState.count}$</p>
        <p>Discount: {myState.info.discount * myState.count}%</p>
        <p>
          Discounted Price:{" "}
          {myState.info.price -
            (myState.info.discount * myState.info.price) / 100}
          $
        </p>

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
