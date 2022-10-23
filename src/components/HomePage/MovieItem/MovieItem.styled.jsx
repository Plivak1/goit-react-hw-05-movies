import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Item = styled.li`
  flex-basis: calc((100% - 70px) / 2);
`;

export const StyledLink = styled(Link)`
  display: block;
  min-width: 250px;

  font-size: 17px;
  font-weight: 600;

  padding: 15px 0;
  text-align: center;
  text-decoration: none;
  border-radius: 10px;

  color: #ffffff;
  background-color: #a1fbd8;
  transition: scale 300ms linear, background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #073502;
    transform: scale(1.03);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  }
`;
