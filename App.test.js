import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import App from './App';
import HomeScreen from './pages/HomeScreen/HomeScreen';

describe('funcionality of HomeScreen buttons', () => {
  it('enter button navigates to wrong credentials screen', () => {
    const navigate = jest.fn();
    const { getByTestId } = render(<HomeScreen navigation={{ navigate }} />);
    fireEvent.press(getByTestId("btn1"));
    expect(navigate).toHaveBeenCalledWith({ key: "WrongCredentials" });
    //expect(getByTestId("errorTxt")).toBeTruthy()
    // const { getByTestId, getByText, findByText } = render(<HomeScreen />)

    // const enterBtn = getByTestId("btn1")
    // const loginInput = getByTestId("input1")
    // const passwordInput = getByTestId("input2")
    
    // fireEvent.changeText(loginInput, "abc")
    // fireEvent.changeText(passwordInput, "def")
    // fireEvent.press(enterBtn)

    // const textError = getByTestId("errorTxt")

    // expect(textError).toBeTruthy()
  })

  // it('enter button navigates to right credentials screen', () => {

  // })

  // it('sign up button navigates to not found screen', () => {

  // })
})