import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllServicesCard = ({ service }) => {
  const { _id, title, img, price, ratings, description } = service;
  return (
    <div className="card w-80 bg-sky-800 shadow-xl my-10">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">
            {ratings} <FaStar></FaStar>
          </div>
        </h2>
        <p>{`${description.slice(0, 100)}...`}</p>
        <hr />
        <div className="card-actions justify-between">
          <div>
            <button className="btn">{`$ ${price}`}</button>
          </div>
          <Link to={`/details/${_id}`}>
            <button className="btn btn-outline btn-info">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AllServicesCard;
