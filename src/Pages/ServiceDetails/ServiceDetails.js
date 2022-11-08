import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ServiceDetails = () => {
    const {_id, title, img, price, ratings, description, orders, photographer} = useLoaderData();
    return (
        <div>
            <h1 className='text-4xl'>{title}</h1>
        </div>
    );
};

export default ServiceDetails;