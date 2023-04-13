import React, { Component, useState } from 'react';
import { Text, View, Button, StyleSheet, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

img = 'https://www.saudebemestar.pt/media/89347/obesidade.jpg';

export default function App() {
  const [resultado, setResultado] = useState('');
  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  
  function calcular(){
    res = (peso / (altura * altura))
    if(res < 18.5){
      setResultado('Classificação: Você esta abaixo do peso!');
    }else if(res >= 18.5 && res <= 24.9){
      setResultado('Classificação: Você esta com peso normal!');
    }else if(res >= 25 && res <= 29.9){
      setResultado('Classificação: Você esta com sobrepeso!');
    }
    else if(res >= 30 && res <= 34.9){
      setResultado('Classificação: Alerta! Você esta com Obesidade Grau I!');
    }else if(res >= 35 && res <= 39.9){
      setResultado('Classificação: Alerta! Você esta com Obesidade Grau II!');
    }else if(res > 39.9){
      setResultado('Classificação: Vá ao médico! OBESIDADE MÓRBIDA DETECTADA');
    }
    else{
      alert("Digita ai!");
      setResultado('');
    }


  }

    return(
      <View style={styles.container}>
        <View style={styles.imagemView}>
          <Image source={{ uri: img}} style={{width: 350, height: 205, alignItems: 'center'}}/>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Informe seu Peso (em Kg)" placeholderTextColor='#1b92f8'
          onChangeText={ (valor) => setPeso(valor)}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Informe sua Altura (em Metros)" placeholderTextColor='#1b92f8'
          onChangeText={ (valor) => setAltura(valor)}
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
    backgroundColor: '#ffff',
    padding: 8,
  },
  contador: {
    fontSize: 20,
    textAlign: 'center',
    color: '1b92f8',
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
    borderColor: '#1b92f8',
    borderWidth: 3,
    color: '#1b92f8',
  },
  imagemView: {
    justifyContent: 'center',
    alignItems: 'center',
  }

});