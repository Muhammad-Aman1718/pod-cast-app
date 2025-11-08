import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../../screens/main/home/home.tsx';
// import Login from '../../screens/auth/login.tsx';
// import Register from '../../screens/auth/register.tsx';
import Splash from '../../screens/splash/splash.tsx';
import useSplash from '../../hooks/useSplash.ts';
import AuthNavigator from './authNavigator.tsx';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
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
            name="Auth"
            component={AuthNavigator}
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

export default RootNavigation;
