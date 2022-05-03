import React, { useContext } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { NavigationEvents } from 'react-navigation';
import { Text, ListItem } from 'react-native-elements';
import { Context as TrackContext } from '../context/TrackContext';


const TrackListScreen = ({ navigation }) => {
    const { state, fetchTracks } = useContext(TrackContext);

    return (
        <View style={{backgroundColor: 'white', flex: 1}}>
            <NavigationEvents onWillFocus={ fetchTracks }/>

            <FlatList 
                data={ state }
                keyExtractor={ item => item._id }
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigation.navigate('TrackDetail', { _id: item._id })
                        }}>
                            <ListItem>
                                <ListItem.Content>
                                    <ListItem.Title>{item.name}</ListItem.Title>
                                </ListItem.Content>
                                <ListItem.Chevron />
                            </ListItem>
                        </TouchableOpacity>
                    );
                }}

            />
        </View>
    );
};

TrackListScreen.navigationOptions = () => {
    return {
        title: 'Tracks',
        headerTitleStyle: { alignSelf: 'center' }
    }
}

const styles = StyleSheet.create({});

export default TrackListScreen;