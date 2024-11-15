import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
} from 'react-native';
import useFetch from '../../hooks/useFetch';
import Config from 'react-native-config';
import JobCard from '../../components/JobCard';
function Jobs({navigation}) {
  const fetchOptions = {
    params: {
      page: 1,
    },
    headers: {
      Authorization: `Bearer ${Config.API_KEY}`,
    },
  };
  const {
    data: responseData,
    error,
    loading,
  } = useFetch(`${Config.API_ENDPOINT}/jobs`, fetchOptions);
  if (error) {
    return console.log(error, Config.API_ENDPOINT);
  }
  if (loading) {
    return <ActivityIndicator size="large" color="#FF6935" />;
  }
  const renderJobs = ({item}) => (
    <JobCard
      job={item}
      onSelect={() => {
        navigation.navigate('JobDetailScreen', {id: item.id, title: item.name});
      }}
    />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={responseData.results} renderItem={renderJobs} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Jobs;
