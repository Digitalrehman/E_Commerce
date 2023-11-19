import React, { useEffect } from "react";
import Item from "../Item Box/Item";
import Loader from "../Loader/Loader";
import "./card.css";
import { useDispatch, useSelector } from "react-redux";
import STATUSES from "../../Store/status";
import { fetchproducts } from "../../Store/Slices";

const Card = () => {
  let dispatch = useDispatch();
  let { datas, status } = useSelector((state) => state.getProductReducer);
  useEffect(() => {
    dispatch(fetchproducts());
  }, []);

  return (
    <>
      {status === STATUSES.GET_PRODUCTS ? (
        <Loader />
      ) : (
        <div className="container-fluid">
          <div className="row align-items-center justify-content-center">
            <div className="mt-5 mb-3">
              <h1 className="fw-bold text-center">Shopping Store</h1>
            </div>
            {datas.map((item, index) => (
              <div className="col-3 my-3" key={index}>
                <Item item={item} />
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
