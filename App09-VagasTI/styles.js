import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';


const styles = StyleSheet.create({
    container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#4682B4',
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
  },
  card: {
    padding: 10,
  },
  sal: {
    fontSize: 16,
  },
  desc: {
    fontSize: 16,
    paddingTop: 8,
  },
  });


  export {styles};