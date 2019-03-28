import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {fetchPosts} from '../actions/postAction';

class Posts extends Component{
    // constructor(){
    //     super()
    //     this.state = {
    //       posts: []
    //     }
    //   }
    //   componentWillMount(){
    //     fetch('https://jsonplaceholder.typicode.com/posts')
    //     .then(data => data.json())
    //     .then(res => {
    //         //console.log(res);
    //         this.setState({posts: res})
    //     })
    //   }
    componentWillMount(){
        this.props.fetchPosts();
    }
    componentWillReceiveProps(nextProps){
        if(nextProps.newItem){
            this.props.posts.unshift(nextProps.newItem)
        }
    }
    render(){
        const postItems = this.props.posts.map(post =>(
            //console.log(post);
            
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ))
        return(
            <div>
                <h1>Posts</h1>
                {postItems}
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired
}

const mapStateToProps = state => (
    {
        posts: state.posts.items,
        newItem: state.posts.item
    }
);
export default connect(mapStateToProps, {fetchPosts})(Posts);