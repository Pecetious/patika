import {Dimensions, StyleSheet} from 'react-native';
const window = Dimensions.get('window');
export default StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  container: {
    margin: 5,
    marginHorizontal: 10,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: 10,
    height: window.height / 5,
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  input: {
    flex: 1,
    textAlignVertical: 'top',
  },
});
