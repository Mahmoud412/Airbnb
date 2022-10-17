import {View, Text} from 'react-native';
import React from 'react';
import MapView , {PROVIDER_GOOGLE}from 'react-native-maps';

const MapViewResults = () => {
  return (
    <View>
      <MapView
        style={{height: '100%', width: '100%'}}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        }}></MapView>
    </View>
  );
};

export default MapViewResults;