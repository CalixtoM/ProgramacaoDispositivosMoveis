import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Switch } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';



class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      status: false
    };
  };


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.tituloApp}>
          <Text style={styles.title}>Abertura de Conta</Text>
        </View>
        <View style={styles.campos}>
          <Text style={styles.idCampos}>Nome:</Text>
          <TextInput style={styles.input} placeholder="informe seu Nome"/>
          <Text style={styles.idCampos}>Idade:</Text>
          <TextInput style={styles.input} placeholder="informe sua Idade"/>
          <Text style={styles.idCampos}>Sexo:</Text>
          <Picker>
            <Picker.Item key={1} value={1} label="Masculino" />
            <Picker.Item key={2} value={2} label="Feminino" />
          </Picker>
          <Text style={styles.idCampos}>Escolaridade:</Text>
          <Picker>
            <Picker.Item key={1} value={1} label="Fundamental Incompleto" />
            <Picker.Item key={2} value={2} label="Fundamental Completo" />
            <Picker.Item key={1} value={1} label="Medio Incompleto" />
            <Picker.Item key={2} value={2} label="Medio Completo" />
            <Picker.Item key={1} value={1} label="Superior Incompleto" />
            <Picker.Item key={2} value={2} label="Superior COmpleto" />
          </Picker>
          <Text style={styles.idCampos}>Limite:</Text>
          <Slider style={styles.input} minimumValue={0} maximumValue={1200}/>
          <Text style={styles.idCampos}>Brasileiro?</Text>
          <Switch value={this.state.status} onValueChange={ (valorSwitch) => this.setState({status: valorSwitch})}/>

          <Text style={{textAlign: 'center', fontSize:30}}>
            {(this.state.status) ? "Ativo" : "Inativo"}
          </Text>

        </View>
      </View>
    )
  }
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },

  tituloApp: {
    alignItems: 'center',
    paddingBottom: 25
  },
  
  title: {
    justifyContent: 'center',
    TextAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24,
    

  },
  input: {
    paddingBottom: 5
  },

  campos: {
    padding: 5
  },
  idCampos: {
    fontWeight: 'bold',
    fontSize: 16
  }
});