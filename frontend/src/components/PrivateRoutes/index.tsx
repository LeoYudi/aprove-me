import { Outlet } from 'react-router-dom';

import useViewModel from './viewModel'

export function PrivateRoutes() {
  useViewModel()

  return (
    <>
      <Outlet />
    </>
  );
}