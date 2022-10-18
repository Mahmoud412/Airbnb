import {View, Text, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import styles from './styles';

const PostCardItem = props => {
  const width = useWindowDimensions().width
  const post = props.post;
  return (
    <View style={[styles.container , {width:width-60}]}>
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
    </View>
  );
};

export default PostCardItem;
