import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'gray',
  },
  head: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  loc: {
    backgroundColor: '#FF6935',
    color: 'white',
    alignSelf: 'flex-start',
    marginVertical: 3,
    borderRadius: 50,
    padding: 8,
  },
  company: {
    color: 'gray',
    fontWeight: 'bold',
  },
  lvl: {
    textAlign: 'right',
    margin: 10,
    color: '#FF865D',
    fontWeight: 'bold',
  },
});
