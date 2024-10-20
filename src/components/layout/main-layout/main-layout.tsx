import { Outlet } from 'react-router-dom';

export const MainLayout = () => {
  return (
    <div>
      <h1>Protected route</h1>
      <Outlet />
    </div>
  );
};
