import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import colors from '../../styles/colors';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message/src/FlashMessage';
import authErrorCodeParser from '../../utils/authErrorCodeParser';
function Signup({navigation}) {
  const initialForm = {
    usermail: '',
    password: '',
    passwordConfirm: '',
  };
  const handleSignup = async formValues => {
    if (formValues.password !== formValues.passwordConfirm) {
      showMessage({
        message: 'Şifreler uyuşmuyor',
        type: 'danger',
      });
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        formValues.usermail,
        formValues.passwordConfirm,
      );
      showMessage({
        message: 'Kullanıcı başarıyla oluşturuldu.',
        type: 'success',
      });
      navigation.navigate('MessagesScreen');
      console.log(formValues);
    } catch (err) {
      showMessage({
        message: authErrorCodeParser(err.code),
        type: 'danger',
      });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>bana ne?</Text>
      <Formik initialValues={initialForm} onSubmit={handleSignup}>
        {({values, handleChange, handleSubmit}) => (
          <>
            <Input
              value={values.usermail}
              onType={handleChange('usermail')}
              placeholder="E-postanızı giriniz"
            />
            <Input
              value={values.password}
              onType={handleChange('password')}
              placeholder="Şifrenizi giriniz"
              isSecure
            />
            <Input
              value={values.passwordConfirm}
              onType={handleChange('passwordConfirm')}
              placeholder="Şifrenizi tekrar giriniz"
              isSecure
            />
            <Button title="Kayıt Ol" theme="primary" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button
        title="Geri"
        theme="secondary"
        onPress={() => navigation.goBack()}
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
export default Signup;
