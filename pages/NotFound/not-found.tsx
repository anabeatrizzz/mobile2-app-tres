import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import tsPagina404 from '../../assets/ts-pagina404.gif';
import tsPQStatic from '../../assets/ts-pagina404-static.png';

class Pagina404 extends React.Component{
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
          <Image defaultSource={tsPQStatic} style={estilos.imagem} source={tsPagina404} />
          <Text>{'\n'}</Text>
          <Text style={estilos.textoTS}>Twilight Sparkle diz:</Text>
          <Text style={estilos.texto}>Esta página não existe AINDA!</Text>
          <Text>{'\n'}</Text>
          <TouchableOpacity onPress={this.handleIndex} style={estilos.botao}>
            <Text style={estilos.textoBotao}>Volte à página inicial</Text>
          </TouchableOpacity>
        </View>
      </>
    )
  }
}

const estilos = StyleSheet.create({
  conteudo: {
    flex: 1,
    backgroundColor: "#c5d0ec",
    alignItems: 'center',
    justifyContent: 'center'
  },
  imagem: {
    width: 250,
    height: 250
  },
  textoTS: {
    color: '#243870',
    fontSize: 20,
    fontWeight: 'bold',
    textDecorationLine: 'underline'
  },
  texto: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#243870',
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#EA428B',
    width: '90%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  textoBotao: {
    fontSize: 15,
    color: '#fce8f1',
    fontWeight: 'bold'
  }
})

export default Pagina404;