import React from "react";
import { Link } from "react-router-dom";
import img from "../../assets/banner/banner1.jpg";

const Banner = () => {
  return (
    <div className="hero bg-base-200 mb-4">
      <div className="hero-content flex-col lg:flex-row">
        <img
          alt="banner"
          src={img}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="">
          <h1 className="text-5xl font-bold">Discount is ON !!!</h1>
          <div className="grid grid-flow-col gap-5 text-center auto-cols-max my-2">
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 15 }}></span>
              </span>
              days
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 10 }}></span>
              </span>
              hours
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 24 }}></span>
              </span>
              min
            </div>
            <div className="flex flex-col p-2 bg-neutral rounded-box text-neutral-content">
              <span className="countdown font-mono text-5xl">
                <span style={{ "--value": 50 }}></span>
              </span>
              sec
            </div>
          </div>
          <Link to='/all'>
                <button className="btn btn-primary">Get Started</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
