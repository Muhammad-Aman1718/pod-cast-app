import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../../screens/main/home';

const App = createNativeStackNavigator();

const appNavigator = () => {
  return (
    <App.Navigator>
      <App.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
    </App.Navigator>
  );
};

export default appNavigator;
