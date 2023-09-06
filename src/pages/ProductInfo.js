import Products from "../components/Product";
import { useParams } from "react-router-dom";

import React from "react";

const ProductInfo = () => {
  let { id } = useParams();
  console.log(id);
  const item = Products.find((product) => String(product.id) === id);
  console.log(item);

  return (
    <>
      <section key={id} className="details">
        <img src={item.image} alt=""></img>
        <div>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>
      </section>
    </>
  );
};

export default ProductInfo;
