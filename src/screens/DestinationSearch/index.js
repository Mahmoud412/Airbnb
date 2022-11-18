import {View, Text, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import SearchResult from '../../componets/SearchResults';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';
import { google_API_Key } from '../../../config';


const DestinationSearchScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going ?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests',{viewport: details.geometry.viewport})
        }}
        fetchDetails
        query={{
          key: google_API_Key,
          language: 'en',
          type:'(cities)'
        }}
        suppressDefaultStyles
        renderRow={(item)=> <SearchResult item={item}/>}

        styles={{textInput:styles.textInput}}
      />

    </View>
  );
};

export default DestinationSearchScreen;
