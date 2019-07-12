import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import routes from './Router';
import styled from 'styled-components';
import logo from './_logo/the-godfather.svg';
import Links from './Links';
import { UserProvider } from './Provider';

const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 30% 70%;
`;

const LeftGrid = styled.div`
  padding-top: 5em;
  display: grid;
  grid-template-rows: 1fr 4fr;
  justify-content: stretch;
  gap: 20px;
  background: rgba(0, 0, 0, 0.4);
`;
const RightGrid = styled.div``;

const List = styled.div`
  padding-top: 5em;
  list-style-type: none;
  text-align: center;
`;

const Logo = styled.img`
  place-self: center;
  height: 100px;
`;

function App() {
  const [value, setValue] = useState();
  return (
    <UserProvider value={{ value, setValue }}>
      <Router>
        <Grid>
          <LeftGrid>
            <Logo src={logo} />
            <List>
              <Links />
            </List>
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
    </UserProvider>
  );
}

export default App;
