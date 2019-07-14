import React, { useContext, useState } from 'react';
import Link from './Link';
import { UserContext } from './Context';

export default function() {
  const { data } = useContext(UserContext);
  const [colleagues, setColleagues] = useState([]);
  const [name, setName] = useState('');

  const handleSetName = name => {
    setName(name);
    data.map(employee =>
      employee.name === name ? setColleagues(employee.colleagues) : null
    );
  };

  return data.map((employee, index) => {
    return colleagues.includes(employee.name) || name === employee.name ? (
      <li key={index}>
        <Link {...employee} color="true" setName={handleSetName} />
      </li>
    ) : (
      <li key={index}>
        <Link {...employee} setName={handleSetName} />
      </li>
    );
  });
}
