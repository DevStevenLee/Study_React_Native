import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state, action) => {
    switch(action.type){
        case "get_blogposts":
            return action.payload;

        case 'edit_blogpost':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id
                    ? action.payload
                    : blogPost;
            });
        case 'add_blogpost':
            return [
                ...state, 
                { id: Math.floor(Math.random() * 99999), 
                title: action.payload.title,
                content: action.payload.content}];
        case 'delete_blogpost':
            return state.filter((blogPost) => blogPost.id !== action.payload);
        default:
            return state;
    }
};

const getBlogPosts = (dispatch) => {
    return async () => {
        /* jsonServer === object of axio
        * 따라서 axio에서 get는 server에 element를 받는 것이다.
        */
        
        const response =  await jsonServer.get("/blogposts");
        
        // response.data === [{ELEMENTS}]
        dispatch({ type: "get_blogposts", payload: response.data});
    }
}

const addBlogPost = (dispatch) => {
    return async (title, content, callback) => {
        /**
         * jsonServer === object of axio
         * 따라서 axio에서 post는 server에 element를 업데이트 해주는 것이다.
         */
        await jsonServer.post("/blogposts", { title, content });

        // server에서 부르기 때문에 더이상 app에서 dispatch할 필요가 없어졌다.
        // dispatch({ type: 'add_blogpost', payload: {title, content}});
        if(callback){
            callback();
        }
    };
};

const deleteBlogPost = (dispatch) => {
    return async (id) => {
        /* jsonServer === object of axio
        * 따라서 axio에서 delete는 server에 element를 지우는 것이다.
        이때 어떤 element를 지우는지 key 값을 주어야 한다.
        */

        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'delete_blogpost', payload: id })
    };
}

const editBlogPost = (dispatch) => {
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, { title, content });
        dispatch({ type: "edit_blogpost", payload: { id, title, content }});
        if(callback){
            callback();
        }
    };
};

/**
 * Context는
 * createDataContext.js에 있는 
 * Context.Provider value={{ state, ...boundActions }를 통해
 * value를들을 담고 전달한다.
 * 
 * Provider는
 * Context 내용을 App.js에서 모든 children들에 distribution하는 것이다.
 */

export const { Context, Provider } = createDataContext(
    blogReducer, 
    { addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts },
    []); 