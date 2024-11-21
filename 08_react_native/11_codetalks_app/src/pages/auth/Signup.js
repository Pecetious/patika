import React from 'react';
import {Alert, SafeAreaView, StyleSheet, Text} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import colors from '../../styles/colors';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';

function Signup({navigation}) {
  const initialForm = {
    usermail: '',
    password: '',
    passwordConfirm: '',
  };
  const handleUserSignup = async values => {
    if (values.password !== values.passwordConfirm) {
      return;
    }
    try {
      await auth().createUserWithEmailAndPassword(
        values.usermail,
        values.password,
      );
      Alert.alert('Codeworks', 'User created');
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>CODEWORKS</Text>
      <Formik initialValues={initialForm} onSubmit={handleUserSignup}>
        {({handleChange, handleSubmit, values}) => (
          <>
            <Input
              placeholder="E-mail"
              value={values.usermail}
              onType={handleChange('usermail')}
            />
            <Input
              placeholder="Password"
              isSecure
              value={values.password}
              onType={handleChange('password')}
            />
            <Input
              placeholder="Password Confirmation"
              isSecure
              value={values.passwordConfirm}
              onType={handleChange('passwordConfirm')}
            />
            <Button
              title="Signup"
              theme="secondary"
              icon={{
                color: colors.murrey,
                name: 'account-plus',
                size: 20,
              }}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
      <Button
        title="Login"
        icon={{
          color: colors.lightsilver,
          name: 'login',
          size: 20,
        }}
        onPress={() => {
          navigation.goBack();
        }}
      />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logo: {
    fontSize: 50,
    textAlign: 'center',
    textAlignVertical: 'bottom',
    color: colors.murrey,
    fontWeight: '900',
    letterSpacing: 2,
    flex: 0.3,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Signup;
