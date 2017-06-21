import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './containers'
import store from './stores'

let rootElement = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
)