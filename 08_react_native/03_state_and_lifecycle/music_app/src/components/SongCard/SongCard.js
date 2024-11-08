import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './SongCard.styles';
function SongCard({song}) {
  return (
    <View style={styles.wrapper}>
      <Image source={{uri: song.imageUrl}} style={styles.image} />
      <View style={styles.inner_wrapper}>
        <Text style={styles.title}>{song.title}</Text>
        <View style={styles.content_wrapper}>
          <View style={styles.info}>
            <Text>{song.artist}</Text>
            <Text style={styles.year}>{song.year}</Text>
          </View>
          
          {song.isSoldOut && (
            <View style={styles.soldout_wrapper}>
              <Text style={styles.soldout}>Tükendi</Text>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

export default SongCard;
