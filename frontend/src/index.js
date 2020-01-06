import React from 'react';
import ReactDOM from 'react-dom';
import { applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';

//middeware
import thunk from 'redux-thunk';
import promise from 'redux-promise';
import multi from 'redux-multi';

import App from './main/App';
import reducers from './main/reducers'

const store = applyMiddleware(thunk, multi, promise)(createStore)(reducers)
ReactDOM.render(
      <Provider store={store}>
        <App />
      </Provider>
  , document.getElementById('root'));

