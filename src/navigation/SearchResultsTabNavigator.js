import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import SearchResltsScreen from '../screens/SearchResults'
import SearchResultsMap from '../screens/SearchResultsMap'


const Tab = createMaterialTopTabNavigator()
const SearchResultsTabNavigator = () => {
  return (
   <Tab.Navigator tabBarOptions={{
    activeTintColor: '#f15454',
    indicatorStyle:{
        backgroundColor:'#f15454'
    }
   }}>
   <Tab.Screen name='list' component={SearchResltsScreen}/>
   <Tab.Screen name='Map' component={SearchResultsMap}/>
   </Tab.Navigator>
  )
}

export default SearchResultsTabNavigator