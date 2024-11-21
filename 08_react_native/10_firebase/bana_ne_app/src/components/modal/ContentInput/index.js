import React, {useState} from 'react';
import {View, TextInput} from 'react-native';
import styles from './ContentInput.styles';
import Button from '../../Button';
import Modal from 'react-native-modal';
function ContentInput({visible, onClose, onSend}) {
  const [text, setText] = useState(null);

  const handleSend = () => {
    if (!text) return;
    onSend(text);
    setText(null);
  };
  return (
    <Modal
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection="down">
      <View style={styles.container}>
        <TextInput
          placeholder="Darla hadi milleti..."
          onChangeText={setText}
          value={text}
          style={styles.input}
          multiline
        />
        <Button title="Gönder" onPress={handleSend} />
      </View>
    </Modal>
  );
}

export default ContentInput;
