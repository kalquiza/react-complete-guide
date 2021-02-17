import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import './Blog.css';
import Posts from '../Posts/Posts';
import NewPost from '../NewPost/NewPost';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit-true'
                            }}>New Post</Link></li>
                        </ul>
                    </nav>
                </header>
                <Route path="/" render={() => <h1 style={{textAlign: "center"}}>The Blog Blog</h1>}/>
                <Route path="/" exact  render={() => <h2 style={{textAlign: "center"}}>Home</h2>}/>
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" render={() => <h2 style={{textAlign: "center"}}>New Post</h2>}/>
                <Route path="/new-post" component={NewPost}/>
            </div>
        );
    }
}

export default Blog;