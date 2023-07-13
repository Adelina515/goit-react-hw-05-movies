import Loader from 'components/loader/Loader';
import ListFilms from 'components/ListFilms/ListFilms';
import { useEffect, useState } from 'react';
import Form from 'components/Form/Form';
import { useSearchParams } from 'react-router-dom';
import { fetchSearchMovies } from 'services/ApiAxios';

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [searchFilms, setSearchFilms] = useState([]);
  const [nothing, setNothing] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleSubmit = query => {
    setSearchParams({ query });
  };

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) {
      return;
    }

    const searchFilmsWord = () => {
      setLoading(true);
      fetchSearchMovies(query)
        .then(foundFilms => {
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
    searchFilmsWord();
  }, [searchParams]);

  return (
    <div>
      <Form searchWord={handleSubmit} />
      {loading && <Loader />}
      {nothing && <h2>Please, input film</h2>}
      {searchFilms && <ListFilms films={searchFilms} />}
    </div>
  );
};

export default Movies;
