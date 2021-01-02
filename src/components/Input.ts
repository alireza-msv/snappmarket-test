import styled, { css } from 'styled-components';

const baseStyles = css`
  border: none;
  border-bottom: 1px solid #c6c6c6;
  margin-bottom: 20px;
  width: 100%;
  font-size: 16px;
  display: block;

  &:focus {
    border-bottom-color: #00adef;
    outline: none;
  }
  &:last-child {
    margin-bottom: 0;
  }
`;

const Input = styled.input`
  ${baseStyles};
  height: 40px;
  padding: 6px 0;
`;

export const TextArea = styled.textarea`
  ${baseStyles};
  min-height: 80px;
`;

export default Input;
