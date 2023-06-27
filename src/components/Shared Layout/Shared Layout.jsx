import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import React from 'react';

const SharedLayout = () => {
  return (
    <Container>
      <AppBar>
        <Navigation />
        <UserMenu />
      </AppBar>

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
