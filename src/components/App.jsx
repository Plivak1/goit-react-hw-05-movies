import { Route, Routes } from 'react-router-dom';
import { Layout } from './SharedLayout';
import { lazy } from 'react';

const Home = lazy(() => import('pages/Home'));
const MovieDetails = lazy(() => import('pages/MovieDetails'));
const Cast = lazy(() => import('./MovieCast'));
const Reviews = lazy(() => import('./MovieReviews'));
const Movies = lazy(() => import('pages/Movies'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
