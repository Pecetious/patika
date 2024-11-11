import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Button from '../components/Button';

function Welcome({navigation}) {
  const goToMemberSign = () => {
    navigation.navigate('MemberSignScreen');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Kebap Fitness Salonu</Text>
      <Button text="Üye kaydı oluştur" onPress={goToMemberSign} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 10,
  },
});
export default Welcome;
