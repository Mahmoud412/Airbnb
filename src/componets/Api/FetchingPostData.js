import {View, Text, FlatList} from 'react-native';
import React, {useEffect, useState} from 'react';
import Post from '../../componets/Post';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

const FetchingPostData = ({guests,viewport}) => {
  console.log(viewport)
  const [posts, SetPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResults = await API.graphql(graphqlOperation(listPosts,{
          filter:{
            and:{
              maxGuestes:{
                ge:guests
              },
              latitude: {between: [viewport.southwest.lat, 
                viewport.northeast.lat],
              },
              longitude: {between: [viewport.southwest.lng, viewport.northeast.lng],
              }
            }
          }
        }))
       
        SetPosts(postsResults.data.listPosts.items);
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

export default FetchingPostData;
