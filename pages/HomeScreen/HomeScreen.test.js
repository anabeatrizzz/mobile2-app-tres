import React from 'react';
import { render, fireEvent } from '@testing-library/react-native'
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
  it('enter button navigates to wrong credentials screen', async () => {
    const { getByTestId, getByText } = render(<HomeScreen />)

    const enterBtn = await getByTestId("btn1")
    const loginInput = await getByTestId("input1")
    const passwordInput = await getByTestId("input2")
    
    fireEvent.changeText(loginInput, "abc")
    fireEvent.changeText(passwordInput, "def")
    fireEvent.press(enterBtn)

    const textError = await getByText("Estas não são as credenciais corretas!")

    expect(textError).toBeTruthy()
  })

  // it('enter button navigates to right credentials screen', () => {

  // })

  // it('sign up button navigates to not found screen', () => {

  // })
})