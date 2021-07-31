import React from 'react';
import Post from '../Post/Post';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { selectPosts } from './postsSlice';

function AllPosts() {
    const allPostsHome = useSelector(selectPosts);
    console.log(allPostsHome);
    console.log(Date.now());

    return (
        <div className='all-posts'>
            {Object.values(allPostsHome).map(post => {
                const id = uuidv4();
                const author = post.data.author;
                const thread = post.data.subreddit;
                const title = post.data.title;
                const ups = post.data.ups;
                const downs = post.data.downs;
                const created = post.data.created_utc;

                return <Post 
                    key={id} 
                    id={id}
                    author={author}
                    thread={thread}
                    title={title}
                    ups={ups}
                    downs={downs}
                    created={created} />
            })}
        </div>
  );
}

export default AllPosts;
