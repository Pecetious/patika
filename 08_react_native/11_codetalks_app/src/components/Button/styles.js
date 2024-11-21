import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const base_styles = StyleSheet.create({
  container: {
    padding: 8,
    margin: 10,
    borderRadius: 12,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 5,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});

const styles = {
  default: {
    primary: {
      container: {
        ...base_styles.container,
        backgroundColor: colors.murrey,
      },
      title: {
        ...base_styles.title,
        color: colors.lightsilver,
      },
    },
    secondary: {
      container: {
        ...base_styles.container,
        backgroundColor: colors.lightsilver,
        borderWidth: 1,
        borderColor: colors.murrey,
      },
      title: {
        ...base_styles.title,
        color: colors.murrey,
      },
    },
  },
  floating: {
    primary: {
      container: {
        ...base_styles.container,
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        backgroundColor: colors.murrey,
      },
      title: {
        ...base_styles.title,
        color: colors.lightsilver,
      },
    },
    secondary: {
      container: {
        ...base_styles.container,
        position: 'absolute',
        bottom: 20,
        right: 20,
        width: 60,
        height: 60,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderColor: colors.murrey,
      },
      title: {
        ...base_styles.title,
        color: 'black',
      },
    },
  },
};

export default styles;
