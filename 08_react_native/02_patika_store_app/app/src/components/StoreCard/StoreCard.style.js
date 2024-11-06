import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    margin: 5,
    padding: 15,
    borderRadius: 10,
  },
  image: {
    borderRadius: 10,
    height: Dimensions.get('window').height / 4,
  },
  inner: {
    padding: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: 'gray',
    fontWeight: 'bold',
  },
  stock: {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 14,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
});
