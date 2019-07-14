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
    /* color: SkyBlue; */
    background: rgba(0, 0, 0, 0.4);
    width: 100%;
  }
  ${({ value }) =>
    value &&
    css`
      font-size: calc(${value} * 0.2em);
    `}
  ${({ color }) =>
    color &&
    css`
      color: SkyBlue;
    `}
`;

export default function({ name, popularity, color, onClick }) {
  const path = name.replace(/ /g, '');
  return (
    <TabLink
      to={path}
      value={popularity}
      onClick={() => onClick(name)}
      color={color}
    >
      {name}
    </TabLink>
  );
}
