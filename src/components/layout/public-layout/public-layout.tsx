import { Outlet } from 'react-router-dom';

export const PublicLayout = () => {
  return (
    <div>
      <h1>Public route</h1>
      <Outlet />
    </div>
  );
};
