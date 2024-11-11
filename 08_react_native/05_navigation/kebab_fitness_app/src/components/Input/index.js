import React from 'react';
import styles from './Input.styles';
import {Text, TextInput, View} from 'react-native';
function Input({label, onChangeText, placeholder}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View style={styles.input_container}>
        <TextInput onChangeText={onChangeText} placeholder={placeholder} />
      </View>
    </View>
  );
}

export default Input;
