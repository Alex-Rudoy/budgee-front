import { Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import LoadingIcon from './components/LoadingIcon/LoadingIcon';
import routes from './pages/routes';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Suspense fallback={<LoadingIcon />}>
        <Switch>
          {routes.map((route) => (
            <Route {...route} key={route.path} />
          ))}
        </Switch>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
