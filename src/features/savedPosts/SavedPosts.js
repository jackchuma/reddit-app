import React from 'react';
import Post from '../../components/Post/Post';
import { useSelector } from 'react-redux';
import { selectSavedPosts } from './savedPostsSlice';

function SavedPosts() {
    const savedPosts = useSelector(selectSavedPosts);
    let i = 0;

    return (
        <div className='saved-posts-page'>
            {Object.values(savedPosts).map(post => {
                const id = post.id;
                const author = post.author;
                const thread = post.thread;
                const title = post.title;
                const ups = post.ups;
                const downs = post.downs;
                const created = post.created;
                const url = post.url;
                i++;

                if (i > 0) {
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

export default SavedPosts;
