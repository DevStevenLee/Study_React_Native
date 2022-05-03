import React from 'react';
import { View, Button, StyleSheet, Text} from 'react-native';

const BoxScreen = () =>{
    return (
    <View style={styles.viewStyle}>
        <Text style={styles.textOneStyle}>Chdil #1</Text>
        <Text style={styles.textTwoStyle}>Child #2</Text>
        <Text style={styles.textThreeStyle}>Child #3</Text>
    </View>);
}
/**
 * $$$$$$$$$$$$$$$$$$ Box Object Model, Flex Box, Postion $$$$$$$$$$$$$$
 * 
 * $$$$$$$$$$ Box Object Model $$$$$$$$$$
 * // padding, border, margin을 의미한다. (stack처럼 padding ~ margin을 차례대로 감싼다는 느낌)
 * 
 * 
 * $$$$$$$$$$$ Flex Box $$$$$$$$$$$ 
 * // How some number of sibling elements get laid out inside a parent
 * // parent의 자식 노드의 위치를 어떻게 하는지 결정해준다.
 * 
 *  #. Parent
 * 
 * // flexDirection: 'column'은 parent 내부의 sibling이 수직으로 배치하는 것이다.
 * // flexDirection: 'row'은 parent 내부의 sibling이 수평으로 배치하는 것이다.
 * 
 * *** alignItem & justifyContent ***
 * 
 * alignItem은 parent의 자식 노드를 어떤 위치로 있어야 하는지 결정한다.
 * 
 * // Default는 alignItems: 'stretch'로 되어 있고 horizontal 넓이가 끝 스크린으로 닿게 해준다.
 * // alignItems: 'flex-start'는 Item을 완전 감싸는 것이다.
 * // alignItems: 'center'은 중간에 위치 시킨다.
 * // alignItems: 'flex-end'는 right hand-side로 하고 Item을 감싸는 것이다.
 * => flexDirection이 column일 때 alignltems의 범위는 horizontal 해진다.
 * => flexDirection이 row일 때 alignItems의 범위는 vertical 해진다.
 * 
 * justifyContent은 parent의 자식 노드들이 어떤 위치로 있어야 하는지 결정해준다.
 * // justifyContent는 flexDirection에 따라서 설정이 된다.
 * // ex) flexDirection이 row일 때 horizontal하게 설정된다.
 * // ex) flexDirection이 column일 때 vertical하게 설정된다.
 * 
 * // justifyContent: 'flex-start'
 * // justifyContent: 'center'
 * // justifyContent: 'flex-end'
 * // justifyContent: 'space-between' <= items 사이에 여백을 준다.
 * // justifyContent: 'space-around' <= 각 items 양옆에 여백을 설정한다.
 *  
 * 
 *  #. Child
 * 1. flex
 * => 각 child에게 어느 정도 크기를 설정할 것인지 allocation을 하는 것이다.
 * ex) A: { flex: 1 }, B: { flex: 2}, C: { flex: 1 }
 *      이와 같은 경우는 1:2:1 크기로 할 당이 된다. 즉, A와 C의 Child 크기는 같고
 *      B는 A,C의 2배의 크기를 할당받는다. 
 * 2. alignSelf
 * => 앞서 다룬 alignItem을 child에서 alignSelf을 사용하여
 *    override를 하는 것과 동일하게 작동한다.. 
 * 
 * 
 * $$$$$$$$$$$$ Position $$$$$$$$$$
 * 1. position
 * position은 item들의 위치가 다른 값들에 영향을 받는 relative와 영향을 받지 않는 absolute로 설정할 수 있다.
 * ex) position: 'relative' <= 다른 item한테 영향을 받는다.
 *     position: 'absolute' <= 다른 item한테 영향을 받지 않는다.
 * 
 * 2. top, bottom, left, right
 * 이 옵션은 margin과 비슷하게 여백을 추가하는 것으로 보이지만
 * 다른 sibling에 영향을 받지 않으며 각 방향을 기준으로 얼마나 이동하는지 정해준다.
 * ex) top: 15 <= top에서 부터 15만큼 밑으로 이동해라.
 * 
 * ++++ 만약 postion: 'absolute'이고 top, bottom, left, right이 다 0 값을 주면
 *      object에 꽉 맞게 할 수 있다. 
 *      이것을 shortcut 할 수 있는데 ...StyleSheet.abosoluteFillObject이다.
 * 
 * 
 * ============================ 정리 =========================
 *                       Applying Layout System
 * 1. Apply box object model rules
 * 2. is postion 'absolute'?
 * If so,
 *      a. Apply some flex box rules, ignore all sibilings
 *      b. Apply top, left, right, bottom
 * If not
 *      a. Apply all flex box rules, considering siblings
 *      b. Place element inside parent
 *      c. Apply top, left, right, bottom
 **/


const styles = StyleSheet.create({
    viewStyle: {
        borderWidth: 3,
        borderColor: 'black',
        height: 200,
        flexDirection: 'column',
        alignItems: 'flex-end'
    },


    textOneStyle: {
        borderWidth: 3,
        borderColor: 'red',
    },

    textTwoStyle: {
        borderWidth: 3,
        borderColor: 'red',
        flex: 2,
        ...StyleSheet.absoluteFillObject
    },

    textThreeStyle: {
        borderWidth: 3,
        borderColor: 'red'
    },
});


export default BoxScreen;