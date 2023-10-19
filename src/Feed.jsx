import React from 'react';
import Comment from './Comment'; 
import LikeButton from './LikeButton';
import './Feed.css'

function Feed() {
  // Sample pet profiles (you can use your own data)
  const petProfiles = [
    { id: 1, name: 'Snickers', image: 'Snickers.jpg', comment: 'Looking good!'},
    { id: 2, name: 'MooMoo', image: 'MooMoo.jpg', comment: 'Who wants to help me catch this red bug?' },
    { id: 3, name: 'Chicken', image: 'Chicken.jpg', comment: 'Great day for a walk!' },
    { id: 4, name: 'Bo', image: 'Bo.jpg', comment: 'Looks comfy!' },
    { id: 5, name: 'Toby', image: 'Toby.jpg', comment: 'Where was my invite?' },
    { id: 6, name: 'Jersey', image: 'Jersey.jpg', comment: 'So jealous!' },
    { id: 7, name: 'Reno', image: 'Reno.jpg',comment: 'That was a fun day!' },
    { id: 8, name: 'Cloud', image: 'Cloud.jpg', comment: 'I love my humans!' },
    { id: 9, name: 'Prince', image: 'Prince.jpg', comment: 'Thats my bestfriend!' },
    { id: 10, name: 'Krypto', image: 'Krypto.jpg', comment: 'Lets hangout this week!' },
    { id: 11, name: 'Charlie', image: 'Charlie.jpg', comment: 'I love my siblings!' },
    { id: 12, name: 'Jake', image: 'Jake.jpg', comment: 'Who wants to get lunch?' },
  ];

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
  const feedItems = generateRandomFeedItems(5); // Adjust the number of items as needed

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