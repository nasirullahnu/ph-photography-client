import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";

const ReviewArea = ({ serviceDetails }) => {
  const { _id, title, img, price, ratings, description, orders, service_id } =
    serviceDetails;
  const { user } = useContext(AuthContext);
  //   console.log(user.email , user.displayName, user.uid)

  const handleReview = (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;
    console.log(comment);
    form.reset();

    const review = {
      serviceId: _id,
      serviceTitle: title,
      serviceImg: img,
      servicePrice: price,
      reviewerName: user.displayName,
      reviewerImg: user.photoURL,
      reviewerEmail: user.email,
      reviewerUid : user.uid
    };

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("order placed succesfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };

  return (
    <div>
      <form onSubmit={handleReview}>
        <input
          type="text"
          name="comment"
          placeholder="Type here"
          className="input input-bordered input-warning w-full max-w-xs mr-2"
        />
        {user?.uid ? (
          <input
            className="btn btn-outline btn-accent"
            type="submit"
            value="Comment"
          />
        ) : (
          <p>
            Please Log In first to add a review{" "}
            <Link to="/login" className="font-bold text-yellow-400">
              Login
            </Link>
          </p>
        )}
      </form>
    </div>
  );
};

export default ReviewArea;
