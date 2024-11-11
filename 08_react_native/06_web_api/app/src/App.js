import React, {useState, useEffect} from 'react';
import {ActivityIndicator, FlatList, SafeAreaView, Text} from 'react-native';
import axios from 'axios';
import UserCard from './components/UserCard';
function App() {
  const [userList, setUserList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const handleFetch = async () => {
    const {data} = await axios.get(
      'https://jsonplaceholder.typicode.com/users',
    );
    setUserList(data);
    setIsLoading(false);
  };
  useEffect(() => {
    handleFetch();
  }, []);
  const renderUser = ({item}) => <UserCard user={item} />;
  return (
    <SafeAreaView>
      <Text>Hello World</Text>
      {!isLoading ? (
        <FlatList data={userList} renderItem={renderUser} numColumns="2" />
      ) : (
        <ActivityIndicator size="large" />
      )}
    </SafeAreaView>
  );
}

export default App;
