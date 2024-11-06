import {Dimensions, StyleSheet} from 'react-native';
export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  inner: {
    padding: 10,
  },
  title: {
    marginBottom: 3,
    fontWeight: 700,
    fontSize: 18,
  },
  author: {
    fontStyle: 'italic',
    textAlign: 'right',
  },
});
