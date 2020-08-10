import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import { Provider } from 'react-redux';
import SuperContainer from './App';
import { BrowserRouter } from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
  <React.StrictMode>
    <Provider store={store}>
       <SuperContainer />
    </Provider>
  </React.StrictMode>
  </BrowserRouter>,
  document.getElementById('root')
);


serviceWorker.unregister();
