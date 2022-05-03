import React, /*{ useState }*/ { useReducer } from 'react';

/**
 * Blog Post Provider처럼 data를 다른 child에 data를 pass하는 것을 
 * Context라고 한다.
 * 
 * $ Context
 * 1. Moves information from a parent to some nested child
 * 2  Complicated to setup, lots of special terms
 * 3. Easy to communicate data from a parent to a super nested child
 * 
 */

const BlogContext = React.createContext();


const blogReducer = (state, action) => {
    switch(action.type){
        case 'add_blogpost':
            return [...state, { title: `Blog Post #${state.length + 1}`}];
        default:
            return state;
    }
};

/**
 * 하단에 있는 {children}은 App.js에 파일의   
 * <BlogProvider>
    <App />
  </BlogProvider>
 * 코드에서 <App />이 { children }으로 들어온다.
  즉, BlogContext와 App을 연결한 것이다.
  * 
 * ex) const App = () => {
 *      return <CustomComponent>
 *          <Text>Hi there</Text>
 *      </CustomComponent>
 * }
 * 와 같은 예시에서
 * <Text>Hi there</Text>는 <CustomComponent> component에 감싸져 있으므로
 * <CustomComponent>에서 rendering이 될 것이다.
 * 이것이 가능한 이유는
 * 시스템적으로 위에 예시에 있는 App에서 <CustomComponent>에 children: <Text>Hi there</Text>가 pass된다.
 * 
  */

export const BlogProvider = ({children}) => {
    // useState으로 data를 관리하기
    /*const [blogPosts, setBlogPosts] = useState([]);

    const addBlogPost = ( blogPost ) => {
        setBlogPosts([
            ...blogPosts, 
            { title: `Blog Post #${blogPosts.length + 1}`}
        ]);
    };*/

    // useReducer로 data를 관리하기
    const [blogPosts, dispatch] = useReducer(blogReducer, []);
    const addBlogPost = () => {
        dispatch({ type: 'add_blogpost' })
    }
        /**
         * BlogContext.Provider value는 Context와 연결된 App이 모든 child components에 
         * 값을 보내는 것이다. 여기에서는 <BlogContext.Provider> { children } </BlogContext.Provider>을
         * 통해서 App과 연결했다.
         */
    
    return (
    <BlogContext.Provider 
        value={ { data: blogPosts, addBlogPost: addBlogPost } }>
        { children }
    </BlogContext.Provider>);
};

/**
 * BlogContext에는 BlogContext.Provider을 통해 설정한
 * value 값이 들어있다.
 */
export default BlogContext;