import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';
const base_styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});
export default StyleSheet.create({
  primary: {
    ...base_styles,
    container: {
      ...base_styles.container,
      backgroundColor: colors.murrey,
    },
    title: {
      ...base_styles.title,

      color: 'white',
    },
  },
  secondary: {
    ...base_styles,
    container: {
      ...base_styles.container,
      backgroundColor: 'white',
      borderWidth: 1,
      borderColor: colors.murrey,
    },
    title: {
      ...base_styles.title,

      color: colors.murrey,
    },
  },
});
