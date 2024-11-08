import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import music_data from './music-data.json';
import SongCard from './components/SongCard';
import SearchBar from './components/SearchBar';
function App() {
  const [filteredSongs, setFilteredSongs] = useState(music_data);
  const renderSong = ({item}) => <SongCard song={item} />;
  const renderSeparetor = () => <View style={styles.seperator} />;
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();
      return currentTitle.indexOf(searchedText) > -1;
    });
    setFilteredSongs(filteredList);
  };
  return (
    <SafeAreaView style={styles.container}>
      <SearchBar search={handleSearch} />
      <FlatList
        data={filteredSongs}
        renderItem={renderSong}
        ItemSeparatorComponent={renderSeparetor}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperator: {
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
});
export default App;
