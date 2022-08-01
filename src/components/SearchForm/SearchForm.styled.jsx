import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  width: 380px;
  margin: 30px auto;
`;
export const Input = styled.input`
  padding: 0 14px 4px 0;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.14;
  display: flex;
  align-items: center;

  width: 380px;
  height: 30px;

  background-color: transparent;
  outline-color: transparent;
  border: none;
  border-bottom: 1px solid #000;
  color: #000;

  outline: 0 none;
  outline-offset: 0;
  &:focus,
  &:hover {
    border: transparent;
    border-bottom: 1px solid #ff6b08;
  }
  &::placeholder {
    opacity: 1;
  }
`;

export const Button = styled.button`
  position: absolute;
  justify-content: end;
  text-align: center;
  width: 40px;
  height: 40px;
  right: -8px;
  bottom: -4px;

  background-color: transparent;
  border: none;
  cursor: pointer;

  &:hover {
    color: #000;
    opacity: 1;
  }
`;
