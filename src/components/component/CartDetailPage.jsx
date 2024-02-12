import React from "react";
import data from "../Products";
import "./CartDetailPage.css";
import Button from "@mui/material/Button";
import { incNumber, decNumber, productInfo } from "../action/index";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CartDetailPage = ({ product }) => {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();

  const renderProduct = (product) => {
    return (
      <div className="pContainer" key={product.id}>
        <ul>
          <li>
            <img className="productImg" src={product.imageUrl} alt="img" />
          </li>
          <li>{product.pName}</li>
          <li>Price: {product.price}$</li>
          <li>Discount: {product.discount}%</li>
          <li>
            <Button
              variant="contained"
              color="success"
              onClick={() => {
                dispatch(incNumber());
                dispatch(
                  productInfo(product.pName, product.price, product.discount)
                );
              }}
            >
              Add To Cart
            </Button>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <IconButton
        className="cart-add-btn"
        color="primary"
        aria-label="add to shopping cart"
      >
        <Link to="/ProductPage">
          <AddShoppingCartIcon />
        </Link>
        {myState.count}
      </IconButton>
      <h1>Smart Phone</h1>
      <div className="container">
        {data.map((product) => renderProduct(product))}
      </div>
    </>
  );
};

export default CartDetailPage;
