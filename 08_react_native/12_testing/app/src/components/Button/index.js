import React from 'react';
import styles from './styles';
import {Text, TouchableOpacity, View} from 'react-native';
function Button({title, onClick, theme = 'primary'}) {
  return (
    <TouchableOpacity
      testID="button-touchable"
      onPress={onClick}
      style={styles[theme].container}>
      <Text testID="button-title" style={styles[theme].title}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

export default Button;
