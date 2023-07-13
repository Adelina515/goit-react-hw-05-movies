import Loader from 'components/loader/Loader';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMoviesCredits } from 'services/ApiAxios';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCasts = () => {
      setLoading(true);
      fetchMoviesCredits(movieId)
        .then(({ cast }) => setCast(cast))
        .catch(error => console.log(error))
        .finally(setLoading(false));
    };

    fetchCasts();
  }, [movieId]);
  console.log(cast);
  return (
    <div>
      {loading && <Loader />}
      {cast.length === 0 && <p>Sorry cast list not found</p>}{' '}
      <ul>
        {' '}
        {cast.length > 0 &&
          cast.map(item => (
            <li key={item.id}>
              <img
                width=" 200px"
                alt={item.name}
                src={
                  item.profile_path
                    ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
                    : 'https://cdn2.vectorstock.com/i/1000x1000/95/06/no-people-sign-vector-9019506.jpg'
                }
              />
              <p> name: {item.name}</p>
              <p>character: {item.character}</p>
            </li>
          ))}{' '}
      </ul>
    </div>
  );
};

export default Cast;
