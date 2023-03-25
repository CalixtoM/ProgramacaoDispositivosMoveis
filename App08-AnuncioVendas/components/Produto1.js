import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { styles2 } from '../styles2';

export default function Produto1() {
  return (
    <View style={styles2.container}>
      <Card style={styles2.card}>
        <Text style={styles2.paragraph}>
          Camisa Santos Fora 22/23
        </Text>
        <Image
          source={{uri: 'https://static.netshoes.com.br/produtos/camisa-santos-ii-2223-sn-torcedor-umbro-masculina/26/2IA-2585-026/2IA-2585-026_zoom1.jpg?ts=1652897837&ims=544x'}}
          style={{width: 250, height: 210, alignSelf: 'center', marginTop: 20}}
        />
        <Text style={styles2.desc}>Camisa do alvinegro praiano, sendo utilizada geralmente em seus confrontos fora de Casa.</Text>
        <Text style={styles2.preco}>R$ 129.90</Text>
        <View style={{paddingLeft: 45, paddingRight: 45}}>
          <Button color = '#1b92f8' title="Comprar" />
        </View>
        
      </Card>
    </View>
  );
}

