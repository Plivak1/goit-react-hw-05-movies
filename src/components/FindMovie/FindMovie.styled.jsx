import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  align-items: center;
`;
export const Input = styled.input`
  display: inline-block;
  max-width: 250px;
  height: 30px;
  font-size: 22px;

  padding: 8px 5px;
  color: #d22f2f;
  outline: none;
  border: 2px solid #f57979;
  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;
  ::placeholder {
    color: #fa8f8f;
  }
  &:focus {
    outline: 1px solid #d22f2f;
    border-color: #d22f2f;
  }
`;

export const SearchBtn = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;

  padding: 0;
  color: #ffffff;
  background-color: #d22f2f;
  border: none;
  border-top-right-radius: 10px;
  border-bottom-right-radius: 10px;

  &:hover {
    cursor: pointer;
  }
`;
