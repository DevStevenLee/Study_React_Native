import React, { useContext } from 'react';
import { StyleSheet, ActivityIndicator } from 'react-native';
import MapView, { Polyline, Circle } from 'react-native-maps';
import { Dimensions } from 'react-native';
import { Context as LocationContext } from '../context/LocationContext';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


const Map = () => {
    const initialLocation = {
        latitude: 36.1033082,
        longitude: 129.387054
    }


    const { state: { currentLocation, locations } } = useContext(LocationContext);

    
    if(!currentLocation){
        return <ActivityIndicator size="large" style={{ marginTop: 200 }}/>;
    }

    return (
        <MapView 
            style={ styles.map }
            initialRegion={{
                ...currentLocation.coords,
                latitudeDelta: 0.01,
                longitudeDelta: 0.01
            }}>


            <Circle
                center={ currentLocation.coords }
                radius={ 20 }
                strokeColor="rgba(158, 158, 255, 1.0)"
                fillColor="rgba(158, 158, 255, 0.3)"
            />
            <Polyline coordinates={locations.map(loc => loc.coords)}/>
        </MapView>
    );
};

const styles = StyleSheet.create({
    map: {
        height: windowHeight / 2,
    }

});

export default Map;
