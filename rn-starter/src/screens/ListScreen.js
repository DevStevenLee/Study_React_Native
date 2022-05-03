import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native'


const ListScreen = () => {


    // const friendsWithAge = [
    //     { name: "Friend 1", age: "Age 20"},
    //     { name: "Friend 2", age: "Age 45"},
    //     { name: "Friend 3", age: "Age 32"},
    //     { name: "Friend 4", age: "Age 27"},
    //     { name: "Friend 5", age: "Age 53"},
    //     { name: "Friend 6", age: "Age 30"}
    // ]

    // return (
    //     <FlatList
    //         keyExtractor={friendsWithAge => friendsWithAge.name}
    //         data={friendsWithAge}
    //         renderItem={({item}) => {
    //             return <Text>{item.name} - {item.age}</Text>
    //         }}
    //         />
    // );

    const friends = [
        { name: "Friend #1", /*key: '1'*/ },
        { name: "Friend #2", /*key: '2'*/ },
        { name: "Friend #3", /*key: '3'*/ },
        { name: "Friend #4", /*key: '4'*/ },
        { name: "Friend #5", /*key: '5'*/ },
        { name: "Friend #6", /*key: '6'*/ }
    ]

    return (
        <FlatList
            // 화면의 element를 vertically가 아니라 gorizontally하게 만들어준다.
            // element를 horizontal로 scroll해 줄 수 있다.
            horizontal={true}

            // 스크롤바가 안보여주게 해준다.
            showsHorizontalScrollIndicator={false}

            // keyExtractor은 자동적으로 key를 설정해주는 옵션이다.
            /*
                friends에서 key는 FlatList를 사용할 때 용이하게 사용되는 옵션이다.
                만약 key를 추가하지 않으면
                friends array에서 하나의 element가 수정이 될 때
                FlatList는 screen에서 보여지는 모든 element를 다 삭제하고
                다시 update를 한다.
                그러나 key를 추가함으로써 모든 것이 삭제가 되는게 아니라
                그 element만 수정시켜준다.

                key는 string이고 unique 해야 한다.
            */
            keyExtractor={(friend) => friend.name}
            
            data={ friends }
            // renderItem은 data에 있는 array의 element를 개별적으로 불러주는 것이다.
            // 하단에 ({ item })은 element 내에 있는 object를 destruct 해주는 것이다.
            // 이는 {}를 통해서 가능하게 했다.
            renderItem={ /*(element)*/ ({ item }) => {
                // element === { item: { name: 'Friend #1'}, index: 0}
                // item === { name: 'Friend #1', index: 0}

                return <Text style={styles.textStyle}>{item.name}</Text>
            }}
            />
    );
};

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50
    }
});

export default ListScreen;