import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import Button from './components/Button';

function App() {
  const renderElements = ({item}) => <Text>{item}</Text>;
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  const addToList = () => {
    if (text === '') return;
    setList([...list, text]);
    setText('');
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text>Testing</Text>
      <FlatList testID="item-list" data={list} renderItem={renderElements} />
      <TextInput
        testID="item-input"
        placeholder="add..."
        style={styles.input}
        value={text}
        onChangeText={setText}
      />

      <Button testID="item-button" title="Radyoaktif Boi" onClick={addToList} />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    backgroundColor: 'gray',
    margin: 10,
    padding: 10,
    borderRadius: 10,
    color: 'white',
  },
});
export default App;
