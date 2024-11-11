import React from 'react';
import {
  Image,
  View,
  Text,
  ScrollView,
  FlatList,
  Button,
  Linking,
} from 'react-native';
import styles from './DetailCard.styles';
function DetailCard({food}) {
  const ingredients = [];
  // Loop through 20 ingredients and their corresponding measurements
  for (let i = 1; i <= 20; i++) {
    const ingredient = food[`strIngredient${i}`];
    const measure = food[`strMeasure${i}`];
    // Only add to list if ingredient is not empty or null
    if (ingredient && ingredient.trim()) {
      ingredients.push(`${ingredient}: ${measure}`);
    }
  }
  const renderIngredients = ({item}) => (
    <Text style={styles.ingredients_item}>{item}</Text>
  );
  const handleRedirect = () => {
    const url = 'https://www.youtube.com/watch?v=nMyBC9staMU'; // Replace with your desired link

    Linking.canOpenURL(url)
      .then(supported => {
        if (supported) {
          return Linking.openURL(url);
        } else {
          Alert.alert('Error', "Can't open YouTube link.");
        }
      })
      .catch(err => console.error('An error occurred', err));
  };

  return (
    <ScrollView style={styles.wrapper}>
      <Image style={styles.image} source={{uri: food.strMealThumb}} />
      <Text style={styles.title}>{food.strMeal}</Text>
      <Text style={styles.area}>{food.strArea}</Text>
      <View style={styles.ingredients_wrapper}>
        <Text style={styles.ingredients_title}>Ingredients</Text>
        <FlatList
          data={ingredients}
          numColumns={2}
          renderItem={renderIngredients}
          scrollEnabled={false}
          contentContainerStyle={styles.ingredients_inner}
        />
      </View>
      <Text style={styles.tutorial_title}>Instructions</Text>
      <Text style={styles.tutorial}> {food.strInstructions}</Text>
      <View style={styles.youtube}>
        <Button
          title="Watch on Youtube"
          color="#B78392"
          onPress={handleRedirect}
        />
      </View>
    </ScrollView>
  );
}

export default DetailCard;
