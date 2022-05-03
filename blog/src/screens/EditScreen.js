import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext'
import BlogPostForm from '../components/BlogPostForm';

const EditScreen = ({ navigation }) => {
    const id = navigation.getParam('id')
    const { state, editBlogPost } = useContext(Context);

    const blogPost = state.find(
        (blogPost) => blogPost.id === id
    );

    return <BlogPostForm
        initialValues={{ title: blogPost.title, content: blogPost.content }}
        onSubmit={(title, content) => {
            /**
             * navigation.pop()은 navigation stack에서 하나 제외해주는 것이다.
             * 즉, 바로 전 component으로 이동한다.
             */
            editBlogPost(id, title, content, () => {
                navigation.pop();
            });
    }}/>
}

const styles = StyleSheet.create({});

export default EditScreen;