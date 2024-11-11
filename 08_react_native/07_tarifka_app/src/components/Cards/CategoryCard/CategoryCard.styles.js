import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 5,
    flexDirection: 'row',
    gap: 25,
    backgroundColor: '#490D1F',
    alignItems: 'center',
    borderRadius: 15,
  },
  image: {
    width: 50,
    minHeight: 50,
    resizeMode: 'contain',
    backgroundColor: '#490D1F',
    borderRadius: 25,
  },
  title: {
    color: '#B78392',
    flex: 1,
  },
});
