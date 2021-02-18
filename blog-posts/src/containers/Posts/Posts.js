import React, { Component } from 'react';
import axios from '../../axios';
// import { Link } from 'react-router-dom';

import './Posts.css';
import Post from '../../components/Post/Post';

class Posts extends Component {
    componentDidMount() {
        // console.log(this.props);
        axios.get('/posts')
            .then(response => {
                const posts = response.data.slice(0,4);
                const updatedPosts = posts.map(post => {
                    return {
                        ...post,
                        author: 'Kris'
                    }
                })
                this.setState({posts: updatedPosts});
                // console.log(response);
            })
            .catch (error => {
                this.setState({error: true});
                // console.log(error);
            });
    }

    state = {
        posts: []
    }

    postSelectedHandler = (id) => {
        this.props.history.push({pathname: '/posts/' + id});
        // this.props.history.push('/posts/' + id)
    }
    
    render() {
        let posts = <p style={{textAlign: 'center'}}>Something went wrong!</p>
        if (!this.state.error) {
            posts = this.state.posts.map(post => {
                return (
                    // <Link to={'/posts/' + post.id} key={post.id}>
                        <Post 
                            key={post.id}
                            title={post.title}
                            author={post.author}
                            clicked={() => this.postSelectedHandler(post.id)} />
                    // </Link>
                );
            });
        }

        return (
            <section className="Posts">
                {posts}
            </section>
        )
    }
}

export default Posts;