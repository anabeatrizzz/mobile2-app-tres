import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/core';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.css';

export default function Button({ navigation }) {
  // const navigation = useNavigation();
  const route = useRoute().name;

  function handleIndex(){
    navigation.navigate('HomeScreen')
  }

  function setBgAndBtnColor(){
    let bgColor = ""
    let btnColor = ""
    switch(route){
      case "RightCredentials":
      case "WrongCredentials":
        bgColor = "#243870"
        btnColor = "#c5d0ec"
        break;
      case "NotFound":
        bgColor = "#EA428B"
        btnColor = "#fce8f1"
        break;
    }

    return {
      bgColor,
      btnColor
    }
  }
  
  return (
    <TouchableOpacity
      testID="backToHomeScreenBtn"
      onPress={() => handleIndex()}
      style={[styles.btn, { backgroundColor: setBgAndBtnColor().bgColor}]}
    >
      {
        route === "RightCredentials" ? (
          <Text style={[styles.btnTxt, { color: setBgAndBtnColor().btnColor}]}>
            Voltar à página inicial
          </Text>
        ) : (
          <Text style={[styles.btnTxt, { color: setBgAndBtnColor().btnColor}]}>
            Volte à página inicial
          </Text>
        )
      }
    </TouchableOpacity>
  )
}