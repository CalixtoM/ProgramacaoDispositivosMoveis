import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {

  img = 'https://avatars.githubusercontent.com/u/51165259?v=4';

  return (
    <View style={styles.container}>
      <View style={styles.imagemview}>
        <Image source={{ uri: img}} style={{width: 200, height: 200, borderRadius: 200/2}}/>
      </View>
      
      <View style={styles.dados}>
        <Text style={styles.titulo}>Dados Pessoais: </Text>
        <Text style={styles.info}>Matheus Calixto </Text>
        <Text style={styles.info}>@CalixtoM</Text>
      </View>
      

      <View style={styles.formacao}>
        <Text style={styles.titulo}>Formação: </Text>
        <Text style={styles.info}>Análise e Desenvolvimento de Sistemas - Fatec PG </Text>
        <Text style={styles.info}>Informática P Internet - Etec Itanhaém </Text>
      </View>

      <View style={styles.experiencia}>
        <Text style={styles.titulo}>Experiência: </Text>
        <Text style={styles.info}>Estagiário de Sistema de Informação - Prefeitura de Praia Grande </Text>
        <Text style={styles.info}>Estagiário de Desenvolvimento Web - Fatec PG </Text>
        <Text style={styles.info}>Desenvolvedor Web - Freelancer</Text>
      </View>

      <View style={styles.projetos}>
        <Text style={styles.titulo}>Projetos: </Text>
        <Text style={styles.info}>Novo Site Fatec PG </Text>
        <Text style={styles.info}>Trampo Certo - TCC Etec </Text>
        <Text style={styles.info}>Desenvolvedor Web - Freelancer</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 100
  },

  imagemview: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  titulo: {
    fontSize: 20,
    color: 'blue'
  },

  info: {
    fontSize: 15
  },

  dados: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25
  },

  formacao: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25
  },

  projetos: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25
  },

  experiencia: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25
  }
});