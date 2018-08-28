import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import configureStore from './js/store';
import registerServiceWorker from './registerServiceWorker';

import './assests/stylesheet/index.css';
import App from './js/components/App/App';

ReactDOM.render(
  <Provider store={configureStore()}>
    <App/>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();
