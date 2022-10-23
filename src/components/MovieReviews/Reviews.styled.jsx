import styled from '@emotion/styled';

export const ReviewsList = styled.ul`
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 1000px;

  margin: 0;
  padding: 20px 20px;
  border: 4px dotted #2fd237;
`;

export const Review = styled.article`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  padding: 10px 20px;
  background-color: #f3bbbb;
`;

export const Reviewer = styled.p`
  font-size: 20px;
  font-weight: bold;
  margin: 0;
`;

export const Comment = styled.p`
  font-size: 17px;
  margin: 0;
`;

export const NotFound = styled.p`
  font-size: 25px;
  padding: 20px 25px;
  margin: 0;
  color: #ffffff;
  background-color: #2fd22f;
  border-radius: 10px;
  box-shadow: 0 10px 10px -6px #777;
`;
