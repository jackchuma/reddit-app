import React from 'react';
import Post from '../Post/Post';
import { useSelector } from 'react-redux';
import { selectPosts } from './postsSlice';

function NewPosts() {
  const allPostsHome = useSelector(selectPosts);
  let allPosts = Object.values(allPostsHome);
  allPosts.sort((a,b) => b.data.created_utc - a.data.created_utc);

  return (
    <div className="new-posts">
      {allPosts.map(post => {
        const id = post.data.id;
        const author = post.data.author;
        const thread = post.data.subreddit;
        const title = post.data.title;
        const ups = post.data.ups;
        const downs = post.data.downs;
        const created = post.data.created_utc;
        const url = post.data.url;
        const postHint = post.data.post_hint;

        if (postHint === 'image') {
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

export default NewPosts;
