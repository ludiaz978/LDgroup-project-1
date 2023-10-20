import React from 'react';
import Comment from './Comment'; 
import LikeButton from './LikeButton';
import './Feed.css';
import petProfiles  from '../data/petProfiles';

function Feed() {
  

  // Function to generate a random integer
  const getRandomInt = (max) => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  // Function to create random feed items
  const generateRandomFeedItems = (numItems) => {
    const feedItems = [];
    for (let i = 0; i < numItems; i++) {
      const randomProfile = petProfiles[getRandomInt(petProfiles.length)];

      feedItems.push({
        profile: randomProfile,
        comment: randomProfile.comment || 'Random comment or like', // Use profile comment if available
      });
    }
    return feedItems;
  };

  // Generate random feed items
  const feedItems = generateRandomFeedItems(100); // Adjust the number of items as needed

  return (
    <div className="feed">
      {feedItems.map((item) => (
        <div key={item.profile.id} className="feed-item">
          <img src={item.profile.image} alt={item.profile.name} />
          <p>{item.profile.name}</p>
          <Comment text={item.comment} /> {/* Render the Comment component */}
          <LikeButton /> {/* Render the LikeButton component */}
        </div>
      ))}
    </div>
  );
}

export default Feed;