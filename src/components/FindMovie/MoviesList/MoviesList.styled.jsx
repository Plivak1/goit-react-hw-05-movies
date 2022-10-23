import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const FilmList = styled.ul`
  max-width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 20px;

  margin: 0;
  padding: 20px 20px;
  background-color: #ffffff;
  border: 3px solid black;
  border-radius: 10px;
`;

export const Film = styled.li`
  display: flex;
  justify-content: center;
  flex-basis: calc(100% / 6);

  font-size: 20px;
  font-weight: 600;
  border-radius: 10px;
  transition: background-color 200ms ease-out, scale 200ms ease-out,
    border 200ms ease-out, width 200ms ease-out;

  &:hover,
  &:focus {
    transform: scale(1.03);
    background-color: #fdd9d9;
    outline: 5px solid #279f02;
    width: 270px;
  }
`;

export const StyledLink = styled(Link)`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  padding-top: 10px;
  text-align: center;
  color: #19b719;
  text-decoration: none;
`;

export const FilmPoster = styled.img`
  display: block;
  width: 100%;
  height: 250px;
  border-radius: 10px;
  object-fit: cover;
`;

export const FilmName = styled.p`
  margin: 0;
`;
