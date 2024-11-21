import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import Login from './pages/auth/Login';
import Signup from './pages/auth/Signup';
import auth from '@react-native-firebase/auth';
import RoomList from './pages/chat/RoomList';
import Chat from './pages/chat/Chat';
import colors from './styles/colors';
import Button from './components/Button';
const Stack = createNativeStackNavigator();
const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="LoginScreen" component={Login} />
      <Stack.Screen name="SignupScreen" component={Signup} />
    </Stack.Navigator>
  );
};
const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: colors.murrey,
        },
        headerTintColor: colors.murrey,
        headerRight: () => (
          <Button
            theme="secondary"
            icon={{
              name: 'logout',
              size: 20,
              color: colors.murrey,
            }}
            onPress={() => auth().signOut()}
          />
        ),
      }}>
      <Stack.Screen
        name="RoomListScreen"
        options={{
          headerTitle: 'Rooms',
        }}
        component={RoomList}
      />
      <Stack.Screen
        name="ChatScreen"
        options={({route}) => ({
          headerTitle: route.params.name,
          headerShown: true,
        })}
        component={Chat}
      />
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
            <Stack.Screen name="ChatStack" component={ChatStack} />
          </Stack.Navigator>
        </>
      ) : (
        <>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="AuthStack" component={AuthStack} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}

export default Router;
