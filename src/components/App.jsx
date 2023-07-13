import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './Header/Header';
import { lazy } from 'react';
// import Home from 'pages/Home/Home';
// import Movies from 'pages/Movies/Movies';
// import Details from 'pages/MovieDetails/Details';
// import Cast from './Cast/Cast';
// import Reviews from './Reviews/Reviews';
const Details = lazy(() => import('pages/MovieDetails/Details'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Home = lazy(() => import('pages/Home/Home'));
const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />

        <Route path="movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<Details />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
};
