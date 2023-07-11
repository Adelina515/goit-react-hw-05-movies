import Loader from 'components/loader/Loader';
import ListFilms from 'pages/ListFilms/ListFilms';
import { useState } from 'react';
import { Form } from 'react-router-dom';
import { fetchSearchMovies } from 'services/ApiAxios';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [searchFilms, setSearchFilms] = useState([]);
  const [nothing, setNothing] = useState(false);

  const searchFilmsWord = word => {
    setLoading(true);
    fetchSearchMovies(word)
      .than(foundFilms => {
        setSearchFilms(foundFilms);
        setNothing(foundFilms.length === 0);
      })
      .catch(error => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div>
      <Form searchWord={searchFilmsWord} />
      {loading && <Loader />}
      {nothing && <h2>Please, input film</h2>}
      {searchFilms && <ListFilms searchFilms={searchFilms} />}
    </div>
  );
};

export default Movies;
