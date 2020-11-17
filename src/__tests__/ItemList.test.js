import React from 'react';
import { render, screen } from '@testing-library/react'
import { ItemList } from '../components';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

describe('List component', () => {
  test('should render all items in list', () => {
    render(<ItemList items={items} />);

    const renderedItems = screen.getAllByRole('item');
    expect(renderedItems.length).toEqual(items.length);
  });

  // this is technically an integration test, testing if fizzBuzzer within
  // the ItemList component is running correctly
  test('should render correct text content', () => {
    render(<ItemList items={items} />);

    const renderedItems = screen.getAllByRole('item');
    expect(renderedItems[1].textContent).toEqual('2');
    expect(renderedItems[2].textContent).toEqual('lucky');
    expect(renderedItems[4].textContent).toEqual('buzz');
    expect(renderedItems[5].textContent).toEqual('fizz');
    expect(renderedItems[14].textContent).toEqual('fizzbuzz');
  });
}) 