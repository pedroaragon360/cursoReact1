import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import * as postActions from './posts.actions'
import axios from 'axios';

const posts = {
    "results": [
        {
            id: 1,
            username: "zamarrowski",
            picture: "https://picsum.photos/id/231/500/500",
            likes: 25,
            comments: [
                {
                    username: "jacobo",
                    content: "Foton!!!"
                }
            ]
        },
        {
            id: 2,
            username: "pekerod",
            picture: "https://picsum.photos/id/221/500/500",
            likes: 13,
            comments: []
        }
    ]

}
const PostsE = (props) => {
    // useEffect( () => {

    //     const fetchData = async () => {
    //         const result = await axios(
    //           'http://www.mocky.io/v2/5db348a0300000650057b5e3',
    //         );
    //         console.log(JSON.parse("[" + JSON.stringify(result.data) + "]"))
    //         // props.setPosts(JSON.stringify(result.data))
    //     };
    //     fetchData();

    //     // props.setPosts(posts.results)
    // },[])

    // useEffect( () => {

    //     fetch('http://www.mocky.io/v2/5db348a0300000650057b5e3')
    //         .then(function(response) {
    //             return response.json();
    //         })
    //         .then(function(myJson) {
    //             console.log(myJson);
    //         });

    // },[])

        useEffect( () => {
            props.setPosts(posts.results)
        },[])



    const like = (id) => {
        
        let newPosts = props.posts.map(post => {
            if(post.id === id ){
                post.likes++;
            }
            return post
        })
        props.setPosts(newPosts)

    }

    
    return (dd
        <>
            <h1>POSTS</h1> 
            <span>{props.posts.map((val,key) => {
                return <div key={key}>{val.username} likes: {val.likes} <button onClick={() => like(val.id)}>Like!</button></div> 
            })}</span> 
        </>
    )
}

const mapDispatchProps = (dispatch) => {
    return {
        setPosts: posts => dispatch(postActions.setPosts(posts))
    }
}

const mapStateToProps = (state) => {
    return {
      posts: state.postsR.postsE
    }
}

export default connect(mapStateToProps, mapDispatchProps)(PostsE)