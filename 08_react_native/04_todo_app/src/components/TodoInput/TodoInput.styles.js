import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 10,
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'lightgray',
    maxHeight: Dimensions.get('window').height / 3,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
    padding: 10,
    color: 'white',
    fontSize: 16,
  },
  button: {
    borderRadius: 5,
  },
});
