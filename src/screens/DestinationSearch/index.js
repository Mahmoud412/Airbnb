import {View, Text, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import SearchResult from '../../componets/SearchResults';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';



const google_API_Key = 'AIzaSyD-tZDCkTsiF_dxRkByAJikjzh8TRwjC3Y'
const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState([]);
  return (
    <View style={styles.container}>
    <View style={{height:500}}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going ?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
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
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
    
    </View>
  );
};

export default DestinationSearchScreen;
