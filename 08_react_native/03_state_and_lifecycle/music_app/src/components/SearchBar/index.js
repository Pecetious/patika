import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './SearchBar.styles';
function SearchBar({search}) {
  return (
    <View style={styles.container}>
      <TextInput placeholder="Ara..." onChangeText={search} />
    </View>
  );
}

export default SearchBar;
