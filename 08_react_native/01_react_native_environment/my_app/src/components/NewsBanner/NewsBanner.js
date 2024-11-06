import React from 'react';
import {Image, ScrollView} from 'react-native';
import styles from './NewsBanner.style';
import banner_data from "../../news_banner_data.json"
function NewsBanner() {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {banner_data.map(banner => (
        <Image style={styles.image} source={{uri: banner.imageUrl}} />
      ))}
    </ScrollView>
  );
}

export default NewsBanner;
