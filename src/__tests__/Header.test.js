import React from 'react';
import { render, screen } from '@testing-library/react'
import { Header } from '../components';

describe('Header component', () => {
  // this is technically an integration test since it tests the button rendered in the header
  test('should render adjust range button', () => {
    const setAdjustRangeModalOpen = jest.fn();

    render(<Header
      setAdjustRangeModalOpen={setAdjustRangeModalOpen}
    />);

    const adjustRangeButton = screen.getByRole('button');
    expect(adjustRangeButton.textContent).toEqual('Adjust Range');
    adjustRangeButton.click();
    expect(setAdjustRangeModalOpen).toHaveBeenCalled();
  });
}) 