import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';

function UserCard({user}) {
  return (
    <View style={styles.container}>
      <Text>{user.username}</Text>
      <Text>{user.name}</Text>
      <Text>{user.email}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    padding: 10,
    gap: 5,
    backgroundColor: '#e3e4ef',
    borderRadius: 5,
    width: Dimensions.get('window').width / 2,
  },
});
export default UserCard;
