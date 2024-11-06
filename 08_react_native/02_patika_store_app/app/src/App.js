import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import store_data from './store_data.json';
import StoreCard from './components/StoreCard/StoreCard';
function App() {
  const handleRender = ({item}) => <StoreCard product={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_title}>patikastore</Text>
      <TextInput placeholder="Ara..." style={styles.search} />
      <FlatList data={store_data} renderItem={handleRender} numColumns={2} />
    </SafeAreaView>
  );
}
//tfjfhjd
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header_title: {
    color: 'purple',
    fontSize: 50,
    textTransform: 'uppercase',
    letterSpacing: -1,
    fontWeight: 'bold',
    paddingLeft: 20,
  },
  search: {
    fontSize: 22,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    margin: 5,
    padding: 15,
  },
});
export default App;
