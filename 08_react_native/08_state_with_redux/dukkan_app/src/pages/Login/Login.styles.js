import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64b5f6',
  },
  logo_container: {flex: 1, justifyContent: 'center'},
  logo: {
    height: Dimensions.get('window').height / 3,
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center',
    tintColor: 'white',
  },
  body: {flex: 1},
  error: {
    marginLeft: 15,
    color: 'red',
    fontWeight: "bold",
    fontSize: 16,
  },
});
