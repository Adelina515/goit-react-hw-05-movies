import { NavLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const ListFilms = ({ films }) => {
  const location = useLocation();
  return (
    <ul>
      {films.map(film => (
        <li key={film.id}>
          <NavLink to={`/movies/${film.id}`} state={{ from: location }}>
            {film.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
ListFilms.propTypes = {
  films: PropTypes.array.isRequired,
};
export default ListFilms;
