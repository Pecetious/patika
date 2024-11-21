import React from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import styles from './Button.styles';
function Button({title, onSelect, loading}) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onSelect}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator color="white" />
      ) : (
        <Text style={styles.title}>{title}</Text>
      )}
    </TouchableOpacity>
  );
}

export default Button;
