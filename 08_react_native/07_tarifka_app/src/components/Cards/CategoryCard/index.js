import {Text} from '@react-navigation/elements';
import React from 'react';
import {Image, View, TouchableNativeFeedback} from 'react-native';
import styles from './CategoryCard.styles';
function CategoryCard({category, onSelect}) {
  return (
    <TouchableNativeFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image source={{uri: category.strCategoryThumb}} style={styles.image} />
        <Text style={styles.title}>{category.strCategory}</Text>
      </View>
    </TouchableNativeFeedback>
  );
}

export default CategoryCard;
