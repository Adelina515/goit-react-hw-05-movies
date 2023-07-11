import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'services/ApiAxios';

const Details = () => {
  const [movieId] = useParams();
  // const [loading, setLoading] = useState(false);
  // const [moveDetails, setMoveDetails] = useState(null);
  // const location = useLocation();

  // useEffect(() => {
  //   const fetchDetails = () => {
  //     setLoading(true);
  //     fetchMoviesDetails(movieId)
  //       .then(movie => {
  //         setMoveDetails(movie);
  //       })
  //       .catch(error => {
  //         console.log(error);
  //       })
  //       .finally(() => {
  //         setLoading(false);
  //       });
  //   };

  //   fetchDetails();
  // }, [movieId]);
};
export default Details;
