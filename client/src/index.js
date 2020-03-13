import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';

import * as serviceWorker from './serviceWorker';
import store from './store';
import FetchServices from './services/FetchServices';
import {ServicesProvider} from './components/ServicesContext';
import AppContainer from './containers/AppContainer/AppContainer';

// import App from './components/App/App';

const fetchServices = new FetchServices();

ReactDOM.render(
  <Provider store={store}>
    <ServicesProvider value={fetchServices}>
      <AppContainer/>
    </ServicesProvider>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
