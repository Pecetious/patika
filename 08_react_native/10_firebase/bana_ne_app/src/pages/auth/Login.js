import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import colors from '../../styles/colors';
import {Formik} from 'formik';
import auth from '@react-native-firebase/auth';
import {showMessage} from 'react-native-flash-message/src/FlashMessage';
import authErrorCodeParser from '../../utils/authErrorCodeParser';
function Login({navigation}) {
  const initialForm = {
    usermail: '',
    password: '',
  };
  const handleLogin = async formValues => {
    try {
      await auth().signInWithEmailAndPassword(
        formValues.usermail,
        formValues.password,
      );
    } catch (err) {
      showMessage({
        message: authErrorCodeParser(err.code),
        type: 'danger',
      });
      console.log(err);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>bana ne?</Text>
      <Formik initialValues={initialForm} onSubmit={handleLogin}>
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
            <Button title="Giriş Yap" onPress={handleSubmit} />
          </>
        )}
      </Formik>
      <Button
        title="Kayıt Ol"
        theme="secondary"
        onPress={() => navigation.navigate('signinScreen')}
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
export default Login;
