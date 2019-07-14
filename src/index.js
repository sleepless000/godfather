import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { UserProvider } from './Context';
import App from './App';

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Roboto';
  src: local('Roboto'), url(_Font/Roboto-Thin.ttf) format('woff');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family:  Roboto, sans-serif;
  font-size: 100%;
}
`;

ReactDOM.render(
  <UserProvider>
    <GlobalStyle />
    <App />
  </UserProvider>,
  document.getElementById('root')
);
