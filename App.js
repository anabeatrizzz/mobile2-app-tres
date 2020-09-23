import React from 'react';

// Importações que lidam com a navegação entre páginas
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Páginas
import Inicio from './recursos/inicial.js';
import Entrou from './recursos/entrou.js';
import Pagina404 from './recursos/qzq.js';
import Erradas from './recursos/erradas.js';

const { Navigator, Screen } = createStackNavigator();

class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="Página inicial" component={Inicio} />
          <Screen name="Login feito!" component={Entrou} />
          <Screen name="Credenciais erradas" component={Erradas} />
          <Screen name="Página não existente" component={Pagina404} />
        </Navigator>
      </NavigationContainer>
    )
  }
}

export default App;