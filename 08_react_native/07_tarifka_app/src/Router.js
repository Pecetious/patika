import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Categories from './pages/Categories';
import CategoryFoods from './pages/CategoryFoods';
import FoodDetail from './pages/FoodDetail';
const StackNav = createNativeStackNavigator();
function Router() {
  return (
    <NavigationContainer>
      <StackNav.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#490D1F',
          },
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: '#B78392',
          },
          headerTintColor: '#B78392',
        }}>
        <StackNav.Screen
          name="CategoriesScreen"
          options={{headerTitle: 'Food Categories'}}
          component={Categories}
        />
        <StackNav.Screen
          name="CategoryFoodsScreen"
          options={({route}) => ({
            title: route.params.name,
           
          })}
          component={CategoryFoods}
        />
        <StackNav.Screen
          name="FoodDetailScreen"
          options={({route}) => ({
            title: route.params.name,
           
          })}
          component={FoodDetail}
        />
      </StackNav.Navigator>
    </NavigationContainer>
  );
}

export default Router;
