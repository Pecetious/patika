import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import useFetch from '../../hooks/useFetch';
import {API_ENDPOINT} from '@env';
import DetailCard from '../../components/Cards/DetailCard';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
function FoodDetail({route}) {
  const {id} = route.params;
  const {
    data: mealData,
    error,
    loading,
  } = useFetch(`${API_ENDPOINT}/lookup.php?i=${id}`);
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={styles.wrapper}>
      {!loading && <DetailCard food={mealData.meals[0]} />}
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: '#2B000D',
  },
});
export default FoodDetail;
