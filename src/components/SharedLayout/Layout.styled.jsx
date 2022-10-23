import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeaderMenuList = styled.ul`
  height: 40px;
  display: flex;
  align-items: center;
  margin: 0;
`;

export const Item = styled.li`
  font-size: 20px;
  font-weight: 500;
  list-style: none;
  transition: transform 100ms linear;

  &:hover,
  &:focus {
    transform: scale(1.05);
  }
  &:first-of-type {
    margin-right: 30px;
  }
`;

export const StyledLink = styled(NavLink)`
  display: inline-block;

  text-decoration: none;
  padding: 5px 13px;

  color: #ffffff;
  border-radius: 5px;

  &.active {
    color: #2fd22f;
    background-color: #ffffff;
  }
`;
