import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import useTitle from "../../hooks/useTitle";
import AllServicesCard from "./AllServicesCard";

const AllServices = () => {
  const [allServices, setAllServices] = useState([]);
  useTitle("All Services");
  const {loading} = useContext(AuthContext)

  useEffect(() => {
    fetch("https://ph-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setAllServices(data.survices));
  }, []);

  if(loading){
    return <h1 className="text-2xl text-yellow-400">Loading.....</h1>
  }

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
          <button className="btn btn-active text-yellow-400">1</button>
          <button className="btn text-yellow-400">2</button>
          <button className="btn text-yellow-400">3</button>
          <button className="btn text-yellow-400">4</button>
          <button className="btn text-yellow-400">5</button>
          <button className="btn text-yellow-400">6</button>
          <button className="btn text-yellow-400">7</button>
          <button className="btn text-yellow-400">8</button>
        </div>
      </div>
    </div>
  );
};

export default AllServices;
