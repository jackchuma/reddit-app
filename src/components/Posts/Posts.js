import React from 'react';
import './Posts.css';
import Filters from '../Filters/Filters';
import Post from '../Post/Post';

function Posts() {
  return (
    <div className="Posts">
      <p>Popular Posts</p>
      <Filters />
      <Post />
    </div>
  );
}

export default Posts;
