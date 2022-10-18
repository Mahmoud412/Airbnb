import {View, Text, Image, useWindowDimensions,Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const PostCardItem = props => {
  const width = useWindowDimensions().width
  const post = props.post;
  const navigation = useNavigation()

  const goToPostDetail = ()=>{
    navigation.navigate('PostDetail',{postId: post.id})
  }
  return (
    <Pressable onPress={goToPostDetail} style={[styles.container , {width:width-60}]}>
      <View style={styles.innercontainer}>
        <Image source={{uri: post.image}} style={styles.image} />

        <View style={{flex:1,marginHorizontal:10 , marginBottom:10}}>
          <Text style={styles.bedrooms}>
            {post.bed} bed {post.bedroom} bedroom
          </Text>
          <Text style={styles.description} numberOfLines={2}>
            {post.type} {post.title}
          </Text>
          <Text style={styles.prices}>
            <Text style={styles.newPrice}> ${post.newPrice} </Text>/ night
          </Text>
         
        </View>
      </View>
    </Pressable>
  );
};

export default PostCardItem;
