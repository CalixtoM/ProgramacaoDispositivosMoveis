import React, { Component, useState } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';



export default function App() {
  const [cont, setCont] = useState(0);
  
  
  function somar(){
    setCont(cont+1);
  }

  function subtrair(){
    if(cont > 0){
      setCont(cont-1);
    }
    
  }

    return(
      <View style={styles.container}>
        <Text style={styles.title}>Contador de Pessoas</Text>
        <Text style={styles.contador}>{ cont }</Text>
        <Button title="Somar" onPress={somar}/>
        <View style={styles.botao}>
          <Button color = 'red' title="Subtrair" onPress={subtrair} />
        </View>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    Fontcolor: 'Red',
  },
  contador: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    paddingBottom: 30
  },
  botao: {
    paddingTop: 10
  }

});