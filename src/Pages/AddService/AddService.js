import React from "react";
import useTitle from "../../hooks/useTitle";

const AddService = () => {
    useTitle('Add Services')
    const handleAdd = event => {
        event.preventDefault()
        const form = event.target
        const title = form.title.value
        const price = form.price.value 
        const ratings = form.ratings.value
        const orders = form.orders.value
        const name = form.name.value
        const age = form.age.value
        const yourratings = form.yourratings.value 
        const experience = form.experience.value
        const description = form.description.value
        const photoURL = form.photoURL.value
        const photoURL2 = form.photoURL2.value
        // console.log(title, price, ratings, orders, name, age, yourratings, experience, description, photoURL, photoURL2)

        const services = {
            title : title,
            img : photoURL,
            price : price,
            ratings : ratings,
            orders : orders,
            photographer : {
                name : name,
                age : age,
                ratings : yourratings,
                experience : experience,
                img : photoURL2
            },
            description : description
        }
        // console.log(services)

        fetch("http://localhost:5000/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(services),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          alert("service added succesfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));


    }
  return (
    <div>
      <h2 className="text-2xl">You can add sevice by using this form</h2>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Add Service Infos</h1>
            <p className="py-6">
              You have to fuifill all the field
            </p>
          </div>
          <div className="card flex-shrink-0  w-full shadow-2xl bg-base-100">
            <form onSubmit={handleAdd} className="card-body">

                {/* service title  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="title"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* service price  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  name="price"
                  placeholder="Type price number only"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* service ratings  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Ratings</span>
                </label>
                <input
                  type="number"
                  name="ratings"
                  placeholder="type service rating number only"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* service orders  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Orders</span>
                </label>
                <input
                  type="number"
                  name="orders"
                  placeholder="Type number of orders on this service"
                  className="input input-bordered"
                  required
                />
              </div>
              {/* photographer name  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Type Service Provider Name"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* photographer age  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Age</span>
                </label>
                <input
                  type="number"
                  name="age"
                  placeholder="Type Service Provider Age Number"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* photographer ratings  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Ragings</span>
                </label>
                <input
                  type="number"
                  name="yourratings"
                  placeholder="Type your ratings Number"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* photographer experience  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Experience</span>
                </label>
                <input
                  type="number"
                  name="experience"
                  placeholder="How many yrs of experience you have"
                  className="input input-bordered"
                  required
                />
              </div>


              {/* Service Photo  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Add This Service Photo</span>
                </label>
                <input
                  type="photoURL"
                  name="photoURL"
                  placeholder="photo url of service"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* your Photo  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Add Your Photo</span>
                </label>
                <input
                  type="photoURL"
                  name="photoURL2"
                  placeholder="photo url of yours"
                  className="input input-bordered"
                  required
                />
              </div>

              {/* service description  */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Add a Desctiption</span>
                </label>
                <textarea className="textarea textarea-warning h-16" name="description" placeholder="Description should be minimum 100 character" required></textarea>
              </div>


              <div className="form-control mt-6">
                <button className="btn btn-primary">Add to Database</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddService;
