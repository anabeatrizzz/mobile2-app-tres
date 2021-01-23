import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity } from 'react-native';
import ts from "../assets/ts.gif";
import tsStatic from '../assets/ts-static.gif';

class Inicio extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      login: "", senha: "", dica: ""
    }
  }
  handleEntrar = () => {
    if(this.state.login == "Paulo".toUpperCase() && this.state.senha == "TwilightSparkle".toUpperCase()){
      this.props.navigation.navigate("Login feito!")
    } else {
      this.props.navigation.navigate("Credenciais erradas")
    }
  }

  handleCadastrar = () => {
    this.props.navigation.navigate("Página não existente")
  }

  handleDica = () => {
    this.setState({
      dica: "Twilight Sparkle diz: NOME DO PROFESSOR DE MOBILE II e MEU NOME"
    })
  }
  
  render(){
    return(
      <>
        <View style={estilos.aplicativo}>
          <View>
            <TouchableOpacity activeOpacity={100} onPress={this.handleDica}>
              <Image defaultSource={tsStatic} style={estilos.gifStyle} source={ts} />
            </TouchableOpacity>
          </View>
          <View style={estilos.conteudo}>
            <TextInput style={estilos.entrada} placeholder="Login" onChangeText={ (login) => {this.setState({ login })} }
            />
            <TextInput style={estilos.entrada} placeholder="Senha" secureTextEntry={true} onChangeText={ (senha) => {this.setState({ senha })} }
            />
            <TouchableOpacity onPress={this.handleEntrar} style={estilos.botao}
            >
              <Text style={estilos.textoBotao}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={this.handleCadastrar} style={estilos.cadastrar}
            >
              <Text style={estilos.cadastrarFonte}>Cadastrar</Text>
            </TouchableOpacity>
            <Text>{'\n'}</Text>
            <Text style={estilos.textoDicaUm}>{this.state.dica.substr(0, 21)}</Text>
            <Text style={estilos.textoDicaDois}>{this.state.dica.substr(21)}</Text>
          </View>
        </View>
      </>
    )
  }
}

const estilos = StyleSheet.create({
  aplicativo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f7bad5'
  },
  gifStyle: {
    width: 200,
    height: 200
  },
  conteudo: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '90%'
  },
  entrada: {
    backgroundColor: '#FFF',
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 15,
    height: 30,
    padding: '1%'
  },
  botao: {
    backgroundColor: '#EA428B',
    width: '90%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 10
  },
  textoBotao: {
    fontSize: 15,
    color: "#FFF",
    fontWeight: 'bold'
  },
  cadastrar: {
    backgroundColor: '#243870',
    width: '90%',
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  cadastrarFonte: {
    color: "#FFF",
    fontWeight: 'bold'
  },
  textoDicaUm: {
    fontWeight: 'bold',
    color: '#243870'
  },
  textoDicaDois: {
    color: '#243870'
  }
})

export default Inicio;