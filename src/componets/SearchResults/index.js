import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import search from '../../../assets/data/search';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';


const SearchResult = props => {
  const search = props.search;
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={()=> navigation.navigate('Guestes')} style={styles.row}>
        <View style={styles.iconContainer}>
        <Entypo name='location-pin' size={30}/>
        </View>
      <Text style={styles.locationText}>{search.description}</Text>
    </TouchableOpacity>
  );
};

export default SearchResult;
