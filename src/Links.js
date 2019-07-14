import React, { useContext } from 'react';
import Link from './Link';
import { UserContext } from './Context';

export default function() {
  const { data, setCurrentEmployee, associates } = useContext(UserContext);

  const handleSetName = name => setCurrentEmployee(name);

  return data.map((employee, index) => {
    return associates.includes(employee.name) ? (
      <li key={index}>
        <Link {...employee} setName={handleSetName} color="true" />
      </li>
    ) : (
      <li key={index}>
        <Link {...employee} setName={handleSetName} />
      </li>
    );
  });
}
