import { createBrowserRouter } from 'react-router-dom';
import { ProtectedLayout } from '../components/layout/protected-layout';
import { PublicLayout } from '../components/layout/public-layout';
import { About } from './about';
import { Home } from './home';
import { SignIn } from './sign-in';
import { SignUp } from './sign-up';

export const router = createBrowserRouter(
  [
    {
      element: <ProtectedLayout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/about',
          element: <About />,
        },
      ],
    },
    {
      element: <PublicLayout />,
      children: [
        {
          path: '/sign-in',
          element: <SignIn />,
        },
        {
          path: '/sign-up',
          element: <SignUp />,
        },
      ],
    },
  ],
  {},
);
