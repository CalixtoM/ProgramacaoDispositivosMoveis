import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

export default function Experiencia() {
 return (
    <View style={styles.experiencia}>
      <Text style={styles.titulo}>Experiência: </Text>
      <Text style={styles.info}>Estagiário de Sistema de Informação - Prefeitura de Praia Grande </Text>
      <Text style={styles.info}>Estagiário de Desenvolvimento Web - Fatec PG </Text>
      <Text style={styles.info}>Desenvolvedor Web - Freelancer</Text>
    </View>
  );
}

const styles = StyleSheet.create({

  titulo: {
    fontSize: 20,
    color: 'blue'
  },

  info: {
    fontSize: 15
  },

  experiencia: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25
  }
});