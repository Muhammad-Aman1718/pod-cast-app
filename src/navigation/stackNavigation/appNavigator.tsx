import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import Home from '../../screens/main/home/home';

const App = createNativeStackNavigator();

const AppNavigator = () => {
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

export default AppNavigator;
