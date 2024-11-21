import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from './styles';
function Button({type = 'default', theme = 'primary', title, onPress, icon}) {
  const containerStyle =
    styles[type]?.[theme]?.container || styles.default.primary.container;
  const titleStyle =
    styles[type]?.[theme]?.title || styles.default.primary.title;
  return (
    <TouchableOpacity style={containerStyle} onPress={onPress}>
      {icon && <Icon name={icon.name} color={icon.color} size={icon.size} />}
      {title && <Text style={titleStyle}>{title}</Text>}
    </TouchableOpacity>
  );
}

export default Button;
