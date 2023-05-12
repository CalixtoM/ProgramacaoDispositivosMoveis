import React from 'react';
import { View, Text, StyleSheet, TextInput, Switch, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// You can import from local files
import AssetExample from './components/AssetExample';


import Home from './src/pages/Home';
import Resultado from './src/pages/Resultado';


const Stack = createStackNavigator();


export default function App(){

  

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          title:'Início',
          headerStyle:{
            backgroundColor: 'orange'
          },
          headerTintColor: '#FFF',
          headerShown: false,
        }} />
        <Stack.Screen name="Resultado" component={Resultado} />
      </Stack.Navigator>
    </NavigationContainer>

    
    
  )
}


