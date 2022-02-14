import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import tsErradas from '../../assets/ts-erradas.gif';
import tsErradasStatic from '../../assets/ts-erradas-static.png';
import styles from './WrongCredentials.css';

export default function WrongCredentials() {
  const navigation = useNavigation();
  function handleIndex(){
    navigation.navigate('HomeScreen')
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          defaultSource={tsErradasStatic}
          style={styles.img}
          source={tsErradas}
        />
        <Text>{'\n'}</Text>
        <Text style={styles.TSTxt}>Twilight Sparkle diz:</Text>
        <Text testID="errorTxt" style={styles.txt}>Estas não são as credenciais corretas!</Text>
        <TouchableOpacity
          onPress={() => handleIndex()}
          style={styles.btn}
        >
          <Text style={styles.btnTxt}>Volte à página inicial</Text>
        </TouchableOpacity>
        <Text style={styles.txt}>e me peça ajuda!</Text>
      </View>
    </SafeAreaView>
  )
}