import React from 'react';
import './Posts.css';
import Filters from '../Filters/Filters';
import HotPosts from './HotPosts';
import NewPosts from './NewPosts';
import TopPosts from './TopPosts';
import RisingPosts from './RisingPosts';
import { Switch, Route } from 'react-router-dom';

function Posts() {
  return (
    <div className="Posts">
      <p id='popular-posts'>Popular Posts</p>
      <Filters />
      <Switch>
        <Route path='/' exact component={HotPosts} />
        <Route path='/hot' component={HotPosts} />
        <Route path='/new' component={NewPosts} />
        <Route path='/top' component={TopPosts} />
        <Route path='/rising' component={RisingPosts} />
      </Switch>
    </div>
  );
}

export default Posts;
