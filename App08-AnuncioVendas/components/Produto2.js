
import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { Card } from 'react-native-paper';


export default function Produto1() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.paragraph}>
          Camisa Santos Casa 22/23
        </Text>
        <Image
          source={{uri: 'https://static.netshoes.com.br/produtos/camisa-santos-i-2223-sn-torcedor-umbro-masculina/14/2IA-2580-014/2IA-2580-014_zoom1.jpg?ts=1658342705&ims=544x'}}
          style={{width: 250, height: 210, alignSelf: 'center', marginTop: 20}}
        />
        <Text style={styles.desc}>Camisa do Maior time do Brasil, usada geralmente em confrontos dentro de Casa.</Text>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 12,
    weight: 10
    
  },
  paragraph: {
    padding: 24,
    marginTop: 0,
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  desc: {
    width: 230,
    paddingTop: 10,
    textAlign: 'justify',
    alignSelf: 'center',
    fontSize: 20
  },
  card: {
    height: 550 
  }

});
