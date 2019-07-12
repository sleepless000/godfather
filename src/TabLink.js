import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const TabLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  letter-spacing: 2px;
  width: 100%;
  display: block;

  &:hover {
    color: SkyBlue;
  }
  ${({ value }) =>
    value &&
    css`
      font-size: calc(${value} * 0.2em);
    `}
`;

export default function({ name, popularity }) {
  const path = name.replace(/ /g, '');
  return (
    <TabLink to={path} value={popularity}>
      {name}
    </TabLink>
  );
}
