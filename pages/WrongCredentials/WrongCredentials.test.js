import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import WrongCredentials from './WrongCredentials'

describe('shows mainly components', () => {
  it('back to home screen button', () => {
    const { getByTestId } = render(<WrongCredentials />)
    const backToHomeScreenBtn = getByTestId('backToHomeScreenBtn')
    expect(backToHomeScreenBtn).toBeTruthy()
  })

  it('text informing that credentials are wrong', () => {
    const { getByTestId } = render(<WrongCredentials />)
    const errorTxt = getByTestId('errorTxt')
    expect(errorTxt).toBeTruthy()
  })
})

describe('button press', () => {
  it('button navigates to home screen', async () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<WrongCredentials navigation={{ navigate }} />)
    const backToHomeScreenBtn = await getByTestId('backToHomeScreenBtn')
    fireEvent.press(backToHomeScreenBtn)
    expect(navigate).toHaveBeenCalledWith("HomeScreen")
  })
})