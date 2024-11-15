import React from 'react';
import {Image, Text, View, TouchableWithoutFeedback} from 'react-native';
import styles from './ProductCard.styles';
function ProductCard({product, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{uri: product.image}}
          alt={product.title}
        />
        <View style={styles.body}>
          <Text style={styles.title}>{product.title}</Text>
          <Text style={styles.price}>{product.price} ₺</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default ProductCard;
