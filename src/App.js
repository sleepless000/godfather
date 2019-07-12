import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import logo from './_logo/the-godfather.svg';
import Links from './Links';
import { UserContext } from './Provider';
import Employee from './Employee';

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
const RightGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 5%;
  grid-gap: 2em;
`;

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
  const { data, changeData } = useContext(UserContext);

  const renderRoutes = () => {
    return data
      .map(employee => ({
        path: '/' + employee.name.replace(/ /g, ''),
        main: () => <Employee {...employee} changeData={changeData} />
      }))
      .map((route, index) => (
        <Route
          key={index}
          path={route.path}
          exact={route.exact}
          component={route.main}
        />
      ));
  };

  return (
    <Router>
      <Grid>
        <LeftGrid>
          <Logo src={logo} />
          <List>
            <Links />
          </List>
        </LeftGrid>
        <RightGrid>{renderRoutes()}</RightGrid>
      </Grid>
    </Router>
  );
}

export default App;
