import React from 'react';
import Post from '../Post/Post';
import { useSelector } from 'react-redux';
import { selectFilteredPosts } from './postsSlice';

function FilteredPosts() {
    const filteredPosts = useSelector(selectFilteredPosts);
    let i = 0;

    return (
        <div className='all-posts'>
            {Object.values(filteredPosts).map(post => {
                const id = post.data.id;
                const author = post.data.author;
                const thread = post.data.subreddit;
                const title = post.data.title;
                const ups = post.data.ups;
                const downs = post.data.downs;
                const created = post.data.created_utc;
                const url = post.data.url;
                const postHint = post.data.post_hint;
                i++;

                if (i > 0 && postHint === 'image') {
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

export default FilteredPosts;
