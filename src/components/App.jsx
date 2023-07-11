import { Routes, Route } from 'react-router-dom';
import Header from './Header/Header';
import { lazy } from 'react';
const Details = lazy(() => import('pages/MovieDetails/Details'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const Home = lazy(() => import('pages/Home/Home'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<Home />} />

        <Route path="/movies" element={<Movies />} />

        <Route path="/movies/:movieId" element={<Details />}>
          <Route path="/movies/:movieId/cast" element={<div>cast</div>} />
          <Route path="/movies/:movieId/reviews" element={<div>reviews</div>} />
        </Route>

        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};
