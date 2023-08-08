import { Suspense } from 'react';
import { BrowserRouter, useRoutes } from 'react-router-dom';

import { routes } from 'routes';

import 'primereact/resources/themes/lara-light-indigo/theme.css';
import 'primereact/resources/primereact.min.css';
// import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const Routes = () => {
  const element = useRoutes(routes);

  return element;
};

const App = () => {
  return (
    <div>
      <Suspense>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </Suspense>
    </div>
  );
};

export default App;
