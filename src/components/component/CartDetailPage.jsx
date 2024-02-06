import React, { useRef } from "react";
import data from "../Products";
import "./CartDetailPage.css";
import { incNumber, decNumber } from "../../components/action/index.jsx";
import { useDispatch } from "react-redux";

import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const CartDetailPage = () => {
  const dispatch = useDispatch();
  const detail = useRef();
  const showDetails = () => {
    detail.current.style.display = "none";
  };

  const renderProduct = (product) => {
    return (
      <div
        className="pContainer"
        key={product.id}
        ref={detail}
        onMouseEnter={showDetails}
      >
        <ul>
          <li>
            <img className="productImg" src={product.imageUrl} alt="img" />
          </li>
          <li>{product.pName}</li>
          <li>{product.price}</li>
          <li>{product.discount}%</li>
          <li>
            <IconButton
              color="primary"
              aria-label="add to shopping cart"
              onClick={() => dispatch(incNumber())}
            >
              <AddShoppingCartIcon />
            </IconButton>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <>
      <div className="container">
        {data.map((product) => renderProduct(product))}
      </div>
    </>
  );
};

export default CartDetailPage;
