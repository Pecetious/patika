import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    backgroundColor: 'white',
    padding: 10,
    marginHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    height: Dimensions.get('window').height / 3,
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
  },
});
