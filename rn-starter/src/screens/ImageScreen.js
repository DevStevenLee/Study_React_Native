import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetail from '../components/ImageDetail';

/**
 * ImageScreen과 ImageDetail을 연결해주는 방법
 * components 자체로 스크린을 나타낼 수 있지만
 * 부품으로서 연결할 수도 있다.
 * 
 * 다음과 같이 import한 ImageDetail을 jsx로 가지고 와서
 * title, imageSrc, imageScore처럼 임의의 props를 설정해준다. 
 * 이 props들은 독립된 component에 각각 할당이 된다.
 * 
 * 위와 같은 방법으로 parent - child 연결이 되고
 * ImageDetail에서 이 props들을 사용하면 된다.
 * 
 * 다시말해, props은 System to pass data from a parent to a child이다.
 */

/**
 * State - System to track a piece of data that will change over time. If that data changes,
 * our app will rerender.
 *  
 */


const ImageScreen = () => {
    return(
        <View>
            <ImageDetail title="Forest" imageSrc={require('../../assets/forest.jpg')} imageScore='9'/>
            <ImageDetail title="Beach" imageSrc={require('../../assets/beach.jpg')} imageScore='7'/>
            <ImageDetail title="Mountain" imageSrc={require('../../assets/mountain.jpg')} imageScore='4'/>
        </View>
    );
}

const style = StyleSheet.create({});

export default ImageScreen;