import React from "react";
import "./Item.css";

function getShortDescription(strCategoryDescription, wordCount) {
  const words = strCategoryDescription.split(" ");
  const shortDescription = words.slice(0, wordCount).join(" ");
  return shortDescription;
}

const Item = (props) => {
  const { strCategory, strCategoryDescription, strCategoryThumb } = props.item;
  const shortDescription = getShortDescription(strCategoryDescription, 10);
  return (
    <div className="card-container">
      <div className="card bg-light">
        <img
          src={strCategoryThumb}
          className="card-img-top"
          alt="..."
          style={{  width: "100%", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{strCategory}</h5>
          <p className="card-text text-dark">{shortDescription}</p>
          <h5 className="card-title">Price : 30</h5>
          <button
            className="btn btn-outline-danger"
            onClick={props.Cardhandler}
          >
            Add Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
