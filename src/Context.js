import React, { createContext, useState } from 'react';
import info from './EmployeeData.json';

const INITIAL_STATE = info.employees;

const UserContext = createContext();

const UserProvider = props => {
  const [data, setData] = useState(INITIAL_STATE);
  const [associates, setAssociates] = useState([]);

  const setCurrentEmployee = name => {
    data.map(employee =>
      employee.name === name
        ? setAssociates([...employee.colleagues, name])
        : null
    );
  };

  const setPopularity = (value, name) =>
    setData(
      data.map(employee =>
        employee.name === name ? { ...employee, popularity: value } : employee
      )
    );

  return (
    <UserContext.Provider
      value={{ data, setPopularity, setCurrentEmployee, associates }}
      {...props}
    />
  );
};

export { UserContext, UserProvider };
