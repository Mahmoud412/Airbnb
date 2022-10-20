import {View, Text, FlatList, useWindowDimensions} from 'react-native';
import React, {useState, memo,useEffect, useRef} from 'react';
import MapView, { PROVIDER_GOOGLE} from 'react-native-maps';
import styles from './styles';
import places from '../../../assets/data/feed';
import CustomMarker from './CustomMarker';
import PostCardItem from '../PostCardItem';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';





const MapViewResults = ({guests,viewport}) => {
  console.log(viewport)
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const [posts, SetPosts] = useState([]);
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
    const index = posts.findIndex(place => place.id === selectedPlaceId)
    flatlist.current.scrollToIndex({index})

    const selectedPlaceZoomIn = posts[index]
    const region = {
      latitude:selectedPlaceZoomIn.latitude,
      longitude:selectedPlaceZoomIn.longitude,
      latitudeDelta:0.8,
      longitudeDelta:0.8,
    }
    mapRef.current.animateToRegion(region)
  }, [selectedPlaceId])


  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsResults = await API.graphql(graphqlOperation(listPosts,{
          filter:{
            and:{
              maxGuestes:{
                ge:guests
              },
              latitude: {between: [viewport.southwest.lat, 
                viewport.northeast.lat],
              },
              longitude: {between: [viewport.southwest.lng, viewport.northeast.lng],
              }
            }
          }
        }))
       
        SetPosts(postsResults.data.listPosts.items);
      } catch (error) {
        console.log(error);
      }
    };

    fetchPosts();
  }, []);

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
        {posts.map(place => (
          <CustomMarker
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
            coordinate={{latitude: place.latitude , longitude:place.longitude}}
            price={place.newPrice}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 10}}>
        <FlatList
          ref={flatlist}
          data={posts}
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
