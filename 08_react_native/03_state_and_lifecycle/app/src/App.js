import React, {useState} from 'react';
import {Button, FlatList, SafeAreaView, Switch, Text} from 'react-native';
const data = [
  {
    id: 0,
    name: 'cafe.exe',
    isFavorite: true,
  },
  {
    id: 1,
    name: 'KafeKafe',
    isFavorite: false,
  },
  {
    id: 2,
    name: 'BugG',
    isFavorite: false,
  },
  {
    id: 3,
    name: "Rock'n'Code",
    isFavorite: true,
  },
  {
    id: 4,
    name: 'do(drink)',
    isFavorite: false,
  },
  {
    id: 5,
    name: 'esc',
    isFavorite: false,
  },
];
function App() {
  const [cafeList, setCafeList] = useState(data);
  const [showFavorites, setShowFavorites] = useState(false);
  const handleFavorites = val => {
    setShowFavorites(val);
    val
      ? setCafeList(cafeList.filter(item => item.isFavorite))
      : setCafeList(data);
  };
  return (
    <SafeAreaView>
      <Switch
        value={showFavorites}
        onValueChange={change => handleFavorites(change)}
      />
      <FlatList
        data={cafeList}
        renderItem={({item}) => <Text>{item.name}</Text>}
      />
    </SafeAreaView>
  );
}

export default App;
