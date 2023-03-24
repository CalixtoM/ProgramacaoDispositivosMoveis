import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';

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
        Camisas de Times e artigos esportivos.
      </Text> 
      <ScrollView style={styles.scr} horizontal={true} showsHorizontalScrollIndicator={false}>
          <Produto1 />
          <Produto2 />
          <Produto3 />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#00FF7F',
    padding: 8,
  },
  paragraph: {
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subparagraph: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scr: {
    weight: 100
  }
});
