import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './FloatingButton.styles';
function FloatingButton({iconColor, iconName, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Icon name={iconName} size={25} color={iconColor} />
    </TouchableOpacity>
  );
}

export default FloatingButton;
