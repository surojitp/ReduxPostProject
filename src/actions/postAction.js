import { FETCH_POSTS, NEW_POST } from './types';
// export const fetchPosts = () => (dispatch) =>{
    
//         console.log("fetching");
        
//         fetch('https://jsonplaceholder.typicode.com/posts')
//         .then(data => data.json())
//         .then(res => {
//             dispatch({
//                 type: FETCH_POSTS,
//                 payload: res
//             })
//         })
    
// }

export function fetchPosts(){
    return function(dispatch){
        //console.log("fetching");
        
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(data => data.json())
        .then(res => {
            dispatch({
                type: FETCH_POSTS,
                payload: res
            })
        })
    }
}

export const createPost = (postData) => (dispatch) =>{
    
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(data => dispatch({
        type: NEW_POST,
        payload: data
    }))
    
}