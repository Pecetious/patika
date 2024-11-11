import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './Button.styles';
function Button({text, onPress, customWidth = 'auto', customHeight = 'auto'}) {
  return (
    <TouchableOpacity
      style={[styles.container, {width: customWidth, height: customHeight}]}
      onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

export default Button;
