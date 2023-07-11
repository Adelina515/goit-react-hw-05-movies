import { NavLink, useLocation } from 'react-router-dom';

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
export default ListFilms;
