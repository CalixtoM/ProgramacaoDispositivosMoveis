import React, { Component, useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

img = 'http://complemento.veja.abril.com.br/economia/calculadora-combustivel/img/abre.jpg';

export default function App() {
  const [resultado, setResultado] = useState('');
  const [gasolina, setGasolina] = useState(0);
  const [alcool, setAlcool] = useState(0);
  
  function calcular(){
    if((gasolina === '') || (alcool === '')){
      alert("Digita ai!");
      setResultado(" ");
    }
    
    res = alcool / gasolina;
    if(res > 0.7){
      setResultado('Resultado: Gasolina é mais vantajosa')
    }else{
      setResultado('Resultado: Alcool é mais vantajoso')
    }
    //this.setState({resultado: res})

  }

    return(
      <View style={styles.container}>
        <View style={styles.imagemView}>
          <Image source={{ uri: img}} style={{width: 350, height: 185, alignItems: 'center'}}/>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Valor do Alcool" placeholderTextColor='white'
          onChangeText={ (valor) => setAlcool(valor)}
          keyboardType="numeric"
      />
        <TextInput
          style={styles.input}
          placeholder="Valor da Gasolina" placeholderTextColor='white'
          onChangeText={ (valor) => setGasolina(valor)}
          keyboardType="numeric"
      />
        <View style={styles.botao}>
          <Button color = '#1b92f8' title="Calcular" onPress={calcular} />
        </View>
        <Text style={styles.contador}>{ resultado }</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#045494',
    padding: 8,
  },
  contador: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
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
    borderColor: 'white',
    color: 'white',
  },
  imagemView: {
    justifyContent: 'center',
    alignItems: 'center',
  }

});