import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

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
                            <li><NavLink 
                                to="/posts/"
                                exact
                                activeClassName="active"
                                activeStyle={{
                                    color: '#fa923f'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                pathname: '/new-post',
                                hash: '#submit',
                                search: '?quick-submit-true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" render={() => <h1 style={{textAlign: "center"}}>The Blog Blog</h1>}/>
                <Route path="/" exact  render={() => <h2 style={{textAlign: "center"}}>Home</h2>}/>
                <Route path="/new-post" render={() => <h2 style={{textAlign: "center"}}>New Post</h2>}/> */}
                <Switch>
                    <Route path="/new-post" component={NewPost}/>
                    <Route path="/posts" component={Posts} />
                </Switch>
            </div>
        );
    }
}

export default Blog;