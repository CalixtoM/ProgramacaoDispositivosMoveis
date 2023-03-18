import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

img = 'https://www.saudebemestar.pt/media/89347/obesidade.jpg';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: '',
      altura: 0,
      peso: 0
    };

    this.calcular = this.calcular.bind(this);
  }
  
  calcular(){
    if((this.state.peso === '') || (this.state.altura === '')){
      alert("Digita ai!");
      this.setState({resultado: ''})
      return;
    }
    
    res = (this.state.peso / (this.state.altura * this.state.altura))
    if(res < 18.5){
      this.setState({resultado: 'Classificação: Você esta abaixo do peso!'})
    }else if(res >= 18.5 && res <= 24.9){
      this.setState({resultado: 'Classificação: Você esta com peso normal!'})
    }else if(res >= 25 && res <= 29.9){
      this.setState({resultado: 'Classificação: Você esta com sobrepeso!'})
    }
    else if(res >= 30 && res <= 34.9){
      this.setState({resultado: 'Classificação: Alerta! Você esta com Obesidade Grau I!'})
    }else if(res >= 35 && res <= 39.9){
      this.setState({resultado: 'Classificação: Alerta! Você esta com Obesidade Grau II!'})
    }else{
      this.setState({resultado: 'Classificação: Vá ao médico! OBESIDADE MÓRBIDA DETECTADA'})
    }


  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.imagemView}>
          <Image source={{ uri: img}} style={{width: 350, height: 205, alignItems: 'center'}}/>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Informe seu Peso (em Kg)" placeholderTextColor='#1b92f8'
          onChangeText={ (valor) => this.setState({peso: valor})}
          keyboardType="numeric"
        />
        <TextInput
          style={styles.input}
          placeholder="Informe sua Altura (em Metros)" placeholderTextColor='#1b92f8'
          onChangeText={ (valor) => this.setState({altura: valor})}
          keyboardType="numeric"
        />
        <View style={styles.botao}>
          <Button color = '#1b92f8' title="Calcular" onPress={this.calcular} />
        </View>
        <Text style={styles.contador}>{ this.state.resultado }</Text>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ffff',
    padding: 8,
  },
  titulo: {
    margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
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