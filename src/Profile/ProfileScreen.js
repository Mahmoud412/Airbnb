import {View, Text, Pressable} from 'react-native';
import React from 'react';
import { Auth } from 'aws-amplify';


const ProfileScreen = () => {
    const logout = ()=>{
        Auth.signOut()
    }
  return (
    <View style={{height:'100%' , display:'flex', justifyContent:'center' , alignItems:'center' }}>
      <Pressable
        onPress={logout}
        style={{
          width: '100%',
          height: 40,
          backgroundColor: '#c3c3c3',
          alignItems:'center',
          justifyContent:'center'
        }}
        >
        <Text> Log out </Text>
      </Pressable>
    </View>
  );
};

export default ProfileScreen;
