import React from "react";
import Item from "./Item";
import { products } from "../products/products";

function Items() {
  return (
    <div className="item-description">
      <Item products={products} />
    </div>
  );
}

export default Items;
