import Loader from 'components/loader/Loader';
import ListFilms from 'components/ListFilms/ListFilms';
import React, { useEffect, useState } from 'react';
import { fetchMovies } from 'services/ApiAxios';

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [listFilms, setListFilms] = useState([]);

  useEffect(() => {
    const fetchTrendMovies = () => {
      setLoading(true);
      fetchMovies()
        .then(films => {
          setListFilms(films);
        })
        .catch(error => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    };
    fetchTrendMovies();
  }, []);
  console.log(listFilms);
  return (
    <>
      <h2>Trending today</h2>
      <ListFilms films={listFilms} />
      {loading && <Loader />}
    </>
  );
};

export default Home;
