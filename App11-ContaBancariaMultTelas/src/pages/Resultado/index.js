import React from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function Resultado( {route} ){
  const navigation = useNavigation();

  if(route.params?.paramKey3 == 1){
    sexo = "Masculino"
  }else{
    sexo = "Feminino"     
  }
  if(route.params?.paramKey4 == 1){
    escol = 'Fundamental Incompleto';
  }
  else if(route.params?.paramKey4 == 2){
    escol = 'Fundamental Completo';
  }
  else if(route.params?.paramKey4 == 3){
    escol = 'Medio Incompleto';
  }
  else if(route.params?.paramKey4 == 4){
    escol = 'Medio Completo';
  }
  else if(route.params?.paramKey4 == 5){
    escol = 'Superior Incompleto';
  }
  else if(route.params?.paramKey4 == 6){
    escol = 'Superior Completo';
  }

  if(route.params?.paramKey6 == 1){
          nac = "Brasileiro (a)";
        }else{
          nac = "Gringo (a)";
        }

  return(
    <View>
      <Text>Dados Informados:</Text>
      <Text>Nome: {route.params?.paramKey1}</Text>
      <Text>Idade: {route.params?.paramKey2}</Text>
      <Text>Sexo: {sexo}</Text>
      <Text>Escolaridade: {escol}</Text>
      <Text>Limite: R${route.params?.paramKey5},00</Text>
      <Text>{nac}</Text>
      <Button
      title='Voltar para tela de Cadastro'
      onPress={ () => navigation.goBack() }
      />
    </View>
  )
}
