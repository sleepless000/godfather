import React from 'react';
import data from './EmployeeData.json';
import TabLink from './TabLink';

export default function() {
  return data.employees.map((employee, index) => {
    return (
      <li key={index}>
        <TabLink {...employee} />
      </li>
    );
  });
}
