import React from 'react';
//import './Posts.css';
//import Post from '../Post/Post';
//import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { selectPosts } from './postsSlice';

function AllPosts() {
    const allPostsHome = useSelector(selectPosts);
    console.log(allPostsHome);
    //if (allPostsHome) {
        //const allPosts = allPostsHome.undefined.data.children;
        //console.log(allPosts);
    //}

    return (
        <div className="all-posts">
            All Posts
        </div>
  );
}

export default AllPosts;
