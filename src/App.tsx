import * as React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import GlobalStyles from './components/GlobalStyles';
import createStore from './redux';

import Map from './pages/map';
import LocationsList from './pages/locationsList';

interface InitialLocation { lat: number, lng: number }

const initialLocation: InitialLocation = {
  lat: 35.69974771764406,
  lng: 51.33808667564689,
};

const App: React.FC = () => {
  const renderMap = React.useCallback(() => (
    <Map
      defaultZoom={16}
      center={initialLocation}
    />
  ), []);
  const { store, persistor } = createStore();
  const renderList = React.useCallback(() => (
    <LocationsList />
  ), []);

  return (
    <Provider store={store}>
      <GlobalStyles />
      <PersistGate persistor={persistor} loading={null}>
        <Router>
          <Switch>
            <Route
              path="/"
              component={renderMap}
              exact
            />
            <Route
              path="/locations"
              component={renderList}
              exact
            />
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  );
};

export default App;
