import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

function Member({route}) {
  const {user} = route.params;
  return (
    <SafeAreaView>
      <Text style={styles.label}>Üye Adı: {user.name}</Text>
      <Text style={styles.label}>Üye Soyadı: {user.surname}</Text>
      <Text style={styles.label}>Üye Yaşı: {user.age}</Text>
      <Text style={styles.label}>Üye E-Posta: {user.mail}</Text>
      <Text style={styles.label}>Üye Memleketi: {user.hometown}</Text>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  label: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: 5,
  },
});
export default Member;
