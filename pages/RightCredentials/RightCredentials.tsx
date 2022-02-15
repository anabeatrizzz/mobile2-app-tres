import React from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import tsEntrou from '../../assets/ts-entrou.gif';
import tsEntrouStatic from '../../assets/ts-entrou-static.png';
import styles from './RightCredentials.css';
import Button from '../../components/button/Button';

export default function RightCredentials({ navigation, route }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          defaultSource={tsEntrouStatic}
          style={styles.img}
          source={tsEntrou}
        />

        <Text>{'\n'}</Text>
        
        <Text style={styles.TSTxt}>
          Twilight Sparkle diz:
        </Text>
        <Text style={styles.txt}>
          Credenciais corretas! Parabéns! Agora você pode...
        </Text>
        
        <Text>{'\n'}</Text>
        
        <Button />
      </View>
    </SafeAreaView>
  )
}