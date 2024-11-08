import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrapper: {
    padding: 10,
    flexDirection: 'row',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_wrapper: {
    padding: 10,
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 26,
  },
  content_wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  info: {
    flex: 1,
    flexDirection: 'row',
  },
  year: {
    fontSize: 12,
    marginLeft: 10,
    color: 'gray',
    fontWeight: 'bold',
  },
  soldout_wrapper: {
    borderWidth: 1,
    borderColor: 'red',
    padding: 5,
    borderRadius: 5,
    width: 'auto',
  },
  soldout: {
    color: 'red',
    fontSize: 10,
    textTransform: 'uppercase',
  },
});
