import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import Geustes from '../../componets/Guestes/Geustes';
import { useRoute } from '@react-navigation/native';

const GuestesScreen = () => {
  const route = useRoute()


  return (
    <Geustes route = {route}/>
  )
    
};

export default GuestesScreen;
