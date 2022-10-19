import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import feed from '../../../assets/data/feed';
import Post from '../../componets/Post';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

const SearchResltsScreen = () => {

 const [posts , SetPosts] = useState([])
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResults = await API.graphql(graphqlOperation(listPosts));
        SetPosts(postsResults.data.listPosts.items)
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <View>
      <FlatList data={posts} renderItem={({item}) => <Post post={item} />} />
    </View>
  );
};

export default SearchResltsScreen;
