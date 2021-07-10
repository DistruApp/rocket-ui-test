import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Routes from './routes'
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from "@apollo/client";
import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import "styles/_style.sass"  // Css-module styles

import { Provider } from "react-redux";
import store from "./stores/Root.js";

const client = new ApolloClient({
  uri: 'https://api.spacex.land/graphql/',
  cache: new InMemoryCache()
});

const renderApp = (Component) => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Provider store={store}>
      <AppContainer>
        <Component/>
      </AppContainer>
    </Provider>
    </ApolloProvider>,
    document.getElementById('app')
  );
};

renderApp(Routes);

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./routes', () => {
    renderApp(require('./routes').default);
  })
}