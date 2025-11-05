/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import StackNavigation from './src/navigation/stackNavigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';

function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <StackNavigation />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
