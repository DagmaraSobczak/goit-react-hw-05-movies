import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import React from 'react';
import Loader from '../Loader/Loader';
import css from './SharedLayout.module.css';
import styled from 'styled-components';

const StyledLink = styled(NavLink)`
  color: black;

  &.active {
    color: orange;
  }
`;
const SharedLayout = () => {
  return (
    <>
      <header className={css.header}>
        <nav className={css.nav}>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="movies">Movies</StyledLink>
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
