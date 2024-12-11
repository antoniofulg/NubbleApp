/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';

import {Text} from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" bold style={{color: 'black'}}>
        Hello World
      </Text>
      <Text preset="headingLarge" semiBold style={{color: 'black'}}>
        Hello World
      </Text>
      <Text preset="headingLarge" italic style={{color: 'black'}}>
        Hello World
      </Text>
      <Text preset="headingLarge" style={{color: 'black'}}>
        Hello World
      </Text>
    </SafeAreaView>
  );
}

export default App;
