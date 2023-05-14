import React from 'react';
import { View, Text, Button, StyleSheet} from 'react-native';

export default function Formacao() {
 return (
    <View style={styles.formacao}>
      <Text style={styles.titulo}>Formação: </Text>
      <Text style={styles.info}>Análise e Desenvolvimento de Sistemas - Fatec PG </Text>
      <Text style={styles.info}>Informática P Internet - Etec Itanhaém </Text>
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

  formacao: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25
  },
});