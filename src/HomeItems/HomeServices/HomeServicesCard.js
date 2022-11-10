import React from "react";
import { FaStar } from "react-icons/fa";
import { PhotoProvider, PhotoView } from "react-photo-view";
import 'react-photo-view/dist/react-photo-view.css';
import { Link } from "react-router-dom";

const HomeServicesCard = ({ service }) => {
  const { _id, title, img, price, ratings, description } = service;

  return (
    <div className="card w-80 bg-sky-800 shadow-xl my-10">
      <PhotoProvider>
        <PhotoView src={img}>
          <figure>
            <img src={img} style={{ objectFit: "cover" }} alt="" />{" "}
          </figure>
        </PhotoView>
      </PhotoProvider>

      {/* <figure>
        <img src={img} alt="Shoes" />
      </figure> */}
      <div className="card-body">
        <h2 className="card-title text-yellow-400">
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
          <div>
            <Link to={`/details/${_id}`}>
              <button className="btn btn-outline btn-info">Details</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServicesCard;
