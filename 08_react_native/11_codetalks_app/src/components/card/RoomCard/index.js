import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';
function RoomCard({room, onEnter}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onEnter}>
      <Text style={[styles.text, styles.title]}>{room.name}</Text>
      <Text style={[styles.text, styles.user]}>
        created by{' '}
        {room.username.charAt(0).toUpperCase() +
          room.username.slice(1).toLowerCase()}{' '}
      </Text>
    </TouchableOpacity>
  );
}

export default RoomCard;
