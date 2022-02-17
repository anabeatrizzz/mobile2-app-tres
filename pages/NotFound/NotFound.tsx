import React from 'react';
import { Text, View, Image, SafeAreaView } from 'react-native';
import { useRoute } from '@react-navigation/core';
import tsPagina404 from '../../assets/ts-pagina404.gif';
import tsPQStatic from '../../assets/ts-pagina404-static.png';
import styles from './NotFound.css';
import Button from '../../components/button/Button';

export default function NotFound({ navigation, route }) {
  //const routeName = useRoute().name

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
        <Text style={styles.txt}>Esta página não existe AINDA!</Text>
        <Text>{'\n'}</Text>
        <Button navigation={navigation} />
      </View>
    </SafeAreaView>
  )
}