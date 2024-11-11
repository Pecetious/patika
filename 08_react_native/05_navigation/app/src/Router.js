import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Member from './pages/member/Member';
import Profile from './pages/profile/Profile';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MemberUpdate from './pages/member/MemberUpdate';
import MemberDetail from './pages/member/MemberDetail';
import ProfileEdit from './pages/profile/ProfileEdit';
import {Button} from 'react-native';
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const MemberStack = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerLeft: () => (
          <Button
            title="Detail"
            onPress={() => {
              navigation.navigate('MemberDetailScreen');
            }}
          />
        ),
      }}>
      <Stack.Screen name="MemberScreen" component={Member} />
      <Stack.Screen name="MemberDetailScreen" component={MemberDetail} />
      <Stack.Screen name="MemberUpdateScreen" component={MemberUpdate} />
    </Stack.Navigator>
  );
};
const ProfileStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, headerLeft: () => <Button />}}>
      <Stack.Screen name="ProfileScreen" component={Profile} />
      <Stack.Screen name="ProfileEditScreen" component={ProfileEdit} />
    </Stack.Navigator>
  );
};
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Member">
        <Tab.Screen name="Member" component={MemberStack} />
        <Tab.Screen name="Profile" component={ProfileStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
