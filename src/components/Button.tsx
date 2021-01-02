import * as React from 'react';
import styled, { css } from 'styled-components';
import { darken } from 'polished';

interface ButtonProps extends React.ComponentPropsWithoutRef<'button'> {
  variant: 'primary' | 'secondary',
  block?: boolean,
}

const primaryColor = '#00adef';

const Button = styled.button<ButtonProps>`
  height: 40px;
  border: none;
  padding: 8px 12px;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  display: ${({ block }) => (block ? 'flex' : 'inline-flex')};

  ${({ variant }) => variant === 'primary' && css`
    background-color: ${primaryColor};
    color: white;
    transition: 300ms background-color;

    &:hover {
      background-color: ${darken(5, primaryColor)};
    }
  `}

  ${({ variant }) => variant === 'secondary' && css`
    background-color: white;
    color: ${primaryColor};
    border: 1px solid ${primaryColor};

    &:hover {
      border-color: ${darken('2%', primaryColor)};
      color: ${darken('2%', primaryColor)};
    }
  `}

`;

export const ButtonsGroup = styled.div`
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  width: 100%;

  button {
    width: calc(50% - 8px);
    flex: calc(50% - 8px);
    max-width: calc(50% - 8px);
  }
`;

export default Button;
