import {View, Text, TextInput, FlatList} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import SearchResult from '../../componets/SearchResults';
import search from '../../../assets/data/search';

const DestinationSearchScreen = () => {
  const [inputText, setInputText] = useState([]);
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={search}
        renderItem={({item}) => <SearchResult search={item} />}
      />
    </View>
  );
};

export default DestinationSearchScreen;
