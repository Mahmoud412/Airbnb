import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import { useRoute } from '@react-navigation/native'
import React from 'react'
import SearchResltsScreen from '../screens/SearchResults'
import SearchResultsMap from '../screens/SearchResultsMap'


const Tab = createMaterialTopTabNavigator()
const SearchResultsTabNavigator = () => {
  const route = useRoute()
  const {guests,viewport} = route.params
  return (
   <Tab.Navigator tabBarOptions={{
    activeTintColor: '#f15454',
    indicatorStyle:{
        backgroundColor:'#f15454'
    }
   }}>
   <Tab.Screen name={'list'}>
   {()=>(
    <SearchResltsScreen guests={guests} viewport={viewport}/>

  )}
   </Tab.Screen>
   <Tab.Screen name={'Map'}>
   {()=>(
    <SearchResultsMap guests={guests} viewport={viewport}/>

  )}
   </Tab.Screen>
   </Tab.Navigator>
  )
}

export default SearchResultsTabNavigator