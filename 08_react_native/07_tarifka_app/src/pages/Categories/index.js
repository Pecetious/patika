import React from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';
import useFetch from '../../hooks/useFetch';
import {API_ENDPOINT} from '@env';
import CategoryCard from '../../components/Cards/CategoryCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
function Categories({navigation}) {
  const handleCategorySelect = name => {
    navigation.navigate('CategoryFoodsScreen', {name});
  };
  const {
    data: categoryData,
    error,
    loading,
  } = useFetch(`${API_ENDPOINT}/categories.php`);
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  const renderCategory = ({item}) => (
    <CategoryCard
      category={item}
      onSelect={() => handleCategorySelect(item.strCategory)}
    />
  );
  return (
    <SafeAreaView style={styles.wrapper}>
      {!loading && (
        <FlatList
          numColumns={2}
          data={categoryData.categories}
          keyExtractor={item => item.idCategory}
          renderItem={renderCategory}
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
export default Categories;
