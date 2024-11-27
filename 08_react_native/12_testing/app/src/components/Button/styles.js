import {StyleSheet} from 'react-native';

export default {
  primary: StyleSheet.create({
    container: {
      backgroundColor: 'blue',
      padding: 10,
      margin: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 16,
      color: 'white',
      fontWeight: 'bold',
    },
  }),
  secondary: StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: 'blue',
      padding: 10,
      margin: 10,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
    },
    title: {
      fontSize: 16,
      color: 'blue',
      fontWeight: 'bold',
    },
  }),
};
