import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://d6644ef6a12fcfb82f3f-5d6761b1e7eae8e264ad220502fbb6f0.ssl.cf5.rackcdn.com/a1c0b876-61e6-4ec3-8c05-ca96ca60e2d1/images/pickaflatphoto2.jpg',
        }}
        style={styles.image}
      />

      <Text style={styles.bedrooms}>1 bed bedRoom</Text>
      <Text style={styles.description} numberOfLines={2}>
        s simply dummy text of the printing and typesetting industry. Lorem
        Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a
        type specimen book.
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36 </Text>
        <Text style={styles.newPrice}> $30 </Text>/ night
      </Text>
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

export default Post;
