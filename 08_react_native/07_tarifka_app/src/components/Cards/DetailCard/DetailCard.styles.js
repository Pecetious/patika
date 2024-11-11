import {Dimensions, StyleSheet} from 'react-native';
const deviceWindow = Dimensions.get('window');
export default StyleSheet.create({
  wrapper: {
    flex: 1,
    margin: 10,
  },
  title: {
    color: '#B78392',
    fontSize: 26,
    fontWeight: 'bold',
  },
  area: {
    color: '#B78392',
    fontSize: 20,
    marginBottom: 10,
  },
  image: {
    height: deviceWindow.height / 2.2,
  },
  ingredients_wrapper: {
    margin: 10,
    borderWidth: 1,
    borderColor: '#B78392',
    width: deviceWindow.width / 1.1,
    alignSelf: 'center',
    borderRadius: 10,
  },
  ingredients_title: {
    textAlign: 'center',
    color: '#B78392',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 18,
  },
  ingredients_inner: {
    justifyContent: 'space-between',
    flex: 1,
  },
  ingredients_item: {
    flex: 1,
    textAlign: 'center',
    color: '#B78392',
    margin: 5,
  },
  tutorial_title: {
    textAlign: 'center',
    color: '#B78392',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    fontSize: 18,
  },
  tutorial: {
    color: '#B78392',
  },
  youtube: {
    borderRadius: 10,
    margin: 10,
  },
});
