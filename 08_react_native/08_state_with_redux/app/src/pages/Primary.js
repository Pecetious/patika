import React, {useState} from 'react';
import {TextInput, Text, Button, View, SafeAreaView} from 'react-native';
import {useDispatch} from 'react-redux';
import {addName} from '../redux/slice';
function Primary() {
  const [text, setText] = useState('');
  const handleAdd = () => {
    dispatch(addName(text));
    setText('');
  };
  const dispatch = useDispatch();
  return (
    <SafeAreaView>
      <Text style={{fontSize: 30}}>Primary</Text>
      <View style={{borderWidth: 1, margin: 10, padding: 5}}>
        <TextInput
          value={text}
          onChangeText={setText}
          placeholder="Enter your name"
        />
      </View>
      <Button title="Add" onPress={handleAdd} />
    </SafeAreaView>
  );
}

export default Primary;
