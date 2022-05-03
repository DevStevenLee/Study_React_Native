import React, { useState } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);
    /**
    * setCounter를 calling 한 이후에는
    * const [counter, setCounter] = useState(0)과 같이
    * initailize 하지 않는다.
    */   
    return (
        <View>
            <Button title='Increase'
            onPress={() => {
                setCounter(count + 1);
            }}/>
            <Button title="Decrease" 
            onPress={() => {
                // Dont do like this! 
                // count--;
     
                setCounter(count - 1);
            }}/>
            <Text>Current Count: {counter}</Text>
        </View>
    )
};

const styles = StyleSheet.create({}); 

export default CounterScreen;