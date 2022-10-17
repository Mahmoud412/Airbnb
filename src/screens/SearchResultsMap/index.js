import { View, Text } from 'react-native'
import React from 'react'
import MapView , {PROVIDER_GOOGLE}from 'react-native-maps'
import MapViewResults from '../../componets/SearchResultsMap/MapViewResults'

const SearchResultsMap = () => {
  return (
    <View>
    <MapViewResults/>
  </View>
  )
  
}

export default SearchResultsMap