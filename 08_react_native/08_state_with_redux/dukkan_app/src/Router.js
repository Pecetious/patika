import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Products from './pages/Products';
import Detail from './pages/Detail';
import Login from './pages/Login';
import {useDispatch, useSelector} from 'react-redux';
import {loadUser, saveUser} from './redux/authSlice';
import Loading from './components/Loading';
import Button from './components/Button';
const Stack = createNativeStackNavigator();
function App() {
  const dispatch = useDispatch();
  const userSession = useSelector(state => state.auth.user);
  const isAuthLoading = useSelector(state => state.auth.isAuthLoading);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  return (
    <NavigationContainer>
      {isAuthLoading ? (
        <Loading />
      ) : !userSession ? (
        <Stack.Navigator>
          <Stack.Screen
            name="LoginPage"
            options={{
              headerShown: false,
            }}
            component={Login}
          />
        </Stack.Navigator>
      ) : (
        <>
          <Stack.Navigator>
            <Stack.Screen
              options={{
                title: 'Products',
                headerTitleAlign: 'center',
                headerStyle: {
                  backgroundColor: '#64b5f6',
                },
                headerTitleStyle: {color: 'white'},
                headerRight: () => (
                  <Button
                    title="Log Out"
                    color="white"
                    header
                    onSelect={() => {
                      dispatch(saveUser(null));
                    }}
                  />
                ),
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
                headerRight: () => (
                  <Button
                    title="Log Out"
                    color="white"
                    header
                    onSelect={() => {
                      dispatch(saveUser(null));
                    }}
                  />
                ),
              }}
              component={Detail}
            />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
}

export default App;
