import React, { useContext, useState } from 'react';
import TabLink from './TabLink';
import { UserContext } from './Context';

export default function() {
  const { data } = useContext(UserContext);
  const [colleagues, setColleagues] = useState([]);
  const [name, setName] = useState('');

  const handleOnClick = name => {
    setName(name);
    data.map(employee =>
      employee.name === name ? setColleagues(employee.colleagues) : null
    );
  };

  return data.map((employee, index) => {
    return colleagues.includes(employee.name) || name === employee.name ? (
      <li key={index}>
        <TabLink {...employee} color="true" setName={handleOnClick} />
      </li>
    ) : (
      <li key={index}>
        <TabLink {...employee} setName={handleOnClick} />
      </li>
    );
  });
}
