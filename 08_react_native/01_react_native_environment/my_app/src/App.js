import React from 'react';
import {SafeAreaView, StyleSheet, FlatList, Text} from 'react-native';
import news_data from './news_data.json';
import NewsCard from './components/NewsCard/NewsCard';
import NewsBanner from './components/NewsBanner/NewsBanner';
function App() {
  const handleRender = ({item}) => <NewsCard article={item} />;
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header_text}>NEWS</Text>
      <FlatList
        ListHeaderComponent={(<NewsBanner />)}
        keyExtractor={item => item.u_id.toString()}
        data={news_data}
        renderItem={handleRender}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1',
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 50,
  },
});
export default App;
