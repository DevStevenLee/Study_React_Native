import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as BlogContext} from '../context/BlogContext';
import BlogPostForm from '../components/BlogPostForm';

const CreateScreen = ({ navigation }) =>{
    const { addBlogPost } = useContext(BlogContext);

    return <BlogPostForm onSubmit={(title, content) => {
                /*onSubmit={(title, content) => {
                     - Bad Code -
                     // addBlogPost(title, content);
                     // navigation.navigate('Index'); 
                      
                     addBlogPost(title, content) 작업이 끝나고
                     navigation.navigate('Index')로 돌아가야 하는데
                     여기는 addBlogPost(title, content)가 제대로 끝났는지
                     확인할 수가 없다.
                      
                     즉, addBlogPost 작업을 끝나기 전에
                     Index로 돌아갈 수 있다는 것이다.

                     // Solution
                     // callback을 사용한다.
                     // addBlogPost를 할 때 navigate를 callback function으로 pass한다.
                     addBlogPost(title, content, () => {
                     navigation.navigate('Index');
                     }); 
                }}*/
        addBlogPost(title, content, () => navigation.navigate('Index'))
    }}/>;
}

const styles = StyleSheet.create({

});

export default CreateScreen;