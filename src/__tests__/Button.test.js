import React from 'react';
import { render, screen } from '@testing-library/react'
import { Button } from '../components';

describe('Button component', () => {
  test('calls onClick function when button is clicked', () => {
    const onClickFunction = jest.fn();
    render(<Button onClick={onClickFunction}>Click Me!</Button>);

    screen.getByRole('button').click();
    expect(onClickFunction).toHaveBeenCalled();
  });

  test('displays children content correctly', () => {
    render(<Button>Click Me!</Button>);
    expect(screen.getByRole('button').textContent).toEqual('Click Me!');
  })
}) 