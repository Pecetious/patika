import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    gap: 20,
  },
  title: {
    fontWeight: 'bold',
    flex: 1,
    marginVertical: 10,
    fontSize: 22,
  },
  loc_container: {
    flex: 1,
    flexDirection: 'row',
    gap: 20,
    marginVertical: 3,
  },
  loc_title: {
    color: '#FF6935',
  },
  loc_inner: {
    gap: 4,
  },
  lvl_container: {
    flex: 1,
    flexDirection: 'row',
    gap: 38,
    marginVertical: 3,
  },
  lvl_title: {
    color: '#FF6935',
  },
  lvl_inner: {
    gap: 4,
  },
  buttons_container: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
  },
  button: {
    flex: 1,
    backgroundColor: '#FF6935',
    paddingVertical: 10,
    borderRadius: 20,
  },
  button_title: {
    color: 'white',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  },
});
