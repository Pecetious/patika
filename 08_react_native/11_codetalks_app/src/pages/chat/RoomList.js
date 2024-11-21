import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import Button from '../../components/Button';
import colors from '../../styles/colors';
import {firebase} from '@react-native-firebase/database';
import Modal from '../../components/Modal';
import auth from '@react-native-firebase/auth';
import parseData from '../../utils/parseData';
import RoomCard from '../../components/card/RoomCard';
function RoomList({navigation}) {
  const database = firebase
    .app()
    .database(
      'https://reactnative-b04df-default-rtdb.europe-west1.firebasedatabase.app/',
    );
  const handleNewRoom = async content => {
    const usermail = auth().currentUser.email;
    const contentObj = {
      name: content,
      username: usermail.split('@')[0],
      date: new Date().toISOString(),
    };
    database.ref('/codetalks/rooms/').push(contentObj);
    setModalVisible(false);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [roomList, setRoomList] = useState([]);
  useEffect(() => {
    database.ref('/codetalks/rooms/').on('value', snapshot => {
      const data = parseData(snapshot.val());
      setRoomList(data);
    });
  }, []);
  const renderRoom = ({item}) => (
    <RoomCard room={item} onEnter={() => handleEnterRoom(item.id, item.name)} />
  );
  const handleEnterRoom = (id, name) => {
    navigation.navigate('ChatScreen', {id, name});
  };
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handelModalClose = () => {
    setModalVisible(false);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={roomList} numColumns="2" renderItem={renderRoom} />
      <Button
        type="floating"
        theme="secondary"
        icon={{
          color: colors.murrey,
          name: 'card-plus',
          size: 40,
        }}
        onPress={toggleModal}
      />
      <Modal
        visible={modalVisible}
        onClose={handelModalClose}
        onSend={handleNewRoom}
        buttonTitle="Create Room"
        placeholder="Enter the room name"
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default RoomList;
