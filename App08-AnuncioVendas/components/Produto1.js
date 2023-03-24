import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { Card } from 'react-native-paper';


export default function Produto1() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.paragraph}>
          Camisa Santos Fora 22/23
        </Text>
        <Image
          source={{uri: 'https://static.netshoes.com.br/produtos/camisa-santos-ii-2223-sn-torcedor-umbro-masculina/26/2IA-2585-026/2IA-2585-026_zoom1.jpg?ts=1652897837&ims=544x'}}
          style={{width: 250, height: 210, alignSelf: 'center', marginTop: 20}}
        />
        <Text style={styles.desc}>Camisa do Maior time do Brasil, usada geralmente em confrontos fora de Casa.</Text>
        <Text style={styles.preco}>R$ 129.90</Text>
        <View style={{paddingLeft: 45, paddingRight: 45}}>
          <Button color = '#1b92f8' title="Comprar" />
        </View>
        
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
  },
  preco: {
    fontSize: 24,
    color: 'grey',
    textAlign: 'center',
    padding: 20
  }

});
