import React from "react";
import { Link } from "react-router-dom";
import Products from "./Product";

const Card = () => {
  const items = Products.map((item) => {
    const { id, title, description, image } = item;
    return (
      <div key={id} className="card">
        <img src={image} alt=""></img>
        <h3>{title}</h3>
        <p>
          {description.slice(0, 25)}{" "}
          <Link to={`/product/${id}`}>Know More</Link>{" "}
        </p>
      </div>
    );
  });

  return (
    <>
      <section className="card-section">{items}</section>
    </>
  );
};

export default Card;
