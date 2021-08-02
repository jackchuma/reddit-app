import React from 'react';
import Post from '../Post/Post';
import { v4 as uuidv4 } from 'uuid';
import { useSelector } from 'react-redux';
import { selectPosts } from './postsSlice';

function AllPosts() {
    const allPostsHome = useSelector(selectPosts);
    let i = 0;
    console.log(allPostsHome);

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
                const url = post.data.url;
                const postHint = post.data.post_hint;
                i++;

                if (i > 2 && postHint === 'image') {
                    return <Post
                        key={id} 
                        id={id}
                        author={author}
                        thread={thread}
                        title={title}
                        ups={ups}
                        downs={downs}
                        created={created}
                        url={url} />
                }
                return '';
            })}
        </div>
  );
}

export default AllPosts;
