import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './redux/store.js'
import Mystate from './context/Mystate.jsx'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <Provider store={store}>
  <Mystate >
    <App />
    </Mystate>
    </Provider>
  </React.StrictMode>,
)
