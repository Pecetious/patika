import {Text} from '@react-navigation/elements';
import React from 'react';
import {Image, TouchableWithoutFeedback, View} from 'react-native';
import styles from './FoodCard.styles';
function FoodCard({food, onSelect}) {
  return (
    <TouchableWithoutFeedback onPress={onSelect}>
      <View style={styles.container}>
        <Image style={styles.image} source={{uri: food.strMealThumb}} />
        <Text style={styles.title}>{food.strMeal}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default FoodCard;
