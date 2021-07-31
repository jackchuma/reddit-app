import React, {useState} from 'react';
import './Post.css';
import {ImArrowUp, ImArrowDown} from 'react-icons/im';
import postLogo from './post-logo.png';
import {AiOutlinePlus} from 'react-icons/ai';
import {FaRegCommentAlt} from 'react-icons/fa';
import {RiShareForwardLine} from 'react-icons/ri';
import {BsBookmark} from 'react-icons/bs';

function Post(props) {

  const author = props.author;
  const thread = props.thread;
  const title = props.title;
  const created = props.created;

  const [ups, setUps] = useState(props.ups);
  const [downs, setDowns] = useState(props.downs);

  let rawScore = ups - downs;
  let score = rawScore.toString();
  if (rawScore > 9999) {
    rawScore = rawScore / 1000;
    score = rawScore.toFixed(1) + 'k';
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
            <p className='join-button'><AiOutlinePlus id='plus-sign' />Join</p>
          </div>
        </div>
        <div className='post-content'>
          {title}
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
