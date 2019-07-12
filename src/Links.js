import React, { useContext } from 'react';
// import data from './EmployeeData.json';
import TabLink from './TabLink';
import UserContext from './Provider';

export default function() {
  const { data } = useContext(UserContext);
  return data.map((employee, index) => {
    return (
      <li key={index}>
        <TabLink {...employee} />
      </li>
    );
  });
}
