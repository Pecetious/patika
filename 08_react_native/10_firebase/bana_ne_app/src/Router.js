import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import FlashMessage from 'react-native-flash-message/src/FlashMessage';
import Messages from './pages/Messages';
import colors from './styles/colors';
import auth from '@react-native-firebase/auth';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="loginScreen" component={Login} />
      <Stack.Screen name="signinScreen" component={Signup} />
    </Stack.Navigator>
  );
};
function Router() {
  const [userSession, setUserSession] = useState(null);
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      setUserSession(!!user);
    });
  }, []);
  return (
    <NavigationContainer>
      {userSession ? (
        <>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen
              name="MessagesScreen"
              options={{
                headerShown: true,
                headerTitle: 'Dertler',
                headerBackVisible: false,
                headerTitleAlign: 'center',
                headerTitleStyle: {
                  color: colors.murrey,
                },
                headerRight: () => (
                  <Icon
                    name="logout"
                    size={30}
                    color={colors.murrey}
                    onPress={() => {
                      auth().signOut();
                    }}
                  />
                ),
              }}
              component={Messages}
            />
          </Stack.Navigator>
        </>
      ) : (
        <>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="authStack" component={AuthStack} />
          </Stack.Navigator>
        </>
      )}
      <FlashMessage position="top" />
    </NavigationContainer>
  );
}

export default Router;
