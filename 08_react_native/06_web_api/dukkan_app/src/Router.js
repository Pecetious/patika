import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './pages/Products';
import Detail from './pages/Detail';
const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: 'Products',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#64b5f6',
            },
            headerTitleStyle: {color: 'white'},
          }}
          name="ProductsPage"
          component={Products}
        />
        <Stack.Screen
          name="DetailPage"
          options={{
            title: 'Detail',
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#64b5f6',
            },
            headerTitleStyle: {color: 'white'},
            headerTintColor: 'white',
          }}
          component={Detail}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
