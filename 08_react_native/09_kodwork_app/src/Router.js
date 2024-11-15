import '../gesture-handler.native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import Jobs from './pages/Jobs';
import Favorites from './pages/Favorites';
import JobDetail from './pages/JobDetail';
import {Provider} from 'react-redux';
import store from './redux/store';
const Stack = createNativeStackNavigator();
const JobStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: '#FF6935',
          fontWeight: 'bold',
        },
        headerTintColor: '#ff6935',
      }}>
      <Stack.Screen
        name="JobsScreen"
        component={Jobs}
        options={{
          title: 'Jobs',
        }}
      />
      <Stack.Screen
        options={({route}) => ({
          title: route.params?.title || 'Job Details', // Set title based on route params
        })}
        name="JobDetailScreen"
        component={JobDetail}
      />
    </Stack.Navigator>
  );
};
const FavoritesStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: '#FF6935',
        fontWeight: 'bold',
      },
      headerTintColor: '#ff6935',
    }}>
    <Stack.Screen
      name="FavoritesScreen"
      options={{title: 'Favorited Jobs'}}
      component={Favorites}
    />
    <Stack.Screen
      options={({route}) => ({
        title: route.params?.title || 'Job Details', // Set title based on route params
      })}
      name="JobDetailScreen"
      component={JobDetail}
    />
  </Stack.Navigator>
);
const Drawer = createDrawerNavigator();
function Router() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            headerShown: false,
            drawerActiveTintColor: 'white', // Text color for active item
            drawerActiveBackgroundColor: '#FF6935', // Background color for active item
            drawerInactiveTintColor: '#FF6935', // Text color for inactive items
            drawerInactiveBackgroundColor: 'white', // Background color for inactive items
            drawerLabelStyle: {
              textAlign: 'center',
            },
          }}>
          <Drawer.Screen
            name="JobsStack"
            options={{
              drawerLabel: 'Jobs',
            }}
            component={JobStack}
          />
          <Drawer.Screen
            name="FavoritesStack"
            options={{
              drawerLabel: 'Favorited Jobs',
            }}
            component={FavoritesStack}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Router;
