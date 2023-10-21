import React from 'react';
import { Link } from 'react-router-dom';
import FeedButton from './components/FeedButton';
// import LikeButton from './components/LikeButton';
// import HumanprofileButton from './components/HumanprofileButton';
// import SearchButton from './components/SearchButton';
// import NewPostButton from './components/NewPostButton';

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
            <HumanprofileButton label="Profile" icon="user" />
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