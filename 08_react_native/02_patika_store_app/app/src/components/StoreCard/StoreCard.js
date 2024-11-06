import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './StoreCard.style';
function StoreCard({product}) {
  console.log(product);
  return (
    <View style={styles.container}>
      <Image
        source={{uri: product.imgURL}}
        alt={product.title}
        style={styles.image}
      />
      <View style={styles.inner}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>{product.price}</Text>
        {!product.inStock && <Text style={styles.stock}>Stokta Yok</Text>}
      </View>
    </View>
  );
}

export default StoreCard;
