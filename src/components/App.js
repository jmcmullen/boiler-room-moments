import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import { Provider } from 'mobx-react';
import Home from './Home';
import { MomentStore } from '../stores/MomentStore';
import '../assets/styles/theme.css';

const stores = {
  momentStore: new MomentStore(),
};

const App = () => (
  <Provider {...stores}>
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  </Provider>
);

export default App;
