import React from "react";
import carousel1 from "../../assets/IMG/carousel1.jpg";
import carousel2 from "../../assets/IMG/carousel2.jpg";
import carousel3 from "../../assets/IMG/carousel3.jpg";

const Carousel = () => {
  return (
    <>
      <div className="container my-4">
        <div className="row">
          <div className="col-12">
            <div className="text-center  my-5">
              <h1 className="fw-bold text-decoration-underline">Our Facilities</h1>
            </div>
          <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={carousel1} className="d-block w-100 rounded-2" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={carousel2} className="d-block w-100 rounded-2" alt="..." />
    </div>
    <div className="carousel-item">
      <img src={carousel3} className="d-block w-100 rounded-2" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousel;
