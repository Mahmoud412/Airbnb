import {View, Text, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import SearchResult from '../../componets/SearchResults';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import { useNavigation } from '@react-navigation/native';



const google_API_Key = 'AIzaSyA7u905gLywHo1pyXKrqreC8GwvfckITEQ'
const DestinationSearchScreen = () => {
  const navigation = useNavigation()
  return (
    <View style={styles.container}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going ?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
          navigation.navigate('Guests')
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
