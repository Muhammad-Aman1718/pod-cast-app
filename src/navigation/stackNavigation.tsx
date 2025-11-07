import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/home/home.tsx';
import Login from '../screens/auth/login.tsx';
import Splash from '../screens/splash/splash.tsx';
import useSplash from '../hooks/useSplash.ts';
import Register from '../screens/auth/register.tsx';

const Stack = createNativeStackNavigator();

const StackNavigation = () => {
  const { open } = useSplash();

  return (
    <Stack.Navigator>
      {open ? (
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
      ) : (
        <>
          <Stack.Screen
            name="Login"
            component={Login}
            options={{
              title: 'Login',
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              title: 'Home',
              headerShown: true,
            }}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

export default StackNavigation;
