import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const NumCounter = ( {number, onIncrease, onDecrease} ) => {
    //console.log(number, onIncrease(), onDecrease());
    return(
        <View>
            <Button title='Increase' onPress={() => onIncrease()}/>
            <Button title='Decrease' onPress={() => onDecrease()}/>

            <Text style={{fontSize: 30}}> Current </Text>
            <Text style={{fontSize: 30}}> Count: </Text>
            <Text style={{marginVertical: 50}}/>
            <Text style={{fontSize: 30}}>{number} </Text>
        </View>
    )
};

const styles = StyleSheet.create({});

export default NumCounter;