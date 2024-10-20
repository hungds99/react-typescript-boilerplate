import { ErrorBoundary } from '@/components/common/error-boundary';
import { MainLayout } from '@/components/layout/main-layout';
import { ProtectedLayout } from '@/components/layout/protected-layout';
import { PublicLayout } from '@/components/layout/public-layout';
import { createBrowserRouter } from 'react-router-dom';
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
          element: <MainLayout />,
          children: [
            {
              path: '/',
              errorElement: <ErrorBoundary />,
              element: <Home />,
            },
            {
              path: '/about',
              errorElement: <ErrorBoundary />,
              element: <About />,
            },
          ],
        },
      ],
    },
    {
      element: <PublicLayout />,
      children: [
        {
          errorElement: <ErrorBoundary />,
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
    },
  ],
  {},
);
