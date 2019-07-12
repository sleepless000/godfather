import React from 'react';
import info from './EmployeeData.json';

const UserContext = React.createContext({});

export const UserConsumer = UserContext.Consumer;
export default UserContext;

export function UserProvider(props) {
  const [data, setData] = React.useState(info.employees);
  const changeData = e => name =>
    setData(
      info.employees.map(employee =>
        employee.name === name
          ? { ...employee, popularity: +e.target.value }
          : employee
      )
    );
  React.useEffect(() => {
    console.log(data);
  }, [data]);

  return (
    <UserContext.Provider value={{ data, changeData }}>
      {props.children}
    </UserContext.Provider>
  );
}
