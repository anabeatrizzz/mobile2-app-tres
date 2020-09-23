import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView, StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import tsErradas from '../assets/ts-erradas.gif';
import tsErradasStatic from '../assets/ts-erradas-static.png';

class Erradas extends React.Component{
	constructor(props){
		super(props)
	}

	handleIndex = () => {
		this.props.navigation.navigate("Página inicial");
	}

	render(){
		return(
			<>
				<View style={estilos.conteudo}>
					<Image defaultSource={tsErradasStatic} style={estilos.imagem} source={tsErradas} />
					<Text>{'\n'}</Text>
					<Text style={estilos.textoTS}>Twilight Sparkle diz:</Text>
					<Text style={estilos.texto}>Estas não são as credenciais corretas!</Text>
					<TouchableOpacity onPress={this.handleIndex} style={estilos.botao}>
						<Text style={estilos.textoBotao}>Volte à página inicial</Text>
					</TouchableOpacity>
					<Text style={estilos.texto}>e me peça ajuda!</Text>
				</View>
			</>
		)
	}
}

const estilos = StyleSheet.create({
  conteudo: {
  	flex: 1,
  	backgroundColor: "#cf1767",
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  imagem: {
  	height: 250,
  	width: 250
  },
  texto: {
  	fontSize: 20,
  	fontWeight: 'bold',
  	color: '#CC9CDF',
  	textAlign: 'center',
  	justifyContent: 'center',
  	alignItems: 'center'
  },
  textoTS: {
  	fontSize: 20,
  	fontWeight: 'bold',
  	color: '#CC9CDF',
  	textDecorationLine: 'underline'
  },
  botao: {
  	backgroundColor: '#243870',
    width: '90%',
    height: 30,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },
  textoBotao: {
    fontSize: 15,
    fontWeight: 'bold',
  	color: '#c5d0ec'
  }
})

export default Erradas;