import {Dimensions, StyleSheet} from 'react-native';
const deviceWindow = Dimensions.get('window');
export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    borderRadius: 10,
  },
  image: {
    flex: 1,
    height: deviceWindow.height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    flex: 1,
    color: '#490D1F',
    textAlign: 'center',
    marginTop: 5,
    backgroundColor: 'rgba(183, 131, 146,0.6)',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
