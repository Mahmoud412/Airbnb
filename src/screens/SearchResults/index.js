import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Post from '../../componets/Post';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';
import { useRoute } from '@react-navigation/native';
import FetchingPostData from '../../componets/Api/FetchingPostData';

const SearchResltsScreen = (props) => {
  const {guests,viewport} = props
  
  return (
    <View>
    <FetchingPostData guests={guests} viewport={viewport}/>
    </View>
  );
};

export default SearchResltsScreen;
