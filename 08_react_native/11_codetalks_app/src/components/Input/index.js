import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './styles';
function Input({placeholder, onType, value, isSecure}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        secureTextEntry={isSecure}
        style={styles.input}
      />
    </View>
  );
}

export default Input;
