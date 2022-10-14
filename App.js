/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


import Icon from 'react-native-vector-icons/FontAwesome'
import React from 'react';
import {
  SafeAreaView,
  useColorScheme,
} from 'react-native';
import HomeScreen from './src/screens/Home';
import Post from './src/componets/Post';




const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  
  return (
    <SafeAreaView style={{flex:1}}>
      
    
      <Post/>
    </SafeAreaView>
  );
};


export default App;
