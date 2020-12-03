import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import * as serviceWorkerRegistration from './app/service-worker/serviceWorkerRegistration';
import reportWebVitals from './app/web-vitals/reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorkerRegistration.customRegister();

reportWebVitals();

