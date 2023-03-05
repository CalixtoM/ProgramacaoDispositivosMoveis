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
      resultado: 0,
      n1: 0,
      n2: 0
    };

    this.multiplicar = this.multiplicar.bind(this);
  }
  
  
  multiplicar(){
    this.setState({
      n1: this.state.n1,
      n2: this.state.n2,
      resultado: this.state.n1 * this.state.n2
    });
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Resultado Da Multiplicação</Text>
        <Text style={styles.contador}>{ this.state.resultado }</Text>
        <TextInput style={styles.input} value={this.state.n1}/>
        <TextInput style={styles.input} value={this.state.n2}/>
        <View style={styles.botao}>
          <Button color = 'purple' title="Calcular" onPress={this.multiplicar} />
        </View>
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