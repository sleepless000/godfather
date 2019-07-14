import React from 'react';
import { NavLink } from 'react-router-dom';
import styled, { css } from 'styled-components';

const TabLink = styled(NavLink)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  letter-spacing: 0.15rem;
  width: 100%;
  display: block;

  &:hover {
    background: rgb(220, 224, 230, 0.3);
    width: 100%;
  }

  ${({ popularity }) =>
    popularity &&
    css`
      font-size: calc(${popularity} * 0.2rem);
    `}

  ${({ color }) => color && 'color: SkyBlue;'}
`;

export default function({ name, popularity, color, setName }) {
  const path = name.replace(/ /g, '');
  const handleClick = () => setName(name);

  return (
    <TabLink
      to={path}
      popularity={popularity}
      onClick={handleClick}
      color={color}
    >
      {name}
    </TabLink>
  );
}
