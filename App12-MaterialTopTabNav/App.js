import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
 
import Dados from './src/pages/Dados';
import Experiencia from './src/pages/Experiencia';
import Formacao from './src/pages/Formacao';
 
const Tab = createMaterialTopTabNavigator();
 
export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name='Dados' component={Dados} />
        <Tab.Screen name='Experiencia' component={Experiencia} />
        <Tab.Screen name='Formacao' component={Formacao} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
