import {View, Text, Image, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Post = props => {
  const days = 7
  const post = props.post;
  const navigation = useNavigation()

  const goToPostDetail = ()=>{
    navigation.navigate('PostDetail',{postId: post.id})
  }
  return (
    <Pressable onPress={goToPostDetail} style={styles.container}>
      <Image source={{uri:post.image}} style={styles.image} />

      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {post.type} {post.title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>{post.oldPrice} </Text>
        <Text style={styles.newPrice}> {post.newPrice} </Text>/ night
      </Text>
      <Text style={styles.totalPrice}>{post.newPrice * days} total</Text>
    </Pressable>
  );
};

export default Post;
