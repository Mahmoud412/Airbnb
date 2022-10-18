import { View, Text } from 'react-native'
import React from 'react'
import Post from '../../componets/Post'
import places from '../../../assets/data/feed'
import DeatilPost from '../../componets/DetailPost'
import { useRoute } from '@react-navigation/native'

const post = places[0]
const PostDetailsScreen = () => {
   const route = useRoute() 
   const post = places.find(place => place.id === route.params.postId)
  return (
    <View style={{backgroundColor:'white'}}>
     <DeatilPost post = {post}/>
    </View>
  )
}

export default PostDetailsScreen