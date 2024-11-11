import React from 'react';
import {SafeAreaView, Text} from 'react-native';
function Second(props) {
  console.log(props);
  return (
    <SafeAreaView>
      <Text>Second Page !!</Text>
    </SafeAreaView>
  );
}

export default Second;
