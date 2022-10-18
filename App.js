/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler'
import React from 'react';
import {
  SafeAreaView, View,
} from 'react-native';

import GuestesScreen from './src/screens/Guestes';
import Router from './src/navigation/Router';



const App = () => {
  

  
  return (
    <SafeAreaView style={{flex:1}}>
      <Router/>
    </SafeAreaView>
  );
};


export default App;
