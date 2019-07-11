import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './Router';
import styled from 'styled-components';
import logo from './_logo/the-godfather.svg';
import Links from './Links';

const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
`;

const LeftGrid = styled.div`
  padding-top: 5em;
  display: grid;
  grid-template-rows: 1fr 4fr;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
  background: rgba(0, 0, 0, 0.4);
`;
const RightGrid = styled.div``;

const Logo = styled.img`
  place-self: center;
  height: 150px;
`;

function App() {
  return (
    <Router>
      <Grid>
        <LeftGrid>
          <Logo src={logo} />
          <Links />

          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
        </LeftGrid>

        <RightGrid>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.main}
            />
          ))}
        </RightGrid>
      </Grid>
    </Router>
  );
}

export default App;
