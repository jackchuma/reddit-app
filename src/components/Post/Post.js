import React, { useState } from 'react';
import './Post.css';
import { ImArrowUp, ImArrowDown } from 'react-icons/im';
import postLogo from './post-logo.png';
import { BsBookmark } from 'react-icons/bs';
import { addSavedPost } from '../../features/savedPosts/savedPostsSlice';
import { useDispatch } from 'react-redux';

function Post(props) {

  const author = props.author;
  const thread = props.thread;
  const title = props.title;
  const created = props.created;
  const url = props.url;
  const id = props.id;
  const dispatch = useDispatch();

  const [ups, setUps] = useState(props.ups);
  const [downs, setDowns] = useState(props.downs);

  let rawScore = ups - downs;
  let score = rawScore.toString();
  if (rawScore > 9999 && rawScore < 100000) {
    rawScore = rawScore / 1000;
    score = rawScore.toFixed(1) + 'k';
  } else if (rawScore > 99999) {
    rawScore = rawScore / 1000;
    score = rawScore.toFixed(0) + 'k';
  }

  const timeSec = Date.now() / 1000 - created;
  let time = '';
  let timeVal;
  let timeStr;
  if (timeSec < 60) {
    timeVal = timeSec.toFixed(0);
    timeStr = ' seconds';
    if (timeVal < 2) {
      timeStr = ' second';
    }
    time = timeVal + timeStr;
  } else if (timeSec > 59 && timeSec < 3600) {
    const timeMin = timeSec / 60;
    timeVal = timeMin.toFixed(0);
    timeStr = ' minutes';
    if (timeVal < 2) {
      timeStr = ' minute';
    }
    time = timeVal + timeStr;
  } else if (timeSec > 3599 && timeSec < 86400) {
    const timeHr = timeSec / 3600;
    timeVal = timeHr.toFixed(0);
    timeStr = ' hours';
    if (timeVal < 2) {
      timeStr = ' hour';
    }
    time = timeVal + timeStr;
  } else if (timeSec > 86399 && timeSec < 604800) {
    const timeDay = timeSec / 86400;
    timeVal = timeDay.toFixed(0);
    timeStr = ' days';
    if (timeVal < 2) {
      timeStr = ' day';
    }
    time = timeVal + timeStr;
  } else if (timeSec > 604799 && timeSec < 2628000) {
    const timeWeek = timeSec / 604800;
    timeVal = timeWeek.toFixed(0);
    timeStr = ' weeks';
    if (timeVal < 2) {
      timeStr = ' week';
    }
    time = timeVal + timeStr;
  } else if (timeSec > 2627999) {
    const timeMonth = timeSec / 2628000;
    timeVal = timeMonth.toFixed(0);
    timeStr = ' months';
    if (timeVal < 2) {
      timeStr = ' month';
    }
    time = timeVal + timeStr;
  }

  const calculateScore = (ups, downs) => {
    let rawScore = ups - downs;
    let score = rawScore.toString();
    if (rawScore > 9999) {
      rawScore = rawScore / 1000;
      score = rawScore.toFixed(1) + 'k';
      return score;
    }
  }

  const handleUpClick = () => {
    let num = ups + 1;
    setUps(num);
    score = calculateScore(ups, downs);
  }
  const handleDownClick = () => {
    let num = downs + 1;
    setDowns(num);
    score = calculateScore(ups, downs);
  }

  const handleSaveClick = (e) => {
    dispatch(addSavedPost({
      author: author,
      created: created,
      downs: downs,
      id: id,
      thread: thread,
      title: title,
      ups: ups,
      url: url
  }))};

  return (
    <div className="Post">
      <div className='likes-column'>
        <ImArrowUp className='arrow' id='up-arrow' onClick={handleUpClick} />
        <p id='likes'>{score}</p>
        <ImArrowDown className='arrow' id='down-arrow' onClick={handleDownClick} />
      </div>
      <div className='post'>
        <div className='top-banner'>
          <div className='top-banner-left'>
            <img src={postLogo} alt='Post Logo' className='post-logo' />
            <p className='thread'>r/{thread}</p>
            <p className='dot'>&#8226;</p>
            <p className='author'>Posted by u/{author} {time} ago</p>
          </div>
          <div className='top-banner-right'>
          </div>
        </div>
        <div className='post-content'>
          {title}
          <div className='post-media'>
            <img className='post-media-img' src={url} alt='' />
          </div>
        </div>
        <div className='post-interactions'>
          <button className='post-interactions-button' id='save-button' onClick={handleSaveClick}>
            <div className='post-interactions-symbol'><BsBookmark /></div>
            <p className='post-interactions-buttontext'>Save</p>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
