/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from '@navigators';
import { useStyle } from '@hooks';
import { store } from '@store'
import { Provider } from 'react-redux'

function App(): React.JSX.Element {
  const styles = useStyle()

  return (
    <NavigationContainer>
      <Provider store={store}>
        <SafeAreaView style={styles.view}>
          <StatusBar {...styles.statusBar} />
          <RootNavigator />
        </SafeAreaView>
      </Provider>
    </NavigationContainer>
  );
}

export default App;
