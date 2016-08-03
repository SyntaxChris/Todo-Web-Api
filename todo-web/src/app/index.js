import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import configureStore from './configureStore';
import App from './components/App';
import './components/bundle.scss'; 

const store = configureStore();

// hello comment
const Root = ({ store }) => (
  <Provider store={store}>
    <Router onUpdate={() => window.scrollTo(0, 0)} history={browserHistory}>
      <Route path='/' component={App} />
    </Router>
  </Provider>
);

ReactDOM.render(
  <Root store={store} />, 
  document.getElementById('react-root')
);
