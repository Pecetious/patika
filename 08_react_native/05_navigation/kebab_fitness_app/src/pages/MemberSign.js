import React, {useState} from 'react';
import {Text, SafeAreaView} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

function MemberSign({navigation}) {
  const [userName, setUserName] = useState('');
  const [userSurname, setUserSurname] = useState('');
  const [userAge, setUserAge] = useState('');
  const [userMail, setUserMail] = useState('');
  const [userHometown, setUserHometown] = useState('');
  const handlesubmit = () => {
    const user = {
      name: userName,
      surname: userSurname,
      age: userAge,
      mail: userMail,
      hometown: userHometown,
    };
    navigation.navigate('MemberResultScreen', {user});
  };
  return (
    <SafeAreaView>
      <Text>Member Sign </Text>
      <Input
        label="Üye Adı"
        placeholder="Adınızı giriniz"
        onChangeText={setUserName}
      />
      <Input
        label="Üye Soyadı"
        placeholder="Soyadınızı giriniz"
        onChangeText={setUserSurname}
      />
      <Input
        label="Üye Yaşı"
        placeholder="Yaşınızı giriniz"
        onChangeText={setUserAge}
      />
      <Input
        label="Üye E-posta"
        placeholder="E-postanızı giriniz"
        onChangeText={setUserMail}
      />
      <Input
        label="Üye Memleketi"
        placeholder="Memleketinizi giriniz"
        onChangeText={setUserHometown}
      />
      <Button text="Kaydı Tamamla" onPress={handlesubmit} />
    </SafeAreaView>
  );
}

export default MemberSign;
