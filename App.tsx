import React from 'react';

// Handle navigation between screens
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Pages
import HomeScreen from './pages/HomeScreen/HomeScreen';
import RightCredentials from './pages/RightCredentials/right-credentials';
import NotFound from './pages/NotFound/not-found';
import WrongCredentials from './pages/WrongCredentials/WrongCredentials';

const { Navigator, Screen } = createStackNavigator();

class App extends React.Component{
  render(){
    return(
      <NavigationContainer>
        <Navigator screenOptions={{ headerShown: false }}>
          <Screen name="HomeScreen" component={HomeScreen} />
          <Screen name="RightCredentials" component={RightCredentials} />
          <Screen name="WrongCredentials" component={WrongCredentials} />
          <Screen name="NotFound" component={NotFound} />
        </Navigator>
      </NavigationContainer>
    )
  }
}

export default App;