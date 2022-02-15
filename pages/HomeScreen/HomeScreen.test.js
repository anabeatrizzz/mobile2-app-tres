import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen from "./HomeScreen";
import { LOGIN, PASSWORD } from '@env'

describe('shows mainly components', () => {
  it('login and password inputs', () => {
    const { getAllByTestId } = render(<HomeScreen />)
    const inputsLength = getAllByTestId(/input[1-2]/).length
    expect(inputsLength).toBe(2)
  })

  it('enter and signup buttons', () => {
    const { getAllByTestId } = render(<HomeScreen />)
    const btnsLength = getAllByTestId(/btn[1-2]/).length
    expect(btnsLength).toBe(2)
  })
})

describe('funcionality of buttons', () => {
  it('enter button navigates to wrong credentials screen', async () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<HomeScreen navigation={{ navigate }} />)
    const enterBtn = await getByTestId("btn1")
    const loginInput = getByTestId("input1")
    const passwordInput = getByTestId("input2")
    
    fireEvent.changeText(loginInput, "abc")
    fireEvent.changeText(passwordInput, "def")
    fireEvent.press(enterBtn)

    expect(navigate).toHaveBeenCalledWith("WrongCredentials");
  })

  it('enter button navigates to right credentials screen', async () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<HomeScreen navigation={{ navigate }} />)
    const enterBtn = await getByTestId("btn1")
    const loginInput = getByTestId("input1")
    const passwordInput = getByTestId("input2")
    
    fireEvent.changeText(loginInput, LOGIN.toUpperCase())
    fireEvent.changeText(passwordInput, PASSWORD.toUpperCase())
    fireEvent.press(enterBtn)

    expect(navigate).toHaveBeenCalledWith("RightCredentials");
  })

  it('sign up button navigates to not found screen', async () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<HomeScreen navigation={{ navigate }} />)
    const signUpBtn = await getByTestId("btn2")
    
    fireEvent.press(signUpBtn)
    
    expect(navigate).toHaveBeenCalledWith("NotFound");
  })

  it('ponei image shows text', () => {
    const { getByTestId } = render(<HomeScreen />)
    const poneiImg = getByTestId("poneiBtn")
    const firstTipTxt = getByTestId("firstTipTxt")
    const secondTipTxt = getByTestId("secondTipTxt")
    
    fireEvent.press(poneiImg)
    
    expect(firstTipTxt).toBeTruthy()
    expect(secondTipTxt).toBeTruthy()
  })
})