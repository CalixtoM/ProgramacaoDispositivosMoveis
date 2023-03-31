import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import { Card } from 'react-native-paper';
import { styles } from '../styles';

export default function Vaga2() {
  return (
    <View style={styles.container}>
      <Card style={styles.card}>
        <Text style={styles.paragraph}>
          Desenvolvedor Frontend 
        </Text>
        <Text style={styles.desc}>Salário: R$ 3500,00</Text>
        <Text style={styles.desc}>Descrição: Trabalhar com React, criando e dando manutenção em projetos criados.</Text>
        <Text style={styles.desc}>Contato: 4561-7538.</Text>
        <View style={{padding: 12}}>
          <Button color = '#1b92f8' title="Candidate-se" />
        </View>
        
      </Card>
    </View>
  );
}
