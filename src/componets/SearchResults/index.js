import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import search from '../../../assets/data/search';
import styles from './styles';
import Entypo from 'react-native-vector-icons/Entypo'
import { useNavigation } from '@react-navigation/native';


const SearchResult = ({item}) => {
  const navigation = useNavigation()
  return (
    <View style={styles.row}>
        <View style={styles.iconContainer}>
        <Entypo name='location-pin' size={30}/>
        </View>
      <Text style={styles.locationText}>{item.description}</Text>
    </View>
  );
};

export default SearchResult;
