import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, Button } from 'react-native';
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
      nome: '',
      idade: '',
      sexo: '',
      escolaridade: '',
      limite: '',
      brasileiro: '',
      status: false
    };

    this.cadastrar = this.cadastrar.bind(this);
  }
    cadastrar(){
      this.setState({resultado: 'Nome: ' + this.state.nome + '\n Idade: ' + this.state.idade + '\n Sexo: ' + this.state.sexo})

    }
    


  render(){
    return(
      <View style={styles.container}>
        <View style={styles.tituloApp}>
          <Text style={styles.title}>Abertura de Conta</Text>
        </View>
        <View style={styles.campos}>
          <Text style={styles.idCampos}>Nome:</Text>
          <TextInput style={styles.input} onChangeText={ (valor) => this.setState({nome: valor})} placeholder="informe seu Nome"/>
          <Text style={styles.idCampos}>Idade:</Text>
          <TextInput style={styles.input} onChangeText={ (valor) => this.setState({idade: valor})} placeholder="informe sua Idade"/>
          <Text style={styles.idCampos}>Sexo:</Text>
          <Picker onChangeText={ (valor) => this.setState({sexo: valor})}>
            <Picker.Item key={1} value={1} label="Masculino" />
            <Picker.Item key={2} value={2} label="Feminino" />
          </Picker>
          <Text style={styles.idCampos}>Escolaridade:</Text>
          <Picker onChangeText={ (valor) => this.setState({escolaridade: valor})}>
            <Picker.Item key={1} value={1} label="Fundamental Incompleto" />
            <Picker.Item key={2} value={2} label="Fundamental Completo" />
            <Picker.Item key={1} value={1} label="Medio Incompleto" />
            <Picker.Item key={2} value={2} label="Medio Completo" />
            <Picker.Item key={1} value={1} label="Superior Incompleto" />
            <Picker.Item key={2} value={2} label="Superior COmpleto" />
          </Picker>
          <Text style={styles.idCampos}>Limite:</Text>
          <Slider style={styles.input} onChangeText={ (valor) => this.setState({limite: valor})} minimumValue={0} maximumValue={1200}/>
          <Text style={styles.idCampos}>Brasileiro?</Text>
          <Switch  value={this.state.status} onValueChange={ (valorSwitch) => this.setState({status: valorSwitch})}/>
          <Text style={{textAlign: 'left', fontSize:16}}>
            {(this.state.status) ? "Sim" : "Não"}
          </Text>
          <View style={styles.botao}>
            <Button color = '#1b92f8' title="Cadastrar" onPress={this.cadastrar} />
            </View>
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
  },
  botao: {
    padding: 60
  }
});