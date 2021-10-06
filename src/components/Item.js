import React from "react";

function Item({ products }) {
  return (
    <div>
      <img
        className="sub-image"
        src={require("../assets/mobile/mobileVer1.png").default}
        alt="packet"
      />
      <div className="product-name">{products.productName.toUpperCase()}</div>
      <div className="product-type">Type: {products.productType}</div>
      <ul className="tags">
        {products.targetAudience.map((tag, index) => {
          return <li key={index}>{tag[0].toUpperCase() + tag.substring(1)}</li>;
        })}
      </ul>
      <div className="product-information">Product information</div>
      <div className="product-description">{products.productInformation}</div>
      <div className="price">{products.price} kr./md.</div>
      <div className="button-container">
        <button className="do-the-test" type="button">
          Do the test
        </button>
        <button className="add-to-cart" type="button">
          Add to cart
        </button>
      </div>
      <ul className="badges">
        {Object.keys(products.badges).map((key, index) => {
          console.log(products.badges[key].title);
          return (
            <li key={index}>
              <img
                src={
                  require(`../assets/icons/${products.badges[key].title}.png`)
                    .default
                }
                alt={products.badges[key].title}
              />
              <div className="title-name">
                {products.badges[key].title[0].toUpperCase() +
                  products.badges[key].title.substring(1)}
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Item;
