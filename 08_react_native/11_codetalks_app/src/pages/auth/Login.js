import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';
import Button from '../../components/Button';
import Input from '../../components/Input';
import colors from '../../styles/colors';
import auth from '@react-native-firebase/auth';
import {Formik} from 'formik';

function Login({navigation}) {
  const initialForm = {
    usermail: '',
    password: '',
  };
  const handleUserLogin = async values => {
    try {
      await auth().signInWithEmailAndPassword(values.usermail, values.password);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.logo}>CODEWORKS</Text>
      <Formik initialValues={initialForm} onSubmit={handleUserLogin}>
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
            <Button
              title="Login"
              theme="secondary"
              icon={{
                color: colors.murrey,
                name: 'login',
                size: 20,
              }}
              onPress={handleSubmit}
            />
          </>
        )}
      </Formik>
      <Button
        title="Signup"
        icon={{
          color: colors.lightsilver,
          name: 'account-plus',
          size: 20,
        }}
        onPress={() => {
          navigation.navigate('SignupScreen');
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
export default Login;
