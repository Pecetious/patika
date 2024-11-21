import {Dimensions, StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    gap: 15,
    backgroundColor: colors.murrey,
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 20,
  },
  title: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  user: {
    fontSize: 12,
    textAlign: 'right',
  },
});
