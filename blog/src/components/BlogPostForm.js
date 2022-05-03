import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button } from 'react-native';

const BlogPostForm = ({ initialValues, onSubmit }) => {
    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content);

    return (
        <View>
            <Text style={styles.label}>Enter Title: </Text>
            <TextInput style={styles.input} value={ title } onChangeText={(text) => setTitle(text)}/>
            <Text style={styles.label}>Enter Content: </Text>
            <TextInput style={styles.input} value={ content } onChangeText={(text) => setContent(text)}/>

            <Button 
                title="Save Blog Post"
                onPress={() => onSubmit(title, content)}
            />
        </View>
    );
};

/**
 * defaultProps은 외부 components에서 
 * props가 들어오기 전에 먼저 initial을 해주는 것이다.
 * 
 * 여기에서는 defaultProps = { initialValues: {title: '', content: ''}}으로
 * title과 content을 initialize 해주었다.
 */
BlogPostForm.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
};

const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 15,
        padding: 5,
        margin: 5
    },
    label: {
        fontSize: 20,
        marginBottom: 5
    }
});

export default BlogPostForm;
