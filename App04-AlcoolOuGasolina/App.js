import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

img = 'http://complemento.veja.abril.com.br/economia/calculadora-combustivel/img/abre.jpg';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: '',
      gasolina: 0,
      alcool: 0
    };

    this.calcular = this.calcular.bind(this);
  }
  
  calcular(){
    if((this.state.gasolina === '') || (this.state.alcool === '')){
      alert("Digita ai!");
      this.setState({resultado: ''})
      return;
    }
    
    res = (this.state.alcool / this.state.gasolina )
    if(res > 0.7){
      this.setState({resultado: 'Resultado: Gasolina é mais vantajosa'})
    }else{
      this.setState({resultado: 'Resultado: Álcool é mais vantajoso'})
    }
    //this.setState({resultado: res})

  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.imagemView}>
          <Image source={{ uri: img}} style={{width: 350, height: 185, alignItems: 'center'}}/>
        </View>
        <TextInput
          style={styles.input}
          placeholder="Valor do Alcool" placeholderTextColor='white'
          onChangeText={ (valor) => this.setState({alcool: valor})}
          keyboardType="numeric"
      />
        <TextInput
          style={styles.input}
          placeholder="Valor da Gasolina" placeholderTextColor='white'
          onChangeText={ (valor) => this.setState({gasolina: valor})}
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
    backgroundColor: '#045494',
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
    borderWidth: 3,
    color: 'white',
  },
  imagemView: {
    justifyContent: 'center',
    alignItems: 'center',
  }

});