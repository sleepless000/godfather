import React from 'react';
import info from './EmployeeData.json';

export const UserContext = React.createContext({});

export function UserProvider(props) {
  const [data, setData] = React.useState(info.employees);
  const changeData = value => name =>
    setData(
      data.map(employee =>
        employee.name === name ? { ...employee, popularity: value } : employee
      )
    );

  return (
    <UserContext.Provider value={{ data, changeData }}>
      {props.children}
    </UserContext.Provider>
  );
}
