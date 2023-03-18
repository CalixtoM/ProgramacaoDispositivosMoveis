import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';



class App extends Component{
  render(){
    return(
      <View style={styles.container}>
        <View style={styles.tituloApp}>
          <Text style={styles.title}>Abertura de Conta</Text>
        </View>
        <View style={styles.campos}>
          <Text style={styles.idCampos}>Nome:</Text>
          <TextInput style={styles.input} placeholder="informe seu Nome"/>
          <Text style={styles.idCampos}>Idade:</Text>
          <TextInput style={styles.input} placeholder="informe sua Idade"/>
        </View>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },

  tituloApp: {
    alignItems: 'center',
    paddingBottom: 25
  },
  
  title: {
    justifyContent: 'center',
    TextAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    

  },
  input: {
    paddingBottom: 5
  },

  campos: {
    padding: 5
  },
  idCampos: {
    fontWeight: 'bold',
    fontSize: 16
  }
});