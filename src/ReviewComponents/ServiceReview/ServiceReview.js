import React from "react";
import { useEffect, useState } from "react";

const ServiceReview = ({ serviceDetails }) => {
  const [reviews, setReviews] = useState([]);
  const { _id, title, img, price, ratings, description, orders, service_id } =
    serviceDetails;

  useEffect(() => {
    fetch(`https://ph-server.vercel.app/reviews?_id=${_id}`)
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, [_id]);

  return (
    <div className="grid grid-cols-3 p-6 my-1 border-solid border-2 border-sky-500">
      <div className="w-3/12 flex">
        <div className="avatar online mr-8">
          <div className="w-12 rounded-full">
            <img alt="h" src="https://placeimg.com/192/192/people" />
          </div>
        </div>
        <div>
          <p>Nasir Ullah</p>
        </div>
      </div>

      <div className="w-6/12">
        <p className="text-yellow-400">{title}</p>
      </div>

      <div className="w-5/12 flex">
        <button className="btn btn-ghost btn-xs">edit</button>
        <button className="btn btn-ghost btn-xs">delete</button>
      </div>
    </div>
  );
};

export default ServiceReview;
