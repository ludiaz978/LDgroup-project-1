import React from 'react';
import { Link } from 'react-router-dom';
import FeedButton from './FeedButton';
import LikeButton from './LikeButton';
import HoomanprofileButton from './HoomanprofileButton';
import SearchButton from './SearchButton';
import NewPostButton from './NewPostButton';
import PostForm from './PostForm';
import Header from '../components/Header';


const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul>

      <Header />

        
          <Link to="/feed">
            <FeedButton label="Feed" icon="🏠" />
          </Link>
        
        
          <Link to="/likes">
            <LikeButton label="Like" icon="❤️" />
          </Link>
        
        
          <Link to="/profile">
            <HoomanprofileButton label="Profile" icon="👤" />
          </Link>
        
        
          <SearchButton label="Search" icon="🔍" />
        
        
          <NewPostButton label="Post" icon="➕" />
        
        {/* Add more WidgetButton components for other buttons/widgets */}
      </ul>
    </nav>
  );
};

export default Sidebar;