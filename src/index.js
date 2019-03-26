import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css'
import UserProvider from './providers/UserProvider'
import HobbyProvider from './providers/HobbyProvider'

ReactDOM.render(
  <UserProvider>
    <HobbyProvider>
      <BrowserRouter>
        <App /> 
      </BrowserRouter>
    </HobbyProvider>
  </UserProvider>,
document.getElementById('root')
);

