import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const SharedLayout = lazy(() => import('./Shared Layout/Shared Layout'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Home = lazy(() => import('../pages/Home/Home'));
const MovieDetails = lazy(() => import('../pages/Movie Details/Movie Details'));
const Movies = lazy(() => import('../pages/Movies/Movies'));
const GoBack = lazy(() => import('./Go Back/Go Back'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index elemnet={<Home />} />
        <Route path="Movies" element={<Movies />} />
        <Route path="Movie Details" element={<MovieDetails />}>
          <Route path="Cast" element={<Cast />} />
          <Route path="Reviews" element={<Reviews />} />
          <Route path="Go Back" element={<GoBack />} />
        </Route>
      </Route>
    </Routes>
  );
};
