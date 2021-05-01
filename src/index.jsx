import React from 'react'
import ReactDOM from 'react-dom'
import Routes from './routes'

import "../styles/base/_main.sass"  // Global styles
import "../styles/base/_common.sass"  // Global styles
import "../styles/_style.sass"  // Css-module styles

ReactDOM.render(
  <Routes/>,
  document.getElementById('app')
);
