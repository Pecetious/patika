import React, {useState} from 'react';
import {Button, TextInput, View} from 'react-native';
import styles from './TodoInput.styles';
function TodoInput({click}) {
  const [todoName, setTodoName] = useState('');
  const handleClick = () => {
    click(todoName);
    setTodoName('');
  };
  return (
    <View style={styles.wrapper}>
      <TextInput
        style={styles.input}
        placeholder="Enter a todo"
        placeholderTextColor={'white'}
        multiline
        rows={5}
        value={todoName}
        onChangeText={text => setTodoName(text)}
      />
      <Button
        style={styles.button}
        title="Add"
        onPress={handleClick}
        color={'#11d435'}
      />
    </View>
  );
}

export default TodoInput;
