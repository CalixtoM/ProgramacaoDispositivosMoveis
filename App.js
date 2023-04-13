import React, { Component, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Switch, Button } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  const [nome, setNome] = useState('');
  const [idade, setIdade] = useState('');
  const [sexo, setSexo] = useState(1);
  const [escolaridade, setEscolaridade] = useState('Medio Completo');
  const [limite, setLimite] = useState(0);
  const [brasileiro, setBrasileiro] = useState('');


  const [resultadoNome, setResultadoNome] = useState('');
  const [resultadoIdade, setResultadoIdade] = useState('');
  const [resultadoSexo, setResultadoSexo] = useState(1);
  const [resultadoEscolaridade, setResultadoEscolaridade] = useState(0);
  const [resultadoLimite, setResultadoLimite] = useState(0);
  const [resultadoBrasileiro, setResultadoBrasileiro] = useState('');
  
  function cadastrar(){
    if(nome != ''){
      if(idade >= 18){
        setResultadoNome(nome);
        setResultadoIdade(idade);
        if(sexo == 1){
          setResultadoSexo('Masculino');
        }else if(sexo == 2){
          setResultadoSexo('Feminino');
        }
    
        if(escolaridade == 1){
          setResultadoEscolaridade('Fundamental Incompleto');
        }
        else if(escolaridade == 2){
          setResultadoEscolaridade('Fundamental Completo');
        }
        else if(escolaridade == 3){
          setResultadoEscolaridade('Medio Incompleto');
        }
        else if(escolaridade == 4){
          setResultadoEscolaridade('Medio Completo');
        }
        else if(escolaridade == 5){
          setResultadoEscolaridade('Superior Incompleto');
        }
        else if(escolaridade == 6){
          setResultadoEscolaridade('Superior Completo');
        }
    
        setResultadoLimite('R$ ' + (limite) + ',00');
        if(brasileiro == 1){
          setResultadoBrasileiro("Brasileiro (a)")
        }else{
          setResultadoBrasileiro("Gringo (a)")
        }
      }else{
        alert("Você não possui a idade minima para abertura de conta!")
      }
    }else{
      alert("Favor preencher todos os campos");
    }
    
  }
    


    return(
      <View style={styles.container}>
        <View style={styles.tituloApp}>
          <Text style={styles.title}>Abertura de Conta</Text>
        </View>
        <View style={styles.campos}>
          <Text style={styles.idCampos}>Nome:</Text>
          <TextInput style={styles.input} onChangeText={ (valor) => setNome(valor)} placeholder="informe seu Nome"/>
          <Text style={styles.idCampos}>Idade:</Text>
          <TextInput style={styles.input} onChangeText={ (valor) => setIdade(valor)} placeholder="informe sua Idade"/>
          <Text style={styles.idCampos}>Sexo:</Text>
          <Picker
            selectedValue={sexo} onValueChange={(itemValue, itemIndex) => setSexo(itemValue)}>
            <Picker.Item key={1} value={1} label="Masculino" />
            <Picker.Item key={2} value={2} label="Feminino" />
          </Picker>
          <Text style={styles.idCampos}>Escolaridade:</Text>
          <Picker selectedValue={escolaridade} onValueChange={(itemValue, itemIndex) => setEscolaridade(itemValue)}>
            <Picker.Item key={1} value={1} label="Fundamental Incompleto" />
            <Picker.Item key={2} value={2} label="Fundamental Completo" />
            <Picker.Item key={3} value={3} label="Medio Incompleto" />
            <Picker.Item key={4} value={4} label="Medio Completo" />
            <Picker.Item key={5} value={5} label="Superior Incompleto" />
            <Picker.Item key={6} value={6} label="Superior COmpleto" />
          </Picker>
          <Text style={styles.idCampos}>Limite:</Text>
          <Slider style={styles.input} step={50} onValueChange={(value) => setLimite(value)} value={limite} minimumValue={0} maximumValue={1200} />
          <Text style={{textAlign: 'left', fontSize:16}}>
            {(limite)}
          </Text>
          <Text style={styles.idCampos}>Brasileiro?</Text>
          <Switch  value={brasileiro} onValueChange={ (valorSwitch) => setBrasileiro(valorSwitch)}/>
          <View style={styles.botao}>
            <Button color = '#1b92f8' title="Cadastrar" onPress={cadastrar} />
            </View>
        </View>
        <Text style={styles.tituloApp}>Dados Informados:</Text>
        <Text style={styles.contador}>{ resultadoNome }</Text>
        <Text style={styles.contador}>{ resultadoIdade }</Text>
        <Text style={styles.contador}>{ resultadoSexo }</Text>
        <Text style={styles.contador}>{ resultadoEscolaridade }</Text>
        <Text style={styles.contador}>{ resultadoLimite }</Text>
        <Text style={styles.contador}>{ resultadoBrasileiro }</Text>
      </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
    margin: 18
  },

  tituloApp: {
    alignItems: 'center',
    paddingBottom: 25,
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold'
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