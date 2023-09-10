/**
 * Root of app
 * Last edited by Syed Nadeem
 *
 *
 * @format
 */

import React from 'react';
import {
  useColorScheme,
} from 'react-native';
import 'react-native-gesture-handler';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import RootStack from './src/navigation/root';
import {NavigationContainer} from '@react-navigation/native';


function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
    <RootStack />
    </NavigationContainer>
  );
}

export default App;
