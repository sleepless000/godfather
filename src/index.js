import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle } from 'styled-components';
import { UserProvider } from './Context';
import App from './App';

const GlobalStyle = createGlobalStyle`
  @font-face {
  font-family: 'Roboto Thin';
  src: local('Roboto Thin'), url(_Font/Roboto-Thin.ttf) format('trueType');
}

@font-face {
  font-family: 'Roboto Regular';
  src: local('Roboto Regular'), url(_Font/Roboto-Regular.ttf) format('trueType');
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

body {
  font-family:  'Roboto Thin', sans-serif;
  font-size: 100%;
  box-sizing: border-box;
}
`;

ReactDOM.render(
  <UserProvider>
    <GlobalStyle />
    <App />
  </UserProvider>,
  document.getElementById('root')
);
