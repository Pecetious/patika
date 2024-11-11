import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height/3,
    resizeMode: 'contain',
    backgroundColor: 'white',
  },
  body: {
    padding: 10,
  },
  title: {fontWeight: 'bold', fontSize: 26},
  detail: {fontStyle: 'italic', marginVertical: 5},
  price: {fontWeight: 'bold', fontSize: 22, textAlign: 'right'},
});
