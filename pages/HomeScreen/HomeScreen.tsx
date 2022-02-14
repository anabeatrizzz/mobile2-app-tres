import React, { useState } from 'react';
import { Text, View, Image, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import ts from "../../assets/ts.gif";
import tsStatic from '../../assets/ts-static.gif';
import { LOGIN, PASSWORD } from '@env';
import styles from './HomeScreen.css';

export default function HomeScreen({ navigation }) {
  const [state, setState] = useState({
    login: "",
    password: "",
    tip: ""
  });

  function handleLogin() {
    if (state.login == LOGIN.toUpperCase() && state.password == PASSWORD.toUpperCase()) {
      navigation.navigate({ key: 'RightCredentials'})
    } else {
      navigation.navigate({ key: 'WrongCredentials' })
    }
  }

  function handleSignUp() {
    navigation.navigate({ key: 'NotFound' })
  }

  function handleTip() {
    setState({
      ...state,
      tip: "Twilight Sparkle diz: NOME DO PROFESSOR DE MOBILE II e MEU NOME"
    })
  }

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity
          activeOpacity={100}
          onPress={() => handleTip()}
        >
          <Image
            defaultSource={tsStatic}
            style={styles.gifStyle}
            source={ts}
          />
        </TouchableOpacity>
      </View>
      
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          placeholder="Login"
          testID="input1"
          key="loginInput"
          onChangeText={
            (login) => {
              setState({ ...state, login })
            }
          }
        />

        <TextInput
          style={styles.input}
          placeholder="Password"
          testID="input2"
          key="passwordInput"
          secureTextEntry={true}
          onChangeText={
            (password) => {
              setState({ ...state, password })
            }
          }
        />
        
        <TouchableOpacity
          onPress={() => handleLogin()}
          style={styles.btn}
          testID="btn1"
        >
          <Text style={styles.btnTxt}>Entrar</Text>
        </TouchableOpacity>
        
        <TouchableOpacity
          onPress={() => handleSignUp()}
          style={styles.signUp}
          testID="btn2"
        >
          <Text style={styles.signUpTxt}>Cadastrar</Text>
        </TouchableOpacity>
        
        <Text>{'\n'}</Text>
        
        <Text style={styles.firstTipTxt}>
          {state.tip.substr(0, 21)}
        </Text>
        
        <Text style={styles.secondTipTxt}>
          {state.tip.substr(21)}
        </Text>
      </View>
    </SafeAreaView>
  )
}