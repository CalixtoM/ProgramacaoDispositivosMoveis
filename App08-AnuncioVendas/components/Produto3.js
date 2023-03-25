import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { styles2 } from '../styles2';


export default function Produto3() {
  return (
    <View style={styles2.container}>
      <Card style={styles2.card}>
        <Text style={styles2.paragraph}>
          Camisa Real Madrid Casa 22/23
        </Text>
        
        <Image
          source={{uri: 'https://static.netshoes.com.br/produtos/camisa-real-madrid-home-2223-sn-torcedor-adidas-masculina/14/3ZP-7305-014/3ZP-7305-014_zoom1.jpg?ts=1653414482&ims=544x'}}
          style={{width: 250, height: 210, alignSelf: 'center', marginTop: 20}}
        />
        <Text style={styles2.desc}>Camisa do Maior time espanhol, usada em seus confrontos dentro de Casa.</Text>
        <Text style={styles2.preco}>R$ 129.90</Text>
        <View style={{paddingLeft: 45, paddingRight: 45}}>
          <Button color = '#1b92f8' title="Comprar" />
        </View>
      </Card>
    </View>
  );
}
