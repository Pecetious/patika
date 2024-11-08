import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#11d435',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  name: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
  },
  done: {
    flex: 1,
    backgroundColor: 'gray',
    margin: 10,
    padding: 10,
    borderRadius: 5,
  },
  done_name: {
    color: 'lightgray',
    fontSize: 22,
    fontWeight: 'bold',
    textDecorationLine: 'line-through',
  },
});
