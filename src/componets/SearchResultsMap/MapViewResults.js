import {View, Text} from 'react-native';
import React, {useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';
import places from '../../../assets/data/feed';
import CustomMarker from './CustomMarker';
import PostCardItem from '../Post/PostCardItem';
const MapViewResults = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapContainer}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map(place => (
          <CustomMarker
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
            coordinate={place.coordinate}
            price={place.newPrice}
          />
        ))}
      </MapView>
      <View style={{position:'absolute' , bottom:10}}>
        <PostCardItem post = {places[0]} />
      </View>
    </View>
  );
};

export default MapViewResults;
