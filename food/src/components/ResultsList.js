import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import ResultsDetail from './ResultsDetail';

/**
 * * withNavigation
 * 
 * withNavigation is a higher order component which passes the navigation prop into a wrapped component. 
 * It's useful when you cannot pass the navigation prop into the component directly, 
 * or don't want to pass it in case of a deeply nested child.
 */
import { withNavigation } from 'react-navigation';

const ResultsList = ({ title, results, navigation }) => {
    if(!results.length){
        return null;
    }
    
    return (
        <View style={ styles.continer }>
            <Text style={ styles.title }> { title } </Text>
            <FlatList
                horizontal={ true }
                keyExtractor={ (result) => result.id }
                data={ results }
                showsHorizontalScrollIndicator={ false }

                renderItem={({ item })=> {
                    return (
                        /**
                         * * TouchableOpacity
                         * : A wrapper for making views respond properly to touches. On press down, the opacity of the wrapped view is decreased, dimming it.
                         *  
                         */
                        <TouchableOpacity 
                        /**
                         * navigation.navigate(name, params)
                         *                      name - A destination name of the route that has been defined somewhere
                         *                      params - Params to pass to the destination route.
                         * 
                         * 하단은 navigation에 있는 id를 { id: item.id }로 업데이트 시켜주고
                         * ResultsShow screen에 pass해준다.
                         * 
                         * 이 값을 받는 방법은
                         * navigation.getParam("pass한 이름");으로 하면 된다.
                         */
                            onPress={() => navigation.navigate('ResultsShow', { id: item.id })}
                            >
                            <ResultsDetail result={ item }/>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 15,
        marginBottom: 5
    },

    continer: {
        marginBottom: 10
    }
})

/**
 * withNavigation은 navigation prop을 전달한다.
 * 원래라면 ResultsList에서 navigation prop을 사용하기 위해
 * SearchScreen을 통하는 것처럼 parent screen을 이용해 pass되어야 하는데
 * navigation prop을 바로 받기 위해 withNavigation을 이용한다.
 * 
 * 
 */
export default withNavigation(ResultsList);