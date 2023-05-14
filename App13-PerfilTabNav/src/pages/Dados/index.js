import React from 'react';
import { View, Text, Button, StyleSheet, Image} from 'react-native';

export default function Dados() {

  img = 'https://avatars.githubusercontent.com/u/51165259?v=4';

 return (
    <View style={styles.dados}>
      <View style={styles.imagemview}>
        <Image source={{ uri: img}} style={{width: 200, height: 200, borderRadius: 200/2}}/>
      </View>
      <Text style={styles.titulo}>Dados Pessoais: </Text>
      <Text style={styles.info}>Matheus Calixto </Text>
      <Text style={styles.info}>@CalixtoM</Text>
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

  dados: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 25
  },
});