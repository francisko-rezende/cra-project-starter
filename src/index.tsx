import React from 'react'

import ReactDOM from 'react-dom'

import './index.css'
import Main from './components/Main'
import reportWebVitals from './reportWebVitals'
import GlobalStyles from './styles/GlobalStyles'

ReactDOM.render(
  <React.StrictMode>
    <Main />
    <GlobalStyles />
  </React.StrictMode>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
