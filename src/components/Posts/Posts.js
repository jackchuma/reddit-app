import React from 'react';
import './Posts.css';
import Filters from '../Filters/Filters';
import AllPosts from './AllPosts';
import HotPosts from './HotPosts';
import NewPosts from './NewPosts';
import TopPosts from './TopPosts';
import RisingPosts from './RisingPosts';
import FilteredPosts from './FilteredPosts';
import SavedPosts from '../../features/savedPosts/SavedPosts';
import { Switch, Route } from 'react-router-dom';

function Posts() {
  return (
    <div className="Posts">
      <p id='popular-posts'>Popular Posts</p>
      <Filters />
      <Switch>
        <Route path='/' exact component={AllPosts} />
        <Route path='/hot' component={HotPosts} />
        <Route path='/new' component={NewPosts} />
        <Route path='/top' component={TopPosts} />
        <Route path='/rising' component={RisingPosts} />
        <Route path='/filtered' component={FilteredPosts} />
        <Route path='/saved' component={SavedPosts} />
      </Switch>
    </div>
  );
}

export default Posts;
