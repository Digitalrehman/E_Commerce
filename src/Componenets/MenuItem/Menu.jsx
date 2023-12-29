import React from "react";
import { useDispatch, useSelector } from "react-redux";
import "./card.css";
import { removeProduct } from "../../Store/Slices/Card";

const Menu = () => {
  let dispatch = useDispatch();
  let { CardProduct } = useSelector((state) => state.CardItemProducts);
  const removeHandler = (item) => {
    dispatch(removeProduct(item));
  };
  return (
    <>
      <div className="card-contrainer">
        {CardProduct.map((item, index) => (
          <div className="card bg-light " key={index}>
            <img
              src={item.strCategoryThumb}
              className="card-img-top"
              alt="..."
              style={{ width: "100%", objectFit: "cover" }}
            />
            <div className="card-body">
              <h5 className="card-title">{item.strCategory}</h5>
              <p className="card-text text-dark">
                {item.strCategoryDescription}
              </p>
              <h5 className="card-title">Price : 30</h5>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => removeHandler(item.idCategory)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Menu;
