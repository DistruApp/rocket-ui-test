import React from 'react'
import ReactDOM from 'react-dom'
import {AppContainer} from 'react-hot-loader'
import Routes from './routes'
import {LaunchesProvider} from './hooks/launchesProvider'

import "styles/base/_main.sass"  // Global styles
import "styles/base/_common.sass"  // Global styles
import "styles/_style.sass"  // Css-module styles

const renderApp = (Component) => {
  ReactDOM.render(
    <LaunchesProvider>
      <AppContainer>
        <Component/>
      </AppContainer>
    </LaunchesProvider>,
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