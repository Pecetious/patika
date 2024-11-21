import React from 'react';
import {Text, View} from 'react-native';
import styles from './styles';
import {formatDistance, parseISO} from 'date-fns';
import {enUS} from 'date-fns/locale';

function ChatCard({message}) {
  const formattedDate = formatDistance(parseISO(message.date), new Date(), {
    addSuffix: true,
    locale: enUS,
  });
  return (
    <View style={styles.container}>
      <Text style={styles.content}>{message.content}</Text>
      <View style={styles.inner}>
        <Text style={styles.user}>{message.username}</Text>
        <Text style={styles.date}>{formattedDate}</Text>
      </View>
    </View>
  );
}

export default ChatCard;
