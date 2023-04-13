import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput, Button } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  const [valor, setValor] = useState(0);
  const [moedaOrigem, setMoedaOrigem] = useState(1);
  const [moedaConvertida, setMoedaConvertida] = useState(1);
  const [res, setRes] = useState('');
  const [resultadoFinal, setResultadoFinal] = useState(''); 

  function calcular(){
    if(valor == 0){
      alert("Informe um valor!");
      setRes('');
      setResultadoFinal('');
    }else{
      if(moedaOrigem == 1){
        setRes("R$ "+ valor +" é igual a");
        if(moedaConvertida == 1){
          alert("Não é possivel realizar a conversão para mesma moeda");
          setRes('');
        }
        else if(moedaConvertida == 2){
          setResultadoFinal("US$ " + (valor*0.2038).toFixed(2));
        }else if(moedaConvertida == 3){
          setResultadoFinal("€ " + (valor*0.1844).toFixed(2));
        }
      }
      else if(moedaOrigem == 2){
        setRes("US$ "+ valor +" é igual a");
        if(moedaConvertida == 2){
          alert("Não é possivel realizar a conversão para mesma moeda");
          setRes('');
        }
        else if(moedaConvertida == 1){
          setResultadoFinal("R$ " + (valor*4.9080).toFixed(2));
        }else if(moedaConvertida == 3){
          setResultadoFinal("€ " + (valor*0.9046).toFixed(2));
        }
      }
      else if(moedaOrigem == 3){
        setRes("€ "+ valor +" é igual a");
        if(moedaConvertida == 3){
          alert("Não é possivel realizar a conversão para mesma moeda");
          setRes('');
        }
        else if(moedaConvertida == 1){
          setResultadoFinal("R$ " + (valor*5.4291).toFixed(2));
        }else if(moedaConvertida == 2){
          setResultadoFinal("US$ " + (valor*1.1054).toFixed(2));
        }
      }
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.paragraph}>
          Conversor De Moedas
        </Text>
      </View>
      <View style={styles.inputs}>
        <Text style={styles.label}>Valor:</Text>
        <TextInput style={styles.inputSt} keyboardType="numeric" onChangeText={(text) => setValor(text)}/>
        <Text style={styles.label}>De:</Text>
        <Picker style={styles.inputPicker} 
          selectedValue={moedaOrigem} onValueChange={(itemValue, itemIndex) => setMoedaOrigem(itemValue)
        }>
          <Picker.Item key={1} value="1" label="Real - R$" />
          <Picker.Item key={2} value="2" label="Dolar - US$" />
          <Picker.Item key={3} value="3" label="Euro - €" />
        </Picker>
        <Text style={styles.label}>Para:</Text>
        <Picker style={styles.inputPicker}
          selectedValue={moedaConvertida} onValueChange={(itemValue, itemIndex) => setMoedaConvertida(itemValue)
          }>
          <Picker.Item key={1} value="1" label="Real - R$" />
          <Picker.Item key={2} value="2" label="Dolar - US$" />
          <Picker.Item key={3} value="3" label="Euro - €" />
        </Picker>
        <Button color = '#008000' title="Calcular" onPress={calcular} />
        <View style={styles.result}>
          <Text style={styles.resultado}>{ res }</Text>
          <Text style={styles.resultado}>{ resultadoFinal }</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#1C1C1C',
    padding: 14,
  },
  paragraph: {
    //margin: 24,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    textDecorationLine: 'underline',
    textDecorationColor: '#008000'
  },
  inputs: {
    paddingTop: 10
  },
  inputSt: {
    //backgroundColor: 'red',
    borderBottomColor: '#008000',
    borderBottomWidth: 1,
    marginBottom: 15,
    marginTop: 5,
    color: 'white'
  },
  label: {
    color: 'white',
    fontWeight: 'bold'
  },
  inputPicker: {
    backgroundColor: '#1C1C1C',
    borderColor: '#008000', 
    color: 'white',
    padding: 5,
    marginBottom: 8,
    marginTop: 8,
    borderRadius: 3,
    borderBottomWidth: 1
  },
  resultado: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 18
  },
  result: {
    marginTop: 20
  }
});
