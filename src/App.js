import React, { useContext } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import logo from './_logo/the-godfather.svg';
import Links from './Links';
import { UserContext } from './Context';
import Employee from './Employee';

const BackgroundImage = styled.div`
  background: url(/_images/Header/header.jpg) no-repeat 0px -150px fixed;
  background-size: cover;
  overflow: hidden;
`;
const Cover = styled.div`
  position: absolute;
  top: 250px;
  left: 0px;
  height: calc(100% - 250px);
  width: 100%;
  background: #2f2f2f;
  box-shadow: 0px -40px 30px 20px #2f2f2f;
`;

const Grid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
`;

const LeftGrid = styled.div`
  padding-top: 5rem;
  display: grid;
  grid-template-rows: 1fr 4fr;
  justify-content: stretch;
  gap: 2rem;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
`;
const RightGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 0.1fr;
  grid-gap: 2rem;
  z-index: 1;
`;

const List = styled.div`
  padding-top: 5rem;
  list-style-type: none;
  text-align: center;
`;

const Logo = styled.img`
  place-self: center;
  height: 100px;
`;

export default function() {
  const { data, changePopularity } = useContext(UserContext);

  const renderRoutes = () => {
    return data
      .map(employee => ({
        path: `/${employee.name.replace(/ /g, '')}`,
        component: () => (
          <Employee {...employee} changePopularity={changePopularity} />
        )
      }))
      .map((route, index) => (
        <Route key={index} path={route.path} component={route.component} />
      ));
  };

  return (
    <Router>
      <BackgroundImage>
        <Cover />
        <Grid>
          <LeftGrid>
            <Logo src={logo} />
            <List>
              <Links />
            </List>
          </LeftGrid>
          <RightGrid>{renderRoutes()}</RightGrid>
        </Grid>
      </BackgroundImage>
    </Router>
  );
}
