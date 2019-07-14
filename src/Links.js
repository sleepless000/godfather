import React, { useContext, useState } from 'react';
import TabLink from './TabLink';
import { UserContext } from './Provider';

export default function() {
  const { data } = useContext(UserContext);
  const [colleagues, setColleagues] = useState([]);

  const handleOnClick = name => {
    data.map(employee =>
      employee.name === name ? setColleagues(employee.colleagues) : null
    );
  };

  return data.map((employee, index) => {
    return colleagues.includes(employee.name) ? (
      <li key={index}>
        <TabLink {...employee} color="true" onClick={handleOnClick} />
      </li>
    ) : (
      <li key={index}>
        <TabLink {...employee} onClick={handleOnClick} />
      </li>
    );
  });
}
