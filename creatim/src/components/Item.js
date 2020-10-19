import React from "react";
import slika1 from "../images/bg1.jpg";

import "../style/Item.css";

const Item = ({ item: { image, title, text } }) => {
  return (
    <div className="item">
      <img src={image} alt="slika" />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  );
};

export default Item;
