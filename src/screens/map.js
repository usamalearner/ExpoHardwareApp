import  React ,{useEffect,useState} from 'react';
import MapView ,{Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import * as Location from 'expo-location';

export default function Map() {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);
  
  
        useEffect(() => {
        (async () => {
          let { status } = await Location.requestPermissionsAsync();
          if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
          }
    
          let location = await Location.getCurrentPositionAsync({});
          console.log(location)
          setLocation(location.coords);
        })();
      }, []);
  return (
    <View style={styles.container}>
      <MapView style={styles.map} 
      initialRegion={{
      latitude: 24.8957185,
      longitude: 67.0245024,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    }} >
          <Marker coordinate={{
        latitude:location ? location.latitude:24.8957185,
        longitude:location ? location.longitude:67.0245024,
        // latitude: 24.8957185,
        // longitude: 67.0245024,

    }}/>



    </MapView>
  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});