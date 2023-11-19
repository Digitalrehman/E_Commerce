import React from "react";
import "./Item.css"

function getShortDescription(description, wordCount) {
  const words = description.split(" ");
  const shortDescription = words.slice(0, wordCount).join(" ");
  return shortDescription;
}

const Item = (props) => {
  const { image, title, description, price } = props.item;
  const shortDescription = getShortDescription(description, 20);
  return (
    <div className="card bg-light">
      <img
        src={image}
        className="card-img-top"
        alt="..."
        style={{height: "20rem", width: "100%", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text-dark">{shortDescription}</p>
        <h5 className="card-title">Price : {price}</h5>
        <div className="btn-group mb-2 mb-md-0 btn-block">
          <button type="button" className="btn btn-danger">
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
