import React from 'react';
import {FlatList, SafeAreaView, Text} from 'react-native';
import {useSelector} from 'react-redux';
function Secondary() {
  const nameList = useSelector(state => state.example.nameList);
  return (
    <SafeAreaView>
      <FlatList data={nameList} renderItem={({item}) => <Text>{item}</Text>} />
    </SafeAreaView>
  );
}

export default Secondary;
