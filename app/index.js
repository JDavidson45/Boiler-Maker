import React from 'react'
import ReactDom from 'react-dom'
import store from './store.js'
import { Provider } from 'react-redux'
import HelloWorld from './components/HelloWorld.js';
import '../public/index.css'

ReactDom.render(
  <Provider store={store}>
  <HelloWorld />
  </Provider>,
  document.getElementById('app')
)
