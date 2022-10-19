import {View, Text, FlatList, useWindowDimensions} from 'react-native';
import React, {useState, memo,useEffect, useRef} from 'react';
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';
import places from '../../../assets/data/feed';
import CustomMarker from './CustomMarker';
import PostCardItem from '../PostCardItem';





const MapViewResults = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const width = useWindowDimensions().width
  const flatlist =  useRef()
  const mapRef = useRef()
  const viewConfig = useRef({itemVisiblePercentThreshold:70})
  const onViewChange = useRef(({viewableItems})=>{
    if(viewableItems.length >0){
      const selectedPlace = viewableItems[0].item
      setSelectedPlaceId(selectedPlace.id)
    }
  })
  useEffect(() => {
    if(!selectedPlaceId || !flatlist){
      return
    }
    const index = places.findIndex(place => place.id === selectedPlaceId)
    flatlist.current.scrollToIndex({index})

    const selectedPlaceZoomIn = places[index]
    const region = {
      latitude:selectedPlaceZoomIn.coordinate.latitude,
      longitude:selectedPlaceZoomIn.coordinate.longitude,
      latitudeDelta:0.8,
      longitudeDelta:0.8,
    }
    mapRef.current.animateToRegion(region)
  }, [selectedPlaceId])

  return (
    <View style={styles.container}>
      <MapView
        ref={mapRef}
        style={styles.mapContainer}
        provider={PROVIDER_GOOGLE}
        region={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}
        >
        {places.map(place => (
          <CustomMarker
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
            coordinate={place.coordinate}
            price={place.newPrice}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatlist}
          data={places}
          renderItem={({item}) => <PostCardItem post={item} />}
          keyExtractor={item=>item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToInterval={width-60}
          snapToAlignment={'center'}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChange.current}
        />
      </View>
    </View>
  );
};

export default memo(MapViewResults);
