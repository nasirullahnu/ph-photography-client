import React from "react";

const Appoint = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    alert("order confirmed");
    form.reset();
  };

  return (
    <div className="hero min-h-screen bg-base-200 mb-10">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center">
          <h1 className="text-5xl font-bold">Book Shift</h1>
          <p className="py-6">
            Confirm This BOX for take a time for Photo Shoots.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <input
                type="text"
                placeholder="phone"
                className="input input-bordered"
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Phone</span>
              </label>
              <select className="select select-secondary w-full max-w-xs">
                <option disabled selected>
                  Pick your favorite Service
                </option>
                <option>Adventure Wild Photography</option>
                <option>Sweet Wedding Photography</option>
                <option>Awesome Still Photography</option>
                <option>Iconic Fashion Photography</option>
                <option>Best Architectur Photography</option>
                <option>Cool Portrait Photography</option>
                <option>Journalism Photography</option>
              </select>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Confirm</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Appoint;
