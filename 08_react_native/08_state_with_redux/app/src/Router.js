import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Primary from './pages/Primary';
import Secondary from './pages/Secondary';
import {Provider} from 'react-redux';
import store from './redux/store';
const Tab = createBottomTabNavigator();
function Router() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Primary" component={Primary} />
          <Tab.Screen name="Secondary" component={Secondary} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Router;
