import React from 'react';
import data from './EmployeeData.json';
import Employee from './Employee';

const routes = data.employees.map(employee => ({
  path: '/' + employee.name.replace(/ /g, ''),
  main: () => <Employee {...employee} />
}));

export default routes;
