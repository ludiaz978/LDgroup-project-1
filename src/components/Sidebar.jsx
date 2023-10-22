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
        
          <Link to="/feed">
            <FeedButton label="Feed" icon="home" />
          </Link>
        
        
          <Link to="/likes">
            <LikeButton label="Like" icon="heart" />
          </Link>
        
        
          <Link to="/profile">
            <HoomanprofileButton label="Profile" icon="user" />
          </Link>
        
        
          <Link to="/search">
            <SearchButton label="Search" icon="search" />
          </Link>
        
        
          <Link to="/create-post">
            <NewPostButton label="Create Post" icon="plus" />
          </Link>
        
        {/* Add more WidgetButton components for other buttons/widgets */}
      </ul>
    </nav>
  );
};

export default Sidebar;