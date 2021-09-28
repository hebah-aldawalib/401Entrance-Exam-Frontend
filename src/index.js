import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{ Auth0provider} from"@auth0/auth0-react";

// TODO: wrap everything in Auth0
ReactDOM.render(
  <Auth0provider
  domain=""
  clientId="" >
  <App />
  </Auth0provider>, 

  <React.StrictMode>
   
  </React.StrictMode>,
  document.getElementById('root')
);
