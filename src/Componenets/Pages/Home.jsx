import React from "react";
import Card from "../Card Container/Card";
import Form from "../Form/Form";
import Carousel from "../Carousel/Carousel";
import banner from "../../assets/IMG/banner.jpg";
import Progress from "../Progress/Progress";
import "./home.css"

const Home = () => {
  return (
    <>
      <div className="body">
        <img src={banner} alt="" />
        <div className="heading">
          <h1>
            <span>Wecome!</span> to our Store
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            blanditiis, vitae libero fuga sequi assumenda facere sunt soluta sit
            aliquid praesentium in expedita a delectus iusto iure,
            exercitationem aliquam asperiores?
          </p>
          <button type="button" className="btn btn-danger m-auto">
            Order
          </button>
        </div>
      </div>
      <Card />
      <Carousel />
      <Progress />
      <Form />
    </>
  );
};

export default Home;
