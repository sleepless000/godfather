import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { UserContext } from './Context';
import Employee from './Employee';

export default function() {
  const { data, setPopularity } = useContext(UserContext);

  return data.map((employee, index) => (
    <Route
      key={index}
      path={`/${employee.name.replace(/ /g, '')}`}
      render={props => (
        <Employee {...employee} setPopularity={setPopularity} {...props} />
      )}
    />
  ));
}
