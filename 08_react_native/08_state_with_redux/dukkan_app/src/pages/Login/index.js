import React from 'react';
import {Alert, Image, SafeAreaView, Text, View} from 'react-native';
import styles from './Login.styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import {Formik} from 'formik';
import userSchema from '../../validations';
import usePost from '../../hooks/usePost';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';
import {saveUser} from '../../redux/authSlice';
function Login() {
  const dispatch = useDispatch();
  const {data, post, loading, error} = usePost();
  const handleLogin = values => {
    post(`${Config.LOGIN_ENDPOINT}`, values);
  };
  if (error) {
    console.log(error);
    return Alert.alert('Dükkan', 'Kullanıcı bulunamadı !');
  }
  if (data) {
    if (data.status === 'Error') {
      Alert.alert('Dükkan', 'Kullanıcı bulunamadı');
    } else {
      dispatch(saveUser(userData));
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.logo_container}>
        <Image
          style={styles.logo}
          source={require('../../assets/dukkan_logo.png')}
        />
      </View>
      <Formik
        initialValues={{username: '', password: ''}} // username: "johnd", password: "m38rmF$"
        onSubmit={values => handleLogin(values)}
        validationSchema={userSchema}>
        {({handleChange, handleSubmit, values, errors, touched}) => (
          <View style={styles.body}>
            <Input
              placeholder="Kullanıcı adını giriniz"
              onType={handleChange('username')}
              value={values.username}
              iconName="account"
              iconColor="gray"
            />
            {errors.username && touched.username && (
              <Text style={styles.error}>{errors.username}</Text>
            )}
            <Input
              placeholder="Şifrenizi giriniz"
              onType={handleChange('password')}
              value={values.password}
              iconName="key"
              iconColor="gray"
              isSecure
            />
            {errors.password && touched.password && (
              <Text style={styles.error}>{errors.password}</Text>
            )}
            <Button
              title="Giriş Yap"
              onSelect={handleSubmit}
              loading={loading}
            />
          </View>
        )}
      </Formik>
    </SafeAreaView>
  );
}

export default Login;

const userData = {
  address: {
    geolocation: {
      lat: '40.3467',
      long: '-40.1310',
    },
    city: 'san Antonio',
    street: 'adams St',
    number: 245,
    zipcode: '80796-1234',
  },
  id: 5,
  email: 'derek@gmail.com',
  username: 'derek',
  password: 'jklg*_56',
  name: {
    firstname: 'derek',
    lastname: 'powell',
  },
  phone: '1-956-001-1945',
  __v: 0,
};
