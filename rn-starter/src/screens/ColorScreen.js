import React, { useState } from 'react';
import { View, StyleSheet, Button, FlatList } from 'react-native';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
    // 하단에 ...colors 구문은 colors 배열에 있는 모든 elements를 가지고 온다는 의미이다.
    <View>
        <Button title="Add a Color" onPress={() => {
            setColors([...colors, randomRgb()])
        }}/>
        
        <FlatList
            keyExtractor={(item) => item + "1"}
            data={colors}
            renderItem={({ item }) => {
                return <View style={{ height: 100, width: 100, backgroundColor: item }}/>
            }}
        />

    </View>);
};

const randomRgb = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({});

export default ColorScreen;