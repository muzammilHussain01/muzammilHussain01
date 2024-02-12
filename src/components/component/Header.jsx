import React, { useRef } from "react";
import "./Header.css";

const Header = () => {
  const header = useRef();
  const handelButton = () => {
    if (header.current.style.display === "block") {
      header.current.style.display = "none";
    } else {
      header.current.style.display = "block";
    }
  };

  return (
    <>
      <div className="btndiv">
        <button onClick={handelButton}>= </button>
      </div>
      <div className="hederContainer" style={{ display: "none" }} ref={header}>
        <ul>
          <li>Home</li>
          <li>About-Us</li>
          <li>Products</li>
          <li>Search</li>
          <li>Contact-Us</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
