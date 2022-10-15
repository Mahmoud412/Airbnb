import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import DestinationSearchScreen from '../screens/DestinationSearch';
import GuestesScreen from '../screens/Guestes';
import HomeTabNavigator from './HomeTabNavigator';
import SearchResltsScreen from '../screens/SearchResults';

const Stack = createStackNavigator();
const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
          name={'Home'}
          component={HomeTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={'Destination'}
          component={DestinationSearchScreen}
          options={{title: 'Search your destination'}}
        />
        <Stack.Screen name="Guests" component={GuestesScreen} />
        <Stack.Screen name={'Search Results'} component={SearchResltsScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
