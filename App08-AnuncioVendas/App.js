import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { styles } from './styles';


// You can import from local files
import Produto1 from './components/Produto1';
import Produto2 from './components/Produto2';
import Produto3 from './components/Produto3';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        ESPORTINHO.COM
      </Text>
      <Text style={styles.subparagraph}>
        Camisas de Times e artigos esportivos
      </Text> 
      <ScrollView style={styles.scr} horizontal={true} showsHorizontalScrollIndicator={false}>
          <Produto1 />
          <Produto2 />
          <Produto3 />
      </ScrollView>
    </View>
  );
}

