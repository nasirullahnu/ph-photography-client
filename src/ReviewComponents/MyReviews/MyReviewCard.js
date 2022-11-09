import React from "react";

const MyReviewCard = ({ review }) => {
  const { serviceTitle, comment, reviewerImg, reviewerName } = review;
  return (
    <div className="grid grid-cols-3 p-6 my-1 border-solid border-2 border-sky-500">
      <div className="w-3/12">
        <div className="avatar online mr-8">
          <div className="w-12 rounded-full">
            <img className="max-h-12" alt="h" src={reviewerImg} />
          </div>
        </div>
        <div>
          <p>{reviewerName}</p>
        </div>
      </div>

      <div className="w-5/12">
        <p className="text-white ">{serviceTitle}</p>
        <p className="text-yellow-400 font-bold">{comment}</p>
      </div>

      <div className="w-3/12 flex">
        <button className="btn btn-ghost btn-xs">edit</button>
        <button className="btn btn-ghost btn-xs">delete</button>
      </div>
    </div>
  );
};

export default MyReviewCard;
