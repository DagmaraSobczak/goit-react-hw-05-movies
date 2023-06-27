import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import Loader from '../Loader/Loader';
import css from './Shared Layout.module.css';

export const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <NavLink to="/" className={css.styledLink}>
            Home
          </NavLink>
          <NavLink to="movies" className={css.styledLink}>
            Movies
          </NavLink>
        </nav>
      </header>
      <main>
        <div className={css.container}>
          <Suspense fallback={<Loader />}>
            <Outlet />
          </Suspense>
        </div>
      </main>
    </>
  );
};

export default SharedLayout;
