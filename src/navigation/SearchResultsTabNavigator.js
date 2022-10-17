import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import React from 'react'
import SearchMap from '../screens/SearchMap'
import SearchResltsScreen from '../screens/SearchResults'


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
   <Tab.Screen name='Map' component={SearchMap}/>
   </Tab.Navigator>
  )
}

export default SearchResultsTabNavigator