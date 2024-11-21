import React from 'react';
import {Button, SafeAreaView, Text} from 'react-native';
import auth from '@react-native-firebase/auth';
import {firebase} from '@react-native-firebase/database';
function App() {
  // const signUp = () => {
  //   auth()
  //     .createUserWithEmailAndPassword(
  //       'jane.doe@example.com',
  //       'SuperSecretPassword!',
  //     )
  //     .then(() => {
  //       console.log('User account created & signed in!');
  //     })
  //     .catch(error => {
  //       if (error.code === 'auth/email-already-in-use') {
  //         console.log('That email address is already in use!');
  //       }

  //       if (error.code === 'auth/invalid-email') {
  //         console.log('That email address is invalid!');
  //       }

  //       console.error(error);
  //     });
  // };
  const checkDb = () => {
    const reference = firebase
      .app()
      .database(
        'https://reactnative-b04df-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref('cars/');
    reference
      .once('value')
      .then(snapshot => console.log(snapshot.val()))
      .catch(err => console.log(err));
  };
  const setDB = () => {
    const reference = firebase
      .app()
      .database(
        'https://reactnative-b04df-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref('cars/rentable');
    reference.set({
      brand: 'Audi',
      model: 'R8',
      price: 128,
    });
  };
  const pushDB = () => {
    const reference = firebase
      .app()
      .database(
        'https://reactnative-b04df-default-rtdb.europe-west1.firebasedatabase.app/',
      )
      .ref('cars/rentable');
    reference.push({
      brand: 'Lamborghini',
      model: 'Huracan SVJ',
      price: 350,
    });
  };
  return (
    <SafeAreaView>
      <Text>HELLO FIREBASE</Text>
      <Button title="check db" onPress={checkDb} />
      <Button title="set db" onPress={setDB} />
      <Button title="push db" onPress={pushDB} />
    </SafeAreaView>
  );
}

export default App;
