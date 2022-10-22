import React from "react";
import "./Service.css";

const Service = ({ service }) => {
  const { name, img, detail } = service;
  return (
    <div className="col service ">
      <div className="row">
        <div className="col-lg-4 img">
          <img src={img} alt="" />
        </div>
        <div className=" col-lg-8">
          <div className="mx-2 ms-4 mt-3">
          <h2 className="mt-3">{name}</h2>
          <p>{detail}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
