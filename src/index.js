import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Context } from './context/productcontex';
// import {AppProvider} from './reducer/Context'
// import store from '../src/function/redux/store'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>
  </React.StrictMode>
);

