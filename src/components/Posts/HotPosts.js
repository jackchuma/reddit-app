import React from 'react';
import Post from '../Post/Post';
import { useSelector } from 'react-redux';
import { selectPosts } from './postsSlice';

function HotPosts() {
  const allPostsHome = useSelector(selectPosts);
  let allPosts = Object.values(allPostsHome);
  allPosts.sort((a,b) => {
    const timeSecA = Date.now() / 1000 - a.data.created_utc;
    const timeSecB = Date.now() / 1000 - b.data.created_utc;
    const likesA = a.data.ups - a.data.downs;
    const likesB = b.data.ups - b.data.downs;
    const scoreA = likesA / timeSecA;
    const scoreB = likesB / timeSecB;
    return scoreB - scoreA;
  });

  return (
    <div className="hot-posts">
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

export default HotPosts;