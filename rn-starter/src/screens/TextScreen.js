import React, {useState} from 'react'
import { View, StyleSheet, Text, TextInput } from 'react-native'

const TextScreen = () => {
    const [name, setName] = useState('');
    //const pwRule = <Text>Password must be longer than 5 characters</Text>;
    
    return (
    <View>
        <Text>Enter Name: </Text>
        <TextInput 
            style={styles.input} 
            autoCapitalize="none"
            autoCorrect={ false }
            value={ name }
            onChangeText={ (newValue) => setName(newValue) }
          />
        <Text>My name is { name }</Text>

    {/* { name.length < 5 ? { pwRule } : null} ; */}
    </View>);
};

const styles = StyleSheet.create({
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    }
});

export default TextScreen;
