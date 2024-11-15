import React from 'react';
import styles from './Products.styles';
import {SafeAreaView, FlatList} from 'react-native';
import Config from 'react-native-config';
import ProductCard from '../../components/ProductCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
function Products({navigation}) {
  const handleProductSelect = id => {
    navigation.navigate('DetailPage', {id});
  };
  const renderProduct = ({item}) => (
    <ProductCard product={item} onSelect={() => handleProductSelect(item.id)} />
  );
  const {
    loading,
    responseData: productData,
    error,
  } = useFetch(`${Config.API_URL}/products`);

  if (error) {
    return <Error />;
  }
  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <Loading size="large" />
      ) : (
        <FlatList data={productData} renderItem={renderProduct} />
      )}
    </SafeAreaView>
  );
}

export default Products;
