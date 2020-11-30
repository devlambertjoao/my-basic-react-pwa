import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import registerServiceWorker from './app/serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

registerServiceWorker();

