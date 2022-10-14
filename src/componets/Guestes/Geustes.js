import { View, Text, Pressable , } from 'react-native'
import React , {useState}from 'react'
import styles from './styles';

const Geustes = () => {
    const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);
  return (
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
  );
  
}

export default Geustes