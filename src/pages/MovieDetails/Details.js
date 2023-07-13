import Loader from 'components/loader/Loader';
import { Suspense, useEffect, useState } from 'react';
import { Outlet, Link, useLocation, useParams } from 'react-router-dom';
import { fetchMoviesDetails } from 'services/ApiAxios';

const Details = () => {
  const { movieId } = useParams();
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
    genres,
  } = moveDetails;
  const goBack = location?.state?.from ?? '/';

  const genresFilm = genres.map(genre => genre.name).join(', ');

  return (
    <>
      <Link to={goBack}>Go back</Link>

      {loading && <Loader />}
      {moveDetails && (
        <div>
          <img
            width="300px"
            alt="name"
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w500${poster_path}`
                : 'https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg'
            }
          />
          <div>
            <h1>
              {original_title} ({release_date})
            </h1>
            <p>User score: {popularity}</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h2>Genres</h2>
            <p>{genresFilm}</p>
          </div>
          <div>
            <h3>Additional information</h3>
            <ul>
              <li>
                <Link to={`/movies/${movieId}/cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
              </li>
            </ul>
            <Suspense fallback={<Loader />}>
              <Outlet />
            </Suspense>
          </div>
        </div>
      )}
    </>
  );
};
export default Details;
