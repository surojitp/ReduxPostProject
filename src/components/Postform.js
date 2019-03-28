import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {createPost} from '../actions/postAction';

class PostForm extends Component{
    constructor(){
        super()
        this.state = {
          title: '',
          body: ''
        }
        this.onChange = this.onChange.bind(this)
      }

      onChange(e){
          
        this.setState({[e.target.name]: e.target.value})
      }
     
      onSubmit = (e) =>{
        e.preventDefault();
        let postObj = {
            title: this.state.title,
            body: this.state.body,
        }
        //console.log(postObj);

        // fetch('https://jsonplaceholder.typicode.com/posts', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'application/json'
        //     },
        //     body: JSON.stringify(postObj)
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))

        //call action
        this.props.createPost(postObj);   
        
      }
    render(){
        
        return(
            <div>
                <h1>Form</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title:</label><br />
                        <input type="text" name="title" value={this.state.title} onChange={this.onChange} />
                    </div>
                    <br />
                    <div>
                        <label>Body:</label><br />
                        <textarea name="body" value={this.state.body} onChange={this.onChange} /> 
                        <br /><br />
                        <input type="submit" value="Submit" />
                    </div>
                    
                </form> 
                
            </div>
        );
    }
}
export default connect(null, {createPost})(PostForm);