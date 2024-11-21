import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet, Text} from 'react-native';
import Button from '../../components/Button';
import Modal from '../../components/Modal';
import {firebase} from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';
import parseData from '../../utils/parseData';
import ChatCard from '../../components/card/ChatCard';
import colors from '../../styles/colors';

function Chat({route}) {
  const {name, id: roomId} = route.params;
  const [modalVisible, setModalVisible] = useState(false);
  const [chatMessages, setChatMessages] = useState([]);
  const database = firebase
    .app()
    .database(
      'https://reactnative-b04df-default-rtdb.europe-west1.firebasedatabase.app/',
    );
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const handelModalClose = () => {
    setModalVisible(false);
  };
  const handleNewMessage = async content => {
    const usermail = auth().currentUser.email;
    const contentObj = {
      content,
      username: usermail.split('@')[0],
      date: new Date().toISOString(),
    };
    database.ref(`/codetalks/rooms/${roomId}/messages/`).push(contentObj);
    setModalVisible(false);
  };
  useEffect(() => {
    database
      .ref(`/codetalks/rooms/${roomId}/messages/`)
      .on('value', snapshot => {
        const data = parseData(snapshot.val());
        setChatMessages(data ? data.reverse() : false);
      });
  }, []);
  const renderMessage = ({item}) => <ChatCard message={item} />;

  return (
    <SafeAreaView style={styles.container}>
      {!chatMessages && (
        <Text style={styles.title}>{name} room is created</Text>
      )}
      <FlatList data={chatMessages} renderItem={renderMessage} />
      <Button
        type="floating"
        icon={{
          color: 'white',
          name: 'plus',
          size: 40,
        }}
        onPress={toggleModal}
      />
      <Modal
        visible={modalVisible}
        onClose={handelModalClose}
        onSend={handleNewMessage}
        buttonTitle="Send"
        placeholder="Enter your message..."
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    borderWidth: 2,
    borderColor: colors.murrey,
    borderStyle: 'dashed',
    borderRadius: 5,
    margin: 'auto',
    marginTop: 10,
    padding: 15,
  },
});
export default Chat;
