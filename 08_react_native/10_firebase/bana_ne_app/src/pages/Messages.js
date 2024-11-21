import React, {useEffect, useState} from 'react';
import {SafeAreaView, StyleSheet, FlatList} from 'react-native';
import colors from '../styles/colors';
import FloatingButton from '../components/FloatingButton';
import ContentInput from '../components/modal/ContentInput';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/database';
import parseContentData from '../utils/parseContentData';
import MessageCard from '../components/card/MessageCard';
function Messages() {
  const database = firebase
    .app()
    .database(
      'https://reactnative-b04df-default-rtdb.europe-west1.firebasedatabase.app/',
    );
  const handelModalClose = () => {
    setModalVisible(false);
  };
  const handleSendContent = content => {
    const usermail = auth().currentUser.email;
    const contentObj = {
      text: content,
      username: usermail.split('@')[0],
      date: new Date().toISOString(),
      dislike: 0,
    };
    console.log(contentObj);
    database.ref('/banane/messages/').push(contentObj);
  };
  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const [modalVisible, setModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);
  useEffect(() => {
    database.ref('/banane/messages/').on('value', snapshot => {
      const contentData = parseContentData(snapshot.val() || {});
      console.log(contentData);
      setContentList(contentData);
    });
  }, []);
  const handelBanane = item => {
    database
      .ref(`/banane/messages/${item.id}`)
      .update({dislike: item.dislike + 1});
  };
  const renderContent = ({item}) => (
    <MessageCard message={item} onBanane={() => handelBanane(item)} />
  );
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={contentList} renderItem={renderContent} />
      <FloatingButton iconName="plus" iconColor="white" onPress={toggleModal} />
      <ContentInput
        visible={modalVisible}
        onClose={handelModalClose}
        onSend={handleSendContent}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: colors.murrey,
    fontSize: 120,
    textAlign: 'center',
  },
});
export default Messages;
