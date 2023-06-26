import React from 'react';
import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const SharedLayout = lazy(() => import('./Shared Layout/Shared Layout'));
const Cast = lazy(() => import('./Cast/Cast'));
const Reviews = lazy(() => import('./Reviews/Reviews'));
const Home = lazy(() => import('../pages/Home/Home'));
const Movie Details = lazy(() => import('../pages/Movie Details/Movie Details'));
const Movies = lazy(() => import('../pages/Movies/Movies'));

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="some-path" element={<MyComponent />} />
        {/* Inne trasy */}
      </Route>
    </Routes>
  );
};
