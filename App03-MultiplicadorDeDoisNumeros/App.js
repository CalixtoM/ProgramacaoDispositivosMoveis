import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: '',
      n1: 0,
      n2: 0
    };

    this.multiplicar = this.multiplicar.bind(this);
  }
  
  multiplicar(){
    if((this.state.numero1 === '') || (this.state.numero2 === '')){
      alert("Digita ai!");
    }
    res = this.state.numero1 * this.state.numero2
    this.setState({resultado: res})

  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Multiplicador de Números</Text>
        <TextInput
      style={styles.input}
      placeholder="Digite o primeiro número"
      onChangeText={ (valor) => this.setState({numero1: valor})}
      keyboardType="numeric"
      />
        <TextInput
      style={styles.input}
      placeholder="Digite o segundo número"
      onChangeText={ (valor) => this.setState({numero2: valor})}
      keyboardType="numeric"
      />
        <View style={styles.botao}>
          <Button color = 'purple' title="Calcular" onPress={this.multiplicar} />
        </View>
        <Text style={styles.title}>Resultado Da Multiplicação</Text>
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