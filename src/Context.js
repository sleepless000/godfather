import React, { createContext, useState } from 'react';
import info from './EmployeeData.json';

const INITIAL_STATE = info.employees;

const UserContext = createContext();

const UserProvider = props => {
  const [data, setData] = useState(INITIAL_STATE);

  const changePopularity = value => name =>
    setData(
      data.map(employee =>
        employee.name === name ? { ...employee, popularity: value } : employee
      )
    );

  return <UserContext.Provider value={{ data, changePopularity }} {...props} />;
};

export { UserContext, UserProvider };
