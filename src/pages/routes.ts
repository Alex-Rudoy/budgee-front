import { lazy, LazyExoticComponent } from 'react';

const LandingPage = lazy(() => import('./LandingPage/LandingPage'));

type route = {
  component: LazyExoticComponent<any>;
  exact: boolean;
  path: string;
};

const routes: route[] = [
  {
    component: LandingPage,
    exact: true,
    path: '/',
  },
];

export default routes;
