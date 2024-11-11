import React from 'react';
import {FlatList, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import useFetch from '../../hooks/useFetch';
import {API_ENDPOINT} from '@env';
import FoodCard from '../../components/Cards/FoodCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';

function CategoryFoods({route, navigation}) {
  const {name} = route.params;
  const handleFoodSelect = (id, name) => {
    navigation.navigate('FoodDetailScreen', {id, name});
  };
  const {
    data: foodData,
    error,
    loading,
  } = useFetch(`${API_ENDPOINT}/filter.php?c=${name}`);
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  const renderFood = ({item}) => (
    <FoodCard
      food={item}
      onSelect={() => handleFoodSelect(item.idMeal, item.strMeal)}
    />
  );
  return (
    <SafeAreaView style={styles.wrapper}>
      {!loading && (
        <FlatList
          data={foodData.meals}
          keyExtractor={item => item.idMeal}
          renderItem={renderFood}
        />
      )}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#2B000D',
  },
});
export default CategoryFoods;
