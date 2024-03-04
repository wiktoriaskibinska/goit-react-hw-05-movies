import Loader from 'components/Loader/Loader';
import React from 'react';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Layout = () => (
  <div>
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
    </nav>
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </div>
);
export default Layout;
