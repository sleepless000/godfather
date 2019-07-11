import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import data from './EmployeeData.json';

const List = styled.div`
  padding-top: 5em;
  list-style-type: none;
`;

const TabLink = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-size: 1.2em;
`;
const linksElements = data.employees.map(employee => {
  return (
    <li>
      <TabLink to={employee.name.replace(/ /g, '')}>{employee.name}</TabLink>
    </li>
  );
});

export default function() {
  return <List>{linksElements}</List>;
}
