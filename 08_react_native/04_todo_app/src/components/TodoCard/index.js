import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './TodoCard.styles';
function TodoCard({todo, toggle, deleteTodo}) {
  return !todo.isDone ? (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() => toggle(todo.id)}
      onLongPress={() => deleteTodo(todo.id)}
      delayLongPress={1500}>
      <Text style={styles.name}>{todo.name}</Text>
    </TouchableOpacity>
  ) : (
    <TouchableOpacity
      style={styles.done}
      onPress={() => toggle(todo.id)}
      onLongPress={() => deleteTodo(todo.id)}
      delayLongPress={1500}>
      <Text style={styles.done_name}>{todo.name}</Text>
    </TouchableOpacity>
  );
}

export default TodoCard;
