import React, { Component } from 'react';
import { Text, View, Button, StyleSheet, TextInput, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

img = 'https://images.squarespace-cdn.com/content/v1/55ee0cdbe4b067774286158c/1461325359808-NJ2NZKLI4P30JQSNJ4TE/image-asset.png';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado: ''
    };

    this.calcular = this.calcular.bind(this);
  }
  
  calcular(){
    this.setState({resultado: Math.floor(Math.random() * 10)})
  }

  render(){
    return(
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleView}>Jogo do Nº Aleatório</Text>
        </View>
        <View style={styles.imagemView}>
          <Image source={{ uri: img}} style={{width: 150, height: 150, margin: 25, alignItems: 'center'}}/>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.titleView}>Pense em um número de 0 a 10</Text>
        </View>
        <View style={styles.botao}>
          <Button color = '#8b008b' title="Gerar" onPress={this.calcular} />
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
    backgroundColor: '#4b0082',
    padding: 8,
  },

  contador: {
    fontSize: 24,
    textAlign: 'center',
    color: 'white',
    fontWeight: 'bold',
    paddingBottom: 30
  },
  botao: {
    margin: 12
  },

  titleView: {
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
    color: 'white'
  },

  imagemView: {
    justifyContent: 'center',
    alignItems: 'center',
  }

});