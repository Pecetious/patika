import React from 'react';
import {Image, SafeAreaView, Text, View} from 'react-native';
import styles from './Detail.styles';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import Loading from '../../components/Loading';
import Error from '../../components/Error';
function Detail({route}) {
  const {id} = route.params;
  const {
    responseData: productDetail,
    error,
    loading,
  } = useFetch(`${Config.API_URL}/products/${id}`);
  if (error) {
    return <Error />;
  }
  if (loading) {
    return <Loading />;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.image} source={{uri: productDetail.image}} />
      <View style={styles.body}>
        <Text style={styles.title}>{productDetail.title}</Text>
        <Text style={styles.detail}>{productDetail.description}</Text>
        <Text style={styles.price}>{productDetail.price}₺</Text>
      </View>
    </SafeAreaView>
  );
}

export default Detail;
