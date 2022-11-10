import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import AllServicesCard from './AllServicesCard';

const AllServices = () => {
    const [allServices, setAllServices] = useState([])
    useTitle('All Services')

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setAllServices(data.survices))
    },[])

    return (
        <div>
            <h2 className='text-4xl font-semibold text-yellow-400 px-8'>Chose A Service and Enjoy !!</h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 justify-items-center">
                {
                    allServices.map(service => <AllServicesCard 
                    key={service._id}
                    service={service}
                    ></AllServicesCard>)
                }
            </div>
        </div>
    );
};

export default AllServices;