import React from 'react';
import { render, screen } from '@testing-library/react'
import { ItemReport } from '../components';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

describe('ItemReport component', () => {
  test('should render all items in list', () => {
    render(<ItemReport items={items} />);

    const renderedItems = screen.getAllByRole('report-item');
    expect(renderedItems.length).toEqual(5); // 5 is the number of FizzBuzzReturnValues there are
  });

  // this is technically an integration test, testing if getFizzBuzzTotals within
  // the ItemReport component is running correctly
  test('should render correct text content', () => {
    render(<ItemReport items={items} />);

    const renderedItems = screen.getAllByRole('report-item');
    expect(renderedItems[0].textContent).toEqual('7integer');
    expect(renderedItems[1].textContent).toEqual('3fizz');
    expect(renderedItems[2].textContent).toEqual('2buzz');
    expect(renderedItems[3].textContent).toEqual('1fizzbuzz');
    expect(renderedItems[4].textContent).toEqual('2lucky');
  });
}) 