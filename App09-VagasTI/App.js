import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import Constants from 'expo-constants';
import { styles } from './styles';


// You can import from local files
import Vaga1 from './components/vaga1';
import Vaga2 from './components/vaga2';
import Vaga3 from './components/vaga3';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Vagas
      </Text>
      <ScrollView style={styles.scr} >
          <Vaga1 />
          <Vaga2 />
          <Vaga3 />
          <Vaga2 />
          <Vaga1 />
          <Vaga3 />
          <Vaga2 />
      </ScrollView>
    </View>
  );
}
