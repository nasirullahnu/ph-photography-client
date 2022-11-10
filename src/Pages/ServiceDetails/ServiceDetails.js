import { FaStar } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
import ReviewArea from "../../ReviewComponents/ReviewArea/ReviewArea";
import ServiceReview from "../../ReviewComponents/ServiceReview/ServiceReview";

const ServiceDetails = () => {
  useTitle("Details");

  const {
    _id,
    title,
    img,
    price,
    ratings,
    description,
    orders,
    photographer,
    service_id,
  } = useLoaderData();
  console.log(_id);
  const serviceDetails = {
    _id,
    title,
    img,
    price,
    ratings,
    description,
    orders,
    service_id,
  };

  return (
    <div>
      <div className="flex justify-center">
        <div>
          <h1 className="text-4xl my-6">{title}</h1>
        </div>
      </div>
      <div className="hero bg-base-200">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={img}
            alt="service banner"
            className="max-w-md rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-2xl font-bold">{title}</h1>
            <p className="py-6">{description}</p>
            <div className="align-items-center">
              <Link to='/all'>
                <button className="btn mr-2">Back</button>
              </Link>
              <button className="btn mr-2">Book Now</button>
              <div className="badge badge-secondary mr-2">
                {ratings} <FaStar></FaStar>
              </div>
              <div className="badge badge-secondary mr-2">{`$ ${price}`}</div>
              <div className="badge badge-secondary mr-2">{`orders : ${orders}`}</div>

              {/* author modal  */}
              {/* modal button  */}
              <label htmlFor="my-modal-3" className="btn">
                See Photographer
              </label>
              {/* modal box  */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal justify-items-center">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">{title}</h3>
                  <div className="flex justify-center align-items-center my-4">
                    {/* author image  */}
                    <div className="avatar mx-2">
                      <div className="w-24 rounded">
                        <img src={photographer.img} alt="author" />
                      </div>
                    </div>
                    {/* author info  */}
                    <div>
                      <p>{`Name : ${photographer.name}`}</p>
                      <p>{`Age : ${photographer.age}`}</p>
                      <p>{`Experience : ${photographer.experience} yrs`}</p>
                      <div className="badge badge-secondary">
                        {ratings} <FaStar></FaStar>
                      </div>
                    </div>
                  </div>

                  {/* author social icons */}
                  {/* author social icons */}
                  <div className="grid grid-flow-col gap-4">
                    <a href="https://twitter.com/Mohamma71420299">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                      </svg>
                    </a>
                    <a href="https://www.youtube.com/c/JhankarMahbub">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                      </svg>
                    </a>
                    <a href="https://www.facebook.com/mohammadnasir.ullah.735/">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="fill-current"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* reviews  */}
      {/* reviews  */}
      {/* reviews  */}
      {/* reviews  */}
      <div className="my-6">
        <h1 className="text-3xl font-semibold text-yellow-400 px-6">
          Customer Reviews
        </h1>
        <ServiceReview serviceDetails={serviceDetails}></ServiceReview>
      </div>

      {/* review text area  */}
      {/* review text area  */}
      {/* review text area  */}
      <div className="my-6">
        <h2 className="px-6">Add a Comment</h2>
        <ReviewArea serviceDetails={serviceDetails}></ReviewArea>
      </div>
    </div>
  );
};

export default ServiceDetails;
