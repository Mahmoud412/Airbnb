import {View, Text, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';

const Geustes = ({route}) => {
  const navigation = useNavigation();
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
    <View style={{justifyContent: 'space-between', height: '100%'}}>
      <View>
        <View style={styles.row}>
          <View>
            <Text style={styles.textAdults}> Adults</Text>
            <Text style={styles.textAge}> Ages 13 or above</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setAdults(Math.max(0, adults - 1))}
              style={styles.button}>
              <Text style={styles.textSign}>-</Text>
            </Pressable>
            <Text style={styles.textValue}>{adults}</Text>
            <Pressable
              onPress={() => setAdults(adults + 1)}
              style={styles.button}>
              <Text style={styles.textSign}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.textAdults}> Children</Text>
            <Text style={styles.textAge}> age 2-12</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setChildren(Math.max(0, children - 1))}
              style={styles.button}>
              <Text style={styles.textSign}>-</Text>
            </Pressable>
            <Text style={styles.textValue}>{children}</Text>
            <Pressable
              onPress={() => setChildren(children + 1)}
              style={styles.button}>
              <Text style={styles.textSign}>+</Text>
            </Pressable>
          </View>
        </View>
        <View style={styles.row}>
          <View>
            <Text style={styles.textAdults}> Infants</Text>
            <Text style={styles.textAge}>under 2</Text>
          </View>

          <View style={styles.buttonContainer}>
            <Pressable
              onPress={() => setInfants(Math.max(0, infants - 1))}
              style={styles.button}>
              <Text style={styles.textSign}>-</Text>
            </Pressable>
            <Text style={styles.textValue}>{infants}</Text>
            <Pressable
              onPress={() => setInfants(infants + 1)}
              style={styles.button}>
              <Text style={styles.textSign}>+</Text>
            </Pressable>
          </View>
        </View>
      </View>
      <View>
        <Pressable
          onPress={() =>
            navigation.navigate('Home', {
              screen: 'Explore',
              params: {
                screen: 'SearchResults',
                params:{
                 guests:  adults + children ,
                 viewport:route.params.viewport,
                 
                }
              },
            })
          }
          style={{
            marginBottom: 20,
            backgroundColor: '#f15454',
            alignItems: 'center',
            justifyContent: 'center',
            height: 50,
            marginHorizontal: 20,
            borderRadius: 10,
          }}>
          <Text style={{fontSize: 18, color: 'white', fontWeight: 'bold'}}>
            Search
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Geustes;
