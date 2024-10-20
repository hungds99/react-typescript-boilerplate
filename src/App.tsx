import { Providers } from './providers';
import { RouterProvider } from './providers/router-provider';

function App() {
  return (
    <Providers>
      <RouterProvider />
    </Providers>
  );
}

export default App;
