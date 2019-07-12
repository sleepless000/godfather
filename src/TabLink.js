import React, { useContext, useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';
import UserContext from './Provider';

const TabLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 100%;
  display: block;

  ${({ value }) =>
    value &&
    css`
      font-size: calc(${value} * 0.2em);
    `}
`;

export default function(props) {
  const { value } = useContext(UserContext);
  const [pop, setPop] = useState(props.popularity);

  useEffect(() => {
    setPop(value);
  }, [value]);

  return (
    <TabLink to={props.name.replace(/ /g, '')} value={pop}>
      {props.name}
    </TabLink>
  );
}
