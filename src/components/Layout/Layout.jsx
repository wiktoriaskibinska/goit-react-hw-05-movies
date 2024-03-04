import Loader from 'components/Loader/Loader';
import React from 'react';
import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import css from './Layout.module.css';

const Layout = () => (
  <div>
    <header className={css.header}>
      <div className={css.wrapper}>
        <h2 className={css.headerTittle}>Movies Searcher</h2>
        <nav>
          <NavLink
            className={css.navLink}
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              background: isActive ? 'pink' : 'transparent',
            })}
            to="/movies"
          >
            Movies
          </NavLink>
          <NavLink
            className={css.navLink}
            style={({ isActive }) => ({
              color: isActive ? 'white' : 'black',
              background: isActive ? 'pink' : 'transparent',
            })}
            to="/"
          >
            Home
          </NavLink>
        </nav>
      </div>
    </header>
    <Suspense fallback={<Loader />}>
      <Outlet />
    </Suspense>
  </div>
);
export default Layout;
