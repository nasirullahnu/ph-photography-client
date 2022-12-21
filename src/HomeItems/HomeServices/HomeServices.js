import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider/AuthProvider";
import HomeServicesCard from "./HomeServicesCard";

const HomeServices = () => {
  const [services, setServices] = useState([]);
  const {loading} = useContext(AuthContext)

  useEffect(() => {
    fetch("https://ph-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data.serviceHome));
  }, []);

  if(loading){
    return <h1 className="text-2xl text-yellow-400">Loading.....</h1>
  }

  return (
    <div>
      <h2 className="text-4xl font-semibold text-yellow-400 px-8">My Photography Services</h2>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center">
        {services.map((service) => (
          <HomeServicesCard
            key={service._id}
            service={service}
          ></HomeServicesCard>
        ))}
      </div>
      <div className="flex justify-end m-4">
        <Link to='/all'>
            <button className="btn btn-outline">See all</button>
        </Link>
      </div>
    </div>
  );
};

export default HomeServices;
