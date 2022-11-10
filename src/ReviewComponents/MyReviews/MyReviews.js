import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import MyReviewCard from './MyReviewCard';

const MyReviews = () => {
    const {user} = useContext(AuthContext)
    const [reviews, setReview] = useState([user])
    useTitle('My Reviews')

    useEffect(() => {
        fetch(`https://ph-server.vercel.app/reviews?email=${user?.email}`)
          .then(res => res.json())
          .then(data => {
            console.log(data)
            setReview(data)
        });
      }, [user?.email]);


      const handleDelete = (id) => {
        console.log(id);
        const proced = window.confirm("Confirm Delete?");
        if (proced) {
          fetch(`https://ph-server.vercel.app/reviews/${id}`, {
            method: "DELETE",
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data);
              if(data.deleteCount > 0){
                alert ('Review Deleted!!!')
                const remaining = reviews.filter(ord => ord._id !== id);
                setReview(remaining) 
              }
            });
        }
      };

    return (

        <div>
            <h1 className='text-3xl'>Your Reviews</h1>
            <h2 className='text-5xl text-yellow-400 text-center my-10'>You have {reviews.length} review</h2>

            {
                reviews.map(review => <MyReviewCard
                key={review._id}
                review={review}
                handleDelete={handleDelete}
                ></MyReviewCard>)
            }
        </div>
    );
};

export default MyReviews;