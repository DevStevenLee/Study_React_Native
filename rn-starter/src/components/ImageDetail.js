import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const ImageDetail = ({imageSrc, title, imageScore}) => {
    return (
    <View>
        <Image source={imageSrc}/>
        <Text>{title}</Text>
        <Text>Image socre - {imageScore}</Text>
    </View>);
}

const style = StyleSheet.create({});

export default ImageDetail;