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
import feed from './assets/data/feed';
import SearchResltsScreen from './src/screens/SearchResults';
import DestinationSearchScreen from './src/screens/DestinationSearch';
import SearchResult from './src/componets/SearchResults';
import GuestesScreen from './src/screens/Guestes';


const post2 = feed[1]

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  
  return (
    <SafeAreaView style={{flex:1}}>
      
    
   <GuestesScreen/>
      
    </SafeAreaView>
  );
};


export default App;
