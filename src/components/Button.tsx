import React from 'react';
import styled, { css } from 'styled-components';

import { mobile } from '../utils/media';
import { white, black, gray400 } from '../utils/colors';

interface Props {
  onClick: () => void;
  backgroundColor: string;
  textColor: string;
  border?: boolean;
  children: React.ReactChild,
  className?: string
}

export const Button = ({
  onClick,
  backgroundColor,
  textColor,
  border = true,
  children,
  className
}: Props) => (
  <ButtonSpanWrapper border={border} className={className}>
    <ButtonWrapper
      backgroundColor={backgroundColor}
      onClick={onClick}
      textColor={textColor}
      border={border}
    >
      {children}
    </ButtonWrapper>
  </ButtonSpanWrapper>
);

const ButtonSpanWrapper = styled.span<{ border: boolean }>`
  box-shadow: ${p => p.border ? '0 1px 2px 0 rgba(0, 0, 0, 0.05)' : 'none'};
  border-radius: 0.375rem;
  display: inline-flex;
  width: fit-content;

  ${mobile(css`
    width: 100% !important;
    margin-left: 0em;
    margin-bottom: 1em;
  `)}
`;

const ButtonWrapper = styled.button<{ backgroundColor: string, textColor: string, border: boolean }>`
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
  border-radius: 0.375rem;
  font-size: 1rem;
  line-height: 1.25rem;
  cursor: pointer;
  border: ${p => !p.border ? '1px solid transparent' : p.backgroundColor === white ? `1px solid ${gray400}` : `1px solid ${p.backgroundColor}`};
  font-family: nimbus-sans, "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-weight: 500;
  background: ${p => p.backgroundColor ? p.backgroundColor : white};
  color: ${p => p.textColor ? p.textColor : black};
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    opacity: 0.9;
  }

  ${mobile(css`
    width: 100%;
  `)}
`;