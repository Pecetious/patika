import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.lightsilver,
    margin: 10,
    padding: 10,
    borderRadius: 10,
    minHeight: 110,
  },
  content: {
    color: colors.murrey,
    fontSize: 18,
    flex: 1,
  },
  inner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  user: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 15,
  },
  date: {
    fontSize: 10,
    textAlign: 'right',
  },
});
