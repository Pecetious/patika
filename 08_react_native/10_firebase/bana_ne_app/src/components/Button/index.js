import React from 'react';
import styles from './Button.styles';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
function Button({onPress, theme = 'primary', title, loading}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={loading}
      style={styles[theme].container}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles[theme].title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
