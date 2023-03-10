import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  title: {
    margin: 12,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    Fontcolor: 'Red',
  },
  contador: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    paddingBottom: 30
  },
  botao: {
    margin: 12
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    
  }

});

export {styles}