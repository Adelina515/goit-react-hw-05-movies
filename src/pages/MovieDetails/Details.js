import Loader from 'components/loader/Loader';
import { useEffect, useState } from 'react';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'services/ApiAxios';

const Details = () => {
  const [movieId] = useParams();
  const [loading, setLoading] = useState(false);
  const [moveDetails, setMoveDetails] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const fetchDetails = () => {
      setLoading(true);
      fetchMoviesDetails(movieId)
        .then(movie => {
          setMoveDetails(movie);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchDetails();
  }, [movieId]);

  if (!moveDetails) {
    return;
  }
  const {
    original_title,
    release_date,
    popularity,
    overview,
    poster_path,
    genre_ids,
    title,
  } = moveDetails;

  return (
    <>
      <link to={location.state?.from ?? '/'}>
        <button type="button">Go back</button>
      </link>
      {loading && <Loader />}
      {moveDetails && (
        <div>
          <img width="300px" alt="name"></img>
          <div>
            <h1>name</h1>
            <p>User score:</p>
            <h2>Overview</h2>
            <p>text</p>
            <h2>Genres</h2>
            <p>text</p>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <link to="cast">Cast</link>
              </li>
              <li>
                <link to="reviews">Reviews</link>
              </li>
            </ul>
            <Outlet />
          </div>
        </div>
      )}
    </>
  );
};
export default Details;
