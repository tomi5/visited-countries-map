import styled, { css } from 'styled-components';
import { StyledIconBase } from '@styled-icons/styled-icon';
import { flexMixin, transitionMixin } from '../../theme/mixins';

type ButtonProps = {
  padding?: string;
  name?: ButtonName;
  posAbsolute?: boolean;
};

type IconProps = Pick<ButtonProps, 'padding'> & {
  marginRight?: 'string';
};

export const StyledButton = styled.button<ButtonProps>`
  ${flexMixin({
    align: 'center',
    justify: 'center',
  })};

  ${({ theme }) => css`
    background: ${theme.buttonBcg};
    color: ${theme.text};
    font-size: ${theme.fontSize.m};
    font-weight: ${theme.fontWeight.medium};
  `};

  padding: ${({ padding }) => padding || 0};
  height: 35px;
  line-height: 0;
  border: none;
  cursor: pointer;
  ${transitionMixin({ properties: ['background', 'color'] })};

  &:hover {
    background: ${({ theme }) => theme.buttonBcgHover};
  }
  &:focus {
    outline: 1px solid #c7c7c7;
  }

  /* Styles for buttons with props name  */
  ${({ posAbsolute }) =>
    posAbsolute &&
    css`
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    `}

  /* styles for information button */
  ${({ name }) =>
    name === 'info' &&
    css`
      left: 20px;
      border-radius: 50%;

      &:hover {
        background: ${({ theme }) => theme.green};
        color: white;
      }
    `}

  /* styles for toogleMode button */ 
  ${({ name }) =>
    name === 'mode' &&
    css`
      right: 20px;
      border-radius: 50%;
      width: 35px;
      font-size: 0;
      ${({ theme }) => theme.mq.s} {
        font-size: inherit;
        width: auto;
        min-width: 130px;
        border-radius: 10px;
      }
    `}
    
  /* styles for close button */
  ${({ name }) =>
    name === 'close' &&
    css`
      border-radius: 50%;
      align-self: flex-end;
    `}

     /* styles for reset button */
  ${({ name, theme }) =>
    name === 'reset' &&
    css`
      margin-left: auto;
      border-radius: 10px;

      &:hover {
        background: inherit;
        color: ${theme.red100};
      }
    `}

      /* styles for delete button */
  ${({ name, theme }) =>
    name === 'delete' &&
    css`
      border-radius: 10px;

      &:hover {
        background: inherit;
        color: ${theme.red100};
      }
    `}
    
  /* styles for cancel/confirm buttons */
  ${({ name }) =>
    (name === 'cancel' || name === 'confirm') &&
    css`
      margin: 10px;
      padding: 10px 15px;
      border-radius: 10px;
      color: ${({ theme }) => theme.light};
    `}

    ${({ name }) => {
    if (name === 'cancel') {
      return css`
        background: ${({ theme }) => theme.red100};
        ${transitionMixin({ properties: ['opacity'] })};
        &:hover {
          background: ${({ theme }) => theme.red100};
          opacity: 0.9;
        }
      `;
    }
    if (name === 'confirm') {
      return css`
        background: ${({ theme }) => theme.green};
        ${transitionMixin({ properties: ['opacity'] })};
        &:hover {
          background: ${({ theme }) => theme.green};
          opacity: 0.9;
        }
      `;
    }
  }}
`;

export const IconStyleWrapper = styled.div<IconProps>`
  height: 100%;
  padding: ${({ padding }) => (padding ? padding : '0')};
  ${StyledIconBase} {
    height: 100%;
    margin-right: ${({ marginRight }) => (marginRight ? marginRight : '0')};
  }
`;
