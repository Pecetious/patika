import React from 'react';
import {ActivityIndicator, SafeAreaView, StyleSheet, Text} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import JobDetailCard from '../../components/JobDetailCard';
function JobDetail({route}) {
  const {id, title} = route.params;
  const {
    data: responseData,
    error,
    loading,
  } = useFetch(`${Config.API_ENDPOINT}/jobs/${id}`, {
    headers: {
      Authorization: `Bearer ${Config.API_KEY}`,
    },
  });
  if (error) {
    return console.error(error);
  }
  if (loading) {
    return <ActivityIndicator size="large" color="#FF6935" />;
  }
  return (
    <SafeAreaView style={styles.container}>
      {/* <Text>{title}</Text> */}
      <JobDetailCard job={responseData} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default JobDetail;
