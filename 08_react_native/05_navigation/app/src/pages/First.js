import React from 'react';
import {Button, Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

function First(props) {
  console.log(props);
  const navigateToPage = () => {
    props.navigation.navigate('Second Screen', {username: 'radyoaktifpecete'});
  };
  return (
    <SafeAreaView>
      <Text>Hello First</Text>
      <Button title="Go to second" onPress={navigateToPage} />
    </SafeAreaView>
  );
}

export default First;
