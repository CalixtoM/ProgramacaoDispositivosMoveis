import React, { Component, useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';



export default function App(){
  const [resultado, setResultado] = useState(0);
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  
  function multiplicar(){
    if((n1 === '') || (n2 === '')){
      alert("Digita ai!");
    }
    setResultado(n1 * n2);

  }

    return(
      <View style={styles.container}>
        <Text style={styles.title}>Multiplicador de Números</Text>
        <TextInput
      style={styles.input}
      placeholder="Digite o primeiro número"
      onChangeText={ (valor) => setN1(valor)}
      keyboardType="numeric"
      />
        <TextInput
      style={styles.input}
      placeholder="Digite o segundo número"
      onChangeText={ (valor) => setN2(valor)}
      keyboardType="numeric"
      />
        <View style={styles.botao}>
          <Button color = 'purple' title="Calcular" onPress={multiplicar} />
        </View>
        <Text style={styles.title}>Resultado Da Multiplicação</Text>
        <Text style={styles.contador}>{ resultado }</Text>
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
    margin: 12
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    
  }

});