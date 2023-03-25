import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';


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


  export {styles};