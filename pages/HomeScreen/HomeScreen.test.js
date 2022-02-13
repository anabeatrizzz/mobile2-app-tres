import React from 'react';
import { render } from '@testing-library/react-native'
import HomeScreen from "./HomeScreen";

describe('shows mainly components', () => {
  it('login and password inputs', () => {
    const { getAllByTestId } = render(<HomeScreen />)
    expect(getAllByTestId(/input[1-2]/).length).toBe(2)
  })

  it('enter and signup buttons', () => {
    const { getAllByTestId } = render(<HomeScreen />)
    expect(getAllByTestId(/btn[1-2]/).length).toBe(2)
  })
})

describe('funcionality of buttons', () => {
  it('enter button navigates to wrong credentials screen', () => {

  })

  it('enter button navigates to right credentials screen', () => {

  })

  it('sign up button navigates to not found screen', () => {

  })
})