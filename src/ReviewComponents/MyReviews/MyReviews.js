import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReview] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setReview(data)
        });
      }, [user?.email]);

    return (

        <div>
            <h1 className='text-4xl'>Your Reviews</h1>
            <h2>You added {reviews.length} review</h2>
            {
                reviews.map(review => <MyReviewCard
                key={review._id}
                review={review}
                ></MyReviewCard>)
            }
        </div>
    );
};

export default MyReviews;