import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

img = 'https://avatars.githubusercontent.com/u/51165259?v=4';

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
      alert("Digita ai!")
      return;
    }
    
    res = (this.state.alcool / this.state.gasolina )
    if(res > 0.7){
      this.setState({resultado: 'Gasolina'})
    }else{
      this.setState({resultado: 'Alcool'})
    }
    //this.setState({resultado: res})

  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.imagemview}>
          <Image source={{ uri: img}} style={{width: 200, height: 200, borderRadius: 200/2}}/>
        </View>
        <Text style={styles.title}>Álcool ou Gasolina</Text>
        <TextInput
      style={styles.input}
      placeholder="Valor da Gasolina"
      onChangeText={ (valor) => this.setState({gasolina: valor})}
      keyboardType="numeric"
      />
        <TextInput
      style={styles.input}
      placeholder="Valor do Alcool"
      onChangeText={ (valor) => this.setState({alcool: valor})}
      keyboardType="numeric"
      />
        <View style={styles.botao}>
          <Button color = 'purple' title="Calcular" onPress={this.calcular} />
        </View>
        <Text style={styles.title}>Resultado</Text>
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