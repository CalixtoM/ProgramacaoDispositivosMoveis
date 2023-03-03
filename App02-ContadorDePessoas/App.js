import React, { Component } from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      cont: 0
    };


    this.somar = this.somar.bind(this);
    this.subtrair = this.subtrair.bind(this);

    
    
  }
  
  somar(){
    this.setState({
      cont: this.state.cont + 1
    });
  }

  subtrair(){
    if(this.state.cont > 0){
      this.setState({
        cont: this.state.cont - 1
      });
    }
    
  }

  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}>Contador de Pessoas</Text>
        <Text style={styles.contador}>{ this.state.cont }</Text>
        <Button title="Somar" onPress={this.somar}/>
        <Button color = 'red' title="Subtrair" onPress={this.subtrair} />
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
    color: 'red',
    fontWeight: 'bold'
  }
});
