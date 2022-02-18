import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import styles from './Button.css';

export default function Button({ btnTxt, btnColor, bgColor, navigation }) {
  function handleIndex() {
    navigation.navigate('HomeScreen')
  }

  return (
    <TouchableOpacity
      testID="backToHomeScreenBtn"
      onPress={() => handleIndex()}
      style={[styles.btn, { backgroundColor: bgColor }]}
    >
      <Text style={[styles.btnTxt, { color: btnColor }]}>
        {btnTxt} à página inicial
      </Text>
    </TouchableOpacity>
  )
}