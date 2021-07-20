import React from 'react';
import './Post.css';
import {ImArrowUp, ImArrowDown} from 'react-icons/im';
import postLogo from './post-logo.png';
import {AiOutlinePlus} from 'react-icons/ai';
import {FaRegCommentAlt} from 'react-icons/fa';
import {RiShareForwardLine} from 'react-icons/ri';
import {BsBookmark} from 'react-icons/bs';

function Post() {
  return (
    <div className="Post">
      <div className='likes-column'>
        <ImArrowUp className='arrow' id='up-arrow' />
        <p id='likes'>66.9k</p>
        <ImArrowDown className='arrow' id='down-arrow' />
      </div>
      <div className='post'>
        <div className='top-banner'>
          <div className='top-banner-left'>
            <img src={postLogo} alt='Post Logo' className='post-logo' />
            <p className='thread'>r/AskReddit</p>
            <p className='dot'>&#8226;</p>
            <p className='author'>Posted by u/Olya_roo 22 hours ago</p>
          </div>
          <div className='top-banner-right'>
            <p className='join-button'><AiOutlinePlus id='plus-sign' />Join</p>
          </div>
        </div>
        <div className='post-content'>
          What wedding moment made you think: "They are not going to last long"?
        </div>
        <div className='post-interactions'>
          <div className='post-interactions-button' id='comments-button'>
            <div className='post-interactions-symbol'><FaRegCommentAlt /></div>
            <p className='post-interactions-buttontext'>23.9k Comments</p>
          </div>
          <div className='post-interactions-button' id='share-button'>
            <div className='post-interactions-symbol'><RiShareForwardLine /></div>
            <p className='post-interactions-buttontext'>Share</p>
          </div>
          <div className='post-interactions-button' id='save-button'>
            <div className='post-interactions-symbol'><BsBookmark /></div>
            <p className='post-interactions-buttontext'>Save</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;
