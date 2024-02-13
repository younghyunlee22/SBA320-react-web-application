import React from 'react'
import ReactDOM from 'react-dom/client'
// IMPORT PROVIDER FROM REACT-REDUX LIBRARY TO CONNECT REACT AND REDUX APPLICATIONS
import { Provider } from "react-redux";

import App from './App.jsx'
import {store} from './app/store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
)
