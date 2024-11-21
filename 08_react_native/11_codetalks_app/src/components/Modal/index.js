import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import Button from '../Button';
import styles from './styles';
function Modal({onClose, visible, onSend, buttonTitle, placeholder}) {
  const [text, setText] = useState(null);

  const handleSend = () => {
    if (!text) return;
    onSend(text);
    setText(null);
  };
  return (
    <ReactNativeModal
      style={styles.modal}
      isVisible={visible}
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}
      swipeDirection="down">
      <View style={styles.container}>
        <TextInput
          placeholder={placeholder}
          onChangeText={setText}
          value={text}
          style={styles.input}
          multiline
        />
        <Button title={buttonTitle} onPress={handleSend} />
      </View>
    </ReactNativeModal>
  );
}

export default Modal;
