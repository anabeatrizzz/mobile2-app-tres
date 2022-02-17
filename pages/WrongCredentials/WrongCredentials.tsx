import React from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/core';
import tsErradas from '../../assets/ts-erradas.gif';
import tsErradasStatic from '../../assets/ts-erradas-static.png';
import styles from './WrongCredentials.css';
import Button from '../../components/button/Button';

export default function WrongCredentials({ navigation }) {
  //const routeName = useRoute().name
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          defaultSource={tsErradasStatic}
          style={styles.img}
          source={tsErradas}
        />

        <Text>{'\n'}</Text>

        <Text style={styles.TSTxt}>
          Twilight Sparkle diz:
        </Text>
        <Text
          testID="errorTxt"
          style={styles.txt}
        >
          Estas não são as credenciais corretas!
        </Text>

        <Button navigation={navigation} />

        <Text style={styles.txt}>
          e me peça ajuda!
        </Text>
      </View>
    </SafeAreaView>
  )
}