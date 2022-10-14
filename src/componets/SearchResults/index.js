import {View, Text} from 'react-native';
import React from 'react';
import search from '../../../assets/data/search';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo'
const SearchResult = props => {
  const search = props.search;
  return (
    <View style={styles.row}>
        <View style={styles.iconContainer}>
        <Entypo name='location-pin' size={30}/>
        </View>
      <Text style={styles.locationText}>{search.description}</Text>
    </View>
  );
};

export default SearchResult;
