import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './Input.styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
function Input({placeholder, onType, value, iconName, iconColor, isSecure}) {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder={placeholder}
        onChangeText={onType}
        value={value}
        style={styles.input}
        secureTextEntry={isSecure}
      />
      <Icon name={iconName} size={25} color={iconColor} />
    </View>
  );
}

export default Input;
