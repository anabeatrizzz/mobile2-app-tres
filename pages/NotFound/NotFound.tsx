import React from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import tsPagina404 from '../../assets/ts-pagina404.gif';
import tsPQStatic from '../../assets/ts-pagina404-static.png';
import styles from './NotFound.css';
import Button from '../../components/button/Button';

export default function NotFound({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Image
          defaultSource={tsPQStatic}
          style={styles.img}
          source={tsPagina404}
        />
        <Text>{'\n'}</Text>
        <Text style={styles.TSTxt}>Twilight Sparkle diz:</Text>
        <Text testID="inexistentScreenTxt" style={styles.txt}>Esta página não existe AINDA!</Text>
        <Text>{'\n'}</Text>
        <Button btnTxt={"Volte"} bgColor={"#EA428B"} btnColor={"#fce8f1"} navigation={navigation} />
      </View>
    </SafeAreaView>
  )
}