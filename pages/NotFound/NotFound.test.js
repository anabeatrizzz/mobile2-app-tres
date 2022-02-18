import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import NotFound from './NotFound';

describe('shows mainly components', () => {
  afterEach(cleanup)
  it('back to home screen button', () => {
    const { getByTestId } = render(<NotFound />)
    const backToHomeScreenBtn = getByTestId('backToHomeScreenBtn')
    expect(backToHomeScreenBtn).toBeTruthy()
  })

  it('text informing that screen doesnt exists yet', () => {
    const { getByTestId } = render(<NotFound />)
    const inexistentScreenTxt = getByTestId('inexistentScreenTxt')
    expect(inexistentScreenTxt).toBeTruthy()
  })
})

describe('button press', () => {
  afterEach(cleanup)
  it('button navigates to home screen', async () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<NotFound navigation={{ navigate }} />)
    const backToHomeScreenBtn = await getByTestId('backToHomeScreenBtn')
    fireEvent.press(backToHomeScreenBtn)
    expect(navigate).toHaveBeenCalledWith("HomeScreen")
  })
})