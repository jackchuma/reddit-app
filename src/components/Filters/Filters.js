import './Filters.css';
import {FaFire} from 'react-icons/fa';
import {BsGearWide} from 'react-icons/bs';
import {AiOutlineArrowUp} from 'react-icons/ai';
import {Link} from 'react-router-dom';

function Filters() {

  const handleHotClick = () => {
    const hotButton = document.getElementById('hot');
    hotButton.className = 'selected';

    const newButton = document.getElementById('new');
    newButton.className = 'new';

    const topButton = document.getElementById('top');
    topButton.className = 'top';
  }

  const handleNewClick = () => {
    const hotButton = document.getElementById('hot');
    hotButton.className = 'hot';

    const newButton = document.getElementById('new');
    newButton.className = 'selected';

    const topButton = document.getElementById('top');
    topButton.className = 'top';
  };

  const handleTopClick = () => {
    const hotButton = document.getElementById('hot');
    hotButton.className = 'hot';

    const newButton = document.getElementById('new');
    newButton.className = 'new';

    const topButton = document.getElementById('top');
    topButton.className = 'selected';
  }

  return (
    <div className="Filters">
      <div className='left'>
        <Link style={{textDecoration: 'none'}} to='/hot'>
          <div className='hot selected' id='hot' onClick={handleHotClick}>
            <FaFire />
            <p>Hot</p>
          </div>
        </Link>
        <Link style={{textDecoration: 'none'}} to='/new'>
          <div onClick={handleNewClick} className='new' id='new'>
            <BsGearWide />
            <p>New</p>
          </div>
        </Link>
        <Link style={{textDecoration: 'none'}} to='/top'>
          <div className='top' id='top' onClick={handleTopClick}>
            <AiOutlineArrowUp />
            <p>Top</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Filters;
