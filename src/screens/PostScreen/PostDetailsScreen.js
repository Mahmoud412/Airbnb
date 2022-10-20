import {View, Text} from 'react-native';
import React, {useState, useEffect} from 'react';
import DeatilPost from '../../componets/DetailPost';
import {useRoute} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import {getPost, listPosts} from '../../graphql/queries';




const PostDetailsScreen = () => {
  const route = useRoute();
  const postId = route.params.postId;
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postResult = await API.graphql(
          graphqlOperation(getPost, {id: postId}),
        );
        setPost(postResult.data.getPost)
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);
  return (
    <View style={{backgroundColor: 'white'}}>
      <DeatilPost post = {post}/>
    </View>
  );
};

export default PostDetailsScreen;
