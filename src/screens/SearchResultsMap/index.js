import { View, Text } from 'react-native'
import React from 'react'
import MapViewResults from '../../componets/SearchResultsMap/MapViewResults'

const SearchResultsMap = (props) => {
  const {guests , viewport} = props
  return (
    <View>
    <MapViewResults guests = {guests} viewport={viewport}/>
  </View>
  )
  
}

export default SearchResultsMap