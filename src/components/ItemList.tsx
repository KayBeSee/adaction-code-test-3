import React from 'react';
import styled from 'styled-components';

import { white, blue900, gray400 } from '../utils/colors'

import { fizzBuzzer } from '../utils/fizzBuzz'

export const ItemList = ({ items }: { items: number[] }) => (
  <ItemsContainer>
    {items.map((item, index) => <Item key={index} role="item">{fizzBuzzer(index + 1)}</Item>)}
  </ItemsContainer>
)

const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: ${white};
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  border-radius: 0.375em;
  border: 1px solid ${gray400};
  padding: 2em;
  margin-top: 1em;
`;

const Item = styled.div`
  padding: 1em;
  margin: 0.5em 1em;
  background: ${white};
  color: ${blue900};
  font-weight: 500;
  border-radius: 0.375em;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  border: 1px solid ${gray400};
`;