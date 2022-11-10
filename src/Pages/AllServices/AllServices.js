import React, { useEffect, useState } from "react";
import useTitle from "../../hooks/useTitle";
import AllServicesCard from "./AllServicesCard";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  useTitle("All Services");

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => setAllServices(data.survices));
  }, []);

  return (
    <div>
      <h2 className="text-4xl font-semibold text-yellow-400 px-8">
        Chose A Service and Enjoy !!
      </h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center">
        {allServices.map((service) => (
          <AllServicesCard
            key={service._id}
            service={service}
          ></AllServicesCard>
        ))}
      </div>
      <div className="my-8 flex justify-center">
        <div className="btn-group ">
          <button className="btn btn-active">1</button>
          <button className="btn">2</button>
          <button className="btn">3</button>
          <button className="btn">4</button>
          <button className="btn">5</button>
          <button className="btn">6</button>
          <button className="btn">7</button>
          <button className="btn">8</button>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
