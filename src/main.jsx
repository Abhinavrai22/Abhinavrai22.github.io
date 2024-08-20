import { StrictMode } from 'react'
import ReactDOM , { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import App from './App.jsx'
import './index.css'
import store from './store/index.js'

ReactDOM.createRoot(document.getElementById('root')).render(
 
    <Provider store={store}>
      <BrowserRouter basename='/'>
        <App />
      </BrowserRouter>
    </Provider>
 
)
