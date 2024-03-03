import React from 'react';
import { Outlet } from 'react-router-dom';

export const MovieDetails = () => {
  return (
    <div>
      Movie Details
      <Outlet />
    </div>
  );
};
