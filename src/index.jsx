import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import { Provider } from "react-redux";
import { Route, BrowserRouter as Router } from 'react-router-dom';

import "assets/base/_main.sass"  // Global styles
import "assets/base/_common.sass"  // Global styles
import "assets/_style.sass"  // Css-module styles

import store from "./stores/root.stores";

import { LaunchesView } from './views/LaunchesView'
import { Layout } from './components/Layout'

const renderApp = () => {
  ReactDOM.render(
    <Provider store={store}>
      <AppContainer>
      <Router>
          <Layout>
            <Route exact path="/" component={LaunchesView}/>
          </Layout>
        </Router>
      </AppContainer>
    </Provider>,
    document.getElementById('app')
  );
};

renderApp();