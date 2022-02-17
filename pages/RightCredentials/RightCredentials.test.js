import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react-native';
import RightCredentials from './RightCredentials';

describe('shows mainly components', () => {
  afterEach(cleanup)
  it('back to home screen button', () => {
    const { getByTestId } = render(<RightCredentials />)
    const backToHomeScreenBtn = getByTestId('backToHomeScreenBtn')
    expect(backToHomeScreenBtn).toBeTruthy()
  })

  it('text informing that credentials are right', () => {
    const { getByTestId } = render(<RightCredentials />)
    const successTxt = getByTestId('successTxt')
    expect(successTxt).toBeTruthy()
  })
})

describe('button press', () => {
  afterEach(cleanup)
  it('button navigates to home screen', async () => {
    const navigate = jest.fn();
    useRoute.mockReturnValue({ name: "RightCredentials" })
    const { getByTestId } = render(<RightCredentials navigation={{ navigate }} />)
    const backToHomeScreenBtn = await getByTestId('backToHomeScreenBtn')
    fireEvent.press(backToHomeScreenBtn)
    expect(navigate).toHaveBeenCalledWith("HomeScreen")
  })
})