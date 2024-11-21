import {StyleSheet} from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: colors.murrey,
    color: 'white',
    borderRadius: 10,
  },
  inner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  user: {
    fontSize: 10,
    color: 'white',
  },
  date: {
    fontSize: 10,
    color: 'white',
  },
  title: {
    padding: 5,
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  footer: {
    alignItems: 'flex-end',
  },
  dislike_container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 3,
    paddingHorizontal: 10,
    marginVertical: 5,
    borderRadius: 20,
    alignItems: 'center',
  },
  dislike_text: {
    color: colors.murrey,
    fontWeight: 'bold',
  },
  dislike_count_container: {
    backgroundColor: colors.murrey,
    padding: 3,
    borderRadius: 20,
    marginRight: 3,
  },
  dislike_count_text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
