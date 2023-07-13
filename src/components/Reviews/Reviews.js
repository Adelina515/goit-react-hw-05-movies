import Loader from 'components/loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesReviews } from 'services/ApiAxios';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = () => {
      setLoading(true);
      fetchMoviesReviews(movieId)
        .then(({ results }) => setReviews(results))
        .catch(error => console.log(error))
        .finally(setLoading(false));
    };
    fetchReviews();
  }, [movieId]);
  return (
    <div>
      {loading && <Loader />}
      {reviews.length === 0 && <p>Sorry haven't reviews for this movie</p>}
      <ul>
        {reviews.length > 0 &&
          reviews.map(review => (
            <li>
              <h3>{review.author}</h3>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Reviews;
