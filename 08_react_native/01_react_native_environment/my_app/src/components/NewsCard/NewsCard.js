import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './NewsCard.style';
function NewsCard({article}) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: article.imageUrl}}
        alt={article.author}
      />
      <View style={styles.inner}>
        <Text style={styles.title}>{article.title}</Text>
        <Text style={styles.description}>{article.description}</Text>
        <Text style={styles.author}>{article.author}</Text>
      </View>
    </View>
  );
}

export default NewsCard;
