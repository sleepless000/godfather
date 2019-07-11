import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import routes from './Router';
import styled from 'styled-components';
import logo from './_logo/the-godfather.svg';

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
const List = styled.div`
  padding-top: 5em;
  list-style-type: none;
`;

const Logo = styled.img`
  place-self: center;
  height: 150px;
`;

const TabLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 1.2em;
`;

function App() {
  return (
    <Router>
      <Grid>
        <LeftGrid>
          <Logo src={logo} />
          <List>
            <li>
              <TabLink to="VitoCorleone">Vito Corleone</TabLink>
            </li>
            <li>
              <TabLink to="/CarmeliaCorleone">Carmelia Corleone</TabLink>
            </li>
            <li>
              <TabLink to="/CarloRizzi">Carlo Rizzi</TabLink>
            </li>
            <li>
              <TabLink to="/LuciMancini">Luci Mancini</TabLink>
            </li>
          </List>
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
