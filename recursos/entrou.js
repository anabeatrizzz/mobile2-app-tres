import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import tsEntrou from '../assets/ts-entrou.gif';
import tsEntrouStatic from '../assets/ts-entrou-static.png';

class Entrou extends React.Component{
  constructor(props){
    super(props)
  }

  handleIndex = () => {
    this.props.navigation.navigate("Página inicial")
  }

  render(){
    return(
      <>
        <View style={estilos.conteudo}>
          <Image defaultSource={tsEntrouStatic} style={estilos.imagem} source={tsEntrou} />
          <Text>{'\n'}</Text>
          <Text style={estilos.textoTS}>Twilight Sparkle diz:</Text>
          <Text style={estilos.texto}>Credenciais corretas! Parabéns! Agora você pode...</Text>
          <Text>{'\n'}</Text>
          <TouchableOpacity onPress={this.handleIndex} style={estilos.botao}>
            <Text style={estilos.textoBotao}>Voltar à página inicial</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}

const estilos = StyleSheet.create({
  conteudo: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f7bad5'
  },
  imagem: {
    width: 250,
    height: 250
  },
  textoTS: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#EA428B',
    textDecorationLine: 'underline'
  },
  texto: {
    color: '#EA428B',
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#243870',
    width: '90%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  textoBotao: {
    color: '#c5d0ec',
    fontSize: 15,
    fontWeight: 'bold'
  }
})

export default Entrou;