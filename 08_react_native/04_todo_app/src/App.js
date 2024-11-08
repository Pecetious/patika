import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import todos_data from './todos-data.json';
import TodoCard from './components/TodoCard';
import TodoInput from './components/TodoInput';
import {nanoid} from 'nanoid/non-secure';
function App() {
  const [todos, setTodos] = useState(todos_data);
  const renderTodos = ({item}) => (
    <TodoCard
      todo={item}
      toggle={handleToggleTodo}
      deleteTodo={handleDeleteTodo}
    />
  );
  const handleToggleTodo = id => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? {...todo, isDone: !todo.isDone} : todo,
    );
    setTodos(updatedTodos);
  };
  const handleDeleteTodo = id => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };
  const handleAddTodo = todoName => {
    const todo = {
      id: nanoid(),
      name: todoName,
      isDone: false,
    };
    setTodos([...todos, todo]);
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.header_text}>Todos</Text>
        <Text style={styles.header_text}>{todos.length}</Text>
      </View>
      <FlatList data={todos} renderItem={renderTodos} />
      <TodoInput click={handleAddTodo} />
    </SafeAreaView>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262a30',
  },
  header: {
    flexDirection: 'row',
    margin: 10,
    padding: 10,
    justifyContent: 'space-between',
  },
  header_text: {
    color: "#f0950d",
    fontSize: 35,
    textTransform: 'uppercase',
    
  },
});
