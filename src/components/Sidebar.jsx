import React from 'react';
import { Link } from 'react-router-dom';
import FeedButton from './FeedButton';
import LikeButton from './LikeButton';
import HoomanprofileButton from './HoomanprofileButton';
import SearchButton from './SearchButton';
import NewPostButton from './NewPostButton';


const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>
        <li>
          <Link to="/feed">
            <FeedButton label="Feed" icon="home" />
          </Link>
        </li>
        <li>
          <Link to="/likes">
            <LikeButton label="Like" icon="heart" />
          </Link>
        </li>
        <li>
          <Link to="/profile">
            <HoomanprofileButton label="Profile" icon="user" />
          </Link>
        </li>
        <li>
          <Link to="/search">
            <SearchButton label="Search" icon="search" />
          </Link>
        </li>
        <li>
          <Link to="/create-post">
            <NewPostButton label="Create Post" icon="plus" />
          </Link>
        </li>
        {/* Add more WidgetButton components for other buttons/widgets */}
      </ul>
    </nav>
  );
};

export default Sidebar;