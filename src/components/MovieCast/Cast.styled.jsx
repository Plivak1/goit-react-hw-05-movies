import styled from '@emotion/styled';

export const ActorsList = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  gap: 20px;

  font-size: 20px;
  font-weight: bold;

  max-width: 1240px;
  padding: 20px 20px;
  margin: 0;

  color: #3dd22f;
  background-color: #feeeee;
  border: 5px solid;
  border-image: linear-gradient(45deg, #ee9797, #704d4d) 1;
`;

export const ActorItem = styled.li`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  flex-basis: calc((100% - 200px) / 5);
`;

export const ActorImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 15%;
  object-fit: cover;
  box-shadow: rgba(0, 0, 0, 0.5) 0px 14px 28px, rgba(0, 0, 0, 0.5) 0px 10px 10px;
`;

export const ActorName = styled.p`
  flex-grow: 1;
  text-align: center;
  margin: 0;
`;
