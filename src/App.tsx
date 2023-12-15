/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './navigators';
import { SafeAreaView, StatusBar } from 'react-native';
import { useStyle } from './hooks';

function App(): React.JSX.Element {
  const styles = useStyle()

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.view}>
        <StatusBar {...styles.statusBar} />
        <RootNavigator />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default App;
