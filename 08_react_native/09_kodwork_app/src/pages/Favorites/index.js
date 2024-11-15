import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import JobCard from '../../components/JobCard';
import {useSelector} from 'react-redux';

function Favorites({navigation}) {
  const favorites = useSelector(state => state.favorites);
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
      {favorites.length < 1 && (
        <Text style={styles.no_item}>Favorite a job to see it here !</Text>
      )}
      <FlatList data={favorites} renderItem={renderJobs} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  no_item: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: "#FF6935"
  },
});
export default Favorites;
