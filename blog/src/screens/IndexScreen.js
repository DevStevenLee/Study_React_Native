import React, { useContext, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Button, TouchableOpacity } from 'react-native';
//import BlogContext from '../context/Context_useState_Reduce_Practice';
import { Context } from '../context/BlogContext';
import { Feather } from '@expo/vector-icons';


const IndexScreen = (props) => {
    //const { data, addBlogPost } = useContext(statePractice);

    // Context에 있는 값들을 가져온다.
    const { state, deleteBlogPost, getBlogPosts } = useContext(Context);

    const { navigation } = props;

    useEffect(() => {
        getBlogPosts();

        /**
         * didFocus
         * : Called after the transition of focusing the screen. 
         *  Maybe useful for input autofocus that waits for the transition to complete before focusing,
         *  or any other animation that should happen when the screen finishes becoming active.
         */

        const listener = navigation.addListener("didFocus", () => {
            getBlogPosts();
        });

        // IndexScreen을 stop 했을 때
        // components들도 없어져야 한다.
        // 따라서 navigation.addListener("didFoucs", () => {getBlogPosts();})을 remove 했다.
        // useEffect()에서 return은 그 screen이 완전히 stop 했을 때 called 된다.
        return () => {
            listener.remove();
        };
    }, []);


    return (
        <View>
            <FlatList 
                data={state}
                keyExtractor={(blogPost) => blogPost.title}
                renderItem={({ item }) => { 
                    return (
                        // navigation.navigate(destination, {options})
                        // option이 destination에 included 되어진다.
                        <TouchableOpacity onPress={() => navigation.navigate("Show", { id: item.id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>
                                    {item.title} - {item.id}
                                </Text>

                                <TouchableOpacity onPress={() => deleteBlogPost(item.id)}>
                                    <Feather name="trash" style={styles.icon} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    );
                }}
            />
        </View>
    );
}
/**
 * 
 * navigationOptions:
 * Each screen can configure various aspects about how it gets presented in parent navigators. You can configure
 * Static configuration: Each navigation option can either be directly assigned:
 * 
 * navigationOptions은 title, header 등 관리해주는 것이다.
 * directly 호출한다.
 */
IndexScreen.navigationOptions = ( props ) => {
    const { navigation } = props;
    
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Create')}>
              <Feather name="plus" size={30} />
            </TouchableOpacity>
          ),
    };
};


const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },

    title: {
        fontSize: 18
    },
    
    icon: {
        fontSize: 24
    }
})

export default IndexScreen;